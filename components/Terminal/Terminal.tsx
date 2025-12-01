"use client";

import { useEffect, useRef, useState } from "react";
import { Terminal as XTerm } from "@xterm/xterm";
import { FitAddon } from "@xterm/addon-fit";
import { RotateCcw, Copy, Check } from "lucide-react";
import { GitSimulator } from "@/lib/GitSimulator";
import "@xterm/xterm/css/xterm.css";

interface TerminalProps {
  initialCommands?: string[];
  readOnly?: boolean;
}

export default function Terminal({ initialCommands = [], readOnly = false }: TerminalProps) {
  const terminalRef = useRef<HTMLDivElement>(null);
  const xtermRef = useRef<XTerm | null>(null);
  const [gitSim] = useState(() => new GitSimulator());
  const [currentLine, setCurrentLine] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!terminalRef.current) return;

    // Initialize terminal
    const term = new XTerm({
      cursorBlink: true,
      fontSize: 16,
      fontFamily: 'JetBrains Mono, Fira Code, monospace',
      theme: {
        background: '#161b22',
        foreground: '#c9d1d9',
        cursor: '#58a6ff',
        black: '#0d1117',
        red: '#f85149',
        green: '#3fb950',
        yellow: '#d29922',
        blue: '#58a6ff',
        magenta: '#bc8cff',
        cyan: '#76e3ea',
        white: '#c9d1d9',
      },
      cols: 80,
      rows: 24,
    });

    const fitAddon = new FitAddon();
    term.loadAddon(fitAddon);
    term.open(terminalRef.current);
    
    // Delay fit to ensure DOM is ready
    setTimeout(() => {
      try {
        fitAddon.fit();
      } catch (e) {
        console.error("Failed to fit terminal:", e);
      }
    }, 100);

    // Welcome message
    term.writeln('\x1b[1;36mGitHub Workshop Terminal\x1b[0m');
    term.writeln('Type Git commands to practice. Type "help" for available commands.\n');

    // Run initial commands if provided
    initialCommands.forEach((cmd) => {
      term.writeln(`$ ${cmd}`);
      const output = gitSim.execute(cmd);
      if (output) term.writeln(output);
    });

    term.write('$ ');

    let currentInput = '';

    // Handle user input
    term.onData((data) => {
      if (readOnly) return;

      const code = data.charCodeAt(0);

      // Enter key
      if (code === 13) {
        term.write('\r\n');
        if (currentInput.trim()) {
          const output = gitSim.execute(currentInput.trim());
          if (output) {
            term.writeln(output);
          }
        }
        currentInput = '';
        term.write('$ ');
      }
      // Backspace
      else if (code === 127) {
        if (currentInput.length > 0) {
          currentInput = currentInput.slice(0, -1);
          term.write('\b \b');
        }
      }
      // Ctrl+C
      else if (code === 3) {
        term.write('^C\r\n$ ');
        currentInput = '';
      }
      // Ctrl+L (clear)
      else if (code === 12) {
        term.clear();
        term.write('$ ');
        currentInput = '';
      }
      // Regular character
      else if (data >= String.fromCharCode(32)) {
        currentInput += data;
        term.write(data);
      }
    });

    xtermRef.current = term;

    // Handle resize
    const handleResize = () => fitAddon.fit();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      term.dispose();
    };
  }, [gitSim, initialCommands, readOnly]);

  const handleReset = () => {
    gitSim.reset();
    xtermRef.current?.clear();
    xtermRef.current?.writeln('\x1b[1;36mTerminal Reset\x1b[0m\n');
    xtermRef.current?.write('$ ');
  };

  const handleCopy = () => {
    // Copy the current visible terminal content
    const content = xtermRef.current?.buffer.active.getLine(0)?.translateToString() || "";
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <div className="bg-gh-bg-secondary rounded-lg overflow-hidden border border-gh-border">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2 bg-gh-bg-tertiary border-b border-gh-border">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gh-accent-red"></div>
            <div className="w-3 h-3 rounded-full bg-gh-accent-yellow"></div>
            <div className="w-3 h-3 rounded-full bg-gh-accent-green"></div>
            <span className="ml-3 text-projector-xs text-gh-text-secondary">Terminal</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="p-2 hover:bg-gh-bg-secondary rounded transition-colors"
              title="Copy terminal content"
            >
              {copied ? (
                <Check size={16} className="text-gh-accent-green" />
              ) : (
                <Copy size={16} className="text-gh-text-secondary" />
              )}
            </button>
            <button
              onClick={handleReset}
              className="p-2 hover:bg-gh-bg-secondary rounded transition-colors"
              title="Reset terminal"
            >
              <RotateCcw size={16} className="text-gh-text-secondary" />
            </button>
          </div>
        </div>

        {/* Terminal Display */}
        <div ref={terminalRef} className="p-4" style={{ height: '500px' }} />
      </div>

      {!readOnly && (
        <p className="text-projector-xs text-gh-text-secondary mt-2">
          Tip: Press Ctrl+L to clear, Ctrl+C to cancel current command
        </p>
      )}
    </div>
  );
}
