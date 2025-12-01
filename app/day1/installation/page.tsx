"use client";

import React from "react";
import WorkshopLayout from "@/components/Layout/WorkshopLayout";
import Slide from "@/components/Teaching/Slide";
import { Terminal, CheckCircle, AlertTriangle } from "lucide-react";

export default function InstallationPage() {
  return (
    <WorkshopLayout
      currentPath="/day1/installation"
      title="Installation & Configuration"
      nextPath="/day1/first-commands"
      nextTitle="First Commands"
    >
      <div className="max-w-4xl mx-auto">
        {/* Windows Installation */}
        <Slide title="Installing Git on Windows">
          <div className="space-y-6">
            <p>We will use <strong>Git Bash</strong>, which provides a Unix-like terminal environment on Windows.</p>
            
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-4">Step-by-Step Guide:</h3>
              <ol className="list-decimal list-inside space-y-3 text-slate-700">
                <li>Download the installer from <a href="https://git-scm.com/download/win" target="_blank" className="text-blue-600 hover:underline">git-scm.com</a>.</li>
                <li>Run the `.exe` file.</li>
                <li>
                  <strong>Crucial Step:</strong> When asked about "Adjusting your PATH environment", select:
                  <div className="mt-2 p-3 bg-white border border-slate-200 rounded-lg text-sm font-semibold text-slate-800">
                    "Git from the command line and also from 3rd-party software"
                  </div>
                </li>
                <li>Keep other defaults and click Next until installed.</li>
                <li>Open "Git Bash" to verify.</li>
              </ol>
            </div>
          </div>
        </Slide>

        {/* Mac/Linux Installation */}
        <Slide title="Installing on macOS & Linux">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">🍎</span> macOS
              </h3>
              <div className="code-block">
                <code className="text-sm">
                  # Using Homebrew (Recommended)<br/>
                  brew install git<br/><br/>
                  # Verify<br/>
                  git --version
                </code>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">🐧</span> Linux (Ubuntu/Debian)
              </h3>
              <div className="code-block">
                <code className="text-sm">
                  sudo apt update<br/>
                  sudo apt install git<br/><br/>
                  # Verify<br/>
                  git --version
                </code>
              </div>
            </div>
          </div>
        </Slide>

        {/* Configuration */}
        <Slide title="First-Time Configuration">
          <p className="mb-6">
            Git needs to know who you are. This information is embedded in every commit you make.
          </p>

          <div className="space-y-6">
            <div className="bg-slate-900 text-slate-50 p-6 rounded-xl font-mono text-sm shadow-lg">
              <div className="flex items-center gap-2 mb-4 text-slate-400 border-b border-slate-700 pb-2">
                <Terminal size={16} />
                <span>Terminal</span>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-slate-400 mb-1"># 1. Set your name</p>
                  <p className="text-green-400">git config --global user.name "Your Name"</p>
                </div>
                <div>
                  <p className="text-slate-400 mb-1"># 2. Set your email (must match GitHub)</p>
                  <p className="text-green-400">git config --global user.email "you@example.com"</p>
                </div>
                <div>
                  <p className="text-slate-400 mb-1"># 3. Verify configuration</p>
                  <p className="text-green-400">git config --list</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-yellow-50 text-yellow-800 rounded-lg border border-yellow-200">
              <AlertTriangle className="flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold">Important Note</p>
                <p className="text-sm">
                  Use the <strong>same email address</strong> that you used to sign up for GitHub. 
                  This ensures your contributions show up on your profile correctly.
                </p>
              </div>
            </div>

            <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl">
              <h4 className="font-bold text-blue-900 mb-2">Pro Tip: Set your Editor</h4>
              <p className="text-sm text-blue-800 mb-2">
                Git opens a text editor when you commit. The default is often Vim (which is hard to exit!). Set it to VS Code instead:
              </p>
              <div className="code-block bg-white">
                <code className="text-xs text-slate-700">
                  git config --global core.editor "code --wait"
                </code>
              </div>
            </div>
          </div>
        </Slide>

        {/* Verification Checklist */}
        <Slide title="Verification Checklist">
          <div className="grid gap-4">
            {[
              "Git is installed (git --version returns a version number)",
              "Username is configured",
              "Email is configured",
              "You can open a terminal (Git Bash on Windows, Terminal on Mac/Linux)"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
                <CheckCircle className="text-green-500" />
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </Slide>
      </div>
    </WorkshopLayout>
  );
}
