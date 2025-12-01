"use client";

import React from "react";
import WorkshopLayout from "@/components/Layout/WorkshopLayout";
import Slide from "@/components/Teaching/Slide";
import TerminalWrapper from "@/components/Terminal/TerminalWrapper";
import { Terminal, GitCommit, FilePlus, Search, Clock } from "lucide-react";

export default function FirstCommandsPage() {
  return (
    <WorkshopLayout
      currentPath="/day1/first-commands"
      title="First Git Commands"
      nextPath="/day1/local-repository"
      nextTitle="Local Repositories"
    >
      <div className="max-w-4xl mx-auto">
        {/* Introduction */}
        <Slide title="The Core Workflow">
          <p className="mb-6">
            Git revolves around a simple 3-step workflow: <strong>Modify → Stage → Commit</strong>.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <div className="text-3xl mb-2">✍️</div>
              <h3 className="font-bold text-slate-900">1. Modify</h3>
              <p className="text-sm text-slate-600">Create or edit files</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
              <div className="text-3xl mb-2">📦</div>
              <h3 className="font-bold text-blue-900">2. Stage</h3>
              <p className="text-sm text-blue-700">Select changes to save</p>
            </div>
            <div className="p-4 bg-green-50 rounded-xl border border-green-100">
              <div className="text-3xl mb-2">💾</div>
              <h3 className="font-bold text-green-900">3. Commit</h3>
              <p className="text-sm text-green-700">Save snapshot permanently</p>
            </div>
          </div>
        </Slide>

        {/* Git Init */}
        <Slide title="1. Initialize (git init)">
          <div className="flex items-start gap-6">
            <div className="flex-1">
              <p className="mb-4">
                Turns a regular folder into a Git repository. This creates a hidden <code>.git</code> folder that tracks every change you make.
              </p>
              <div className="code-block">
                <code className="text-sm">
                  mkdir my-project<br/>
                  cd my-project<br/>
                  <span className="text-green-400">git init</span>
                </code>
              </div>
            </div>
            <div className="hidden md:block w-1/3 bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-700 mb-2 flex items-center gap-2">
                <Terminal size={16} /> Pro Tip
              </h4>
              <p className="text-sm text-slate-600">
                You only run this <strong>once</strong> per project. Do not run it inside a folder that is already a repo!
              </p>
            </div>
          </div>
        </Slide>

        {/* Git Status */}
        <Slide title="2. Check Status (git status)">
          <div className="flex items-start gap-6">
            <div className="flex-1">
              <p className="mb-4">
                Your best friend. Tells you exactly what's going on: which files are modified, staged, or untracked.
              </p>
              <div className="code-block">
                <code className="text-sm">
                  <span className="text-green-400">git status</span>
                </code>
              </div>
              <div className="mt-4 p-4 bg-slate-900 rounded-lg font-mono text-sm text-slate-300">
                <p>On branch main</p>
                <p className="text-red-400">Untracked files:</p>
                <p className="text-red-400 pl-4">index.html</p>
              </div>
            </div>
            <div className="hidden md:block w-1/3 bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-700 mb-2 flex items-center gap-2">
                <Search size={16} /> Insight
              </h4>
              <p className="text-sm text-slate-600">
                Run this command whenever you are confused. It's safe and never changes anything.
              </p>
            </div>
          </div>
        </Slide>

        {/* Git Add */}
        <Slide title="3. Stage Changes (git add)">
          <div className="flex items-start gap-6">
            <div className="flex-1">
              <p className="mb-4">
                Moves files from "Modified" to "Staged". Think of this as putting items into a box before sealing it.
              </p>
              <div className="code-block">
                <code className="text-sm">
                  # Stage a specific file<br/>
                  <span className="text-green-400">git add index.html</span><br/><br/>
                  # Stage ALL changed files (Common)<br/>
                  <span className="text-green-400">git add .</span>
                </code>
              </div>
            </div>
            <div className="hidden md:block w-1/3 bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-700 mb-2 flex items-center gap-2">
                <FilePlus size={16} /> Why Stage?
              </h4>
              <p className="text-sm text-slate-600">
                Staging lets you group related changes together. You might edit 10 files but only want to commit 3 of them.
              </p>
            </div>
          </div>
        </Slide>

        {/* Git Commit */}
        <Slide title="4. Save Snapshot (git commit)">
          <div className="flex items-start gap-6">
            <div className="flex-1">
              <p className="mb-4">
                Seals the box. Saves a permanent snapshot of the staged files with a message describing what you did.
              </p>
              <div className="code-block">
                <code className="text-sm">
                  <span className="text-green-400">git commit -m "Create homepage layout"</span>
                </code>
              </div>
              
              <div className="mt-6">
                <h4 className="font-bold text-slate-900 mb-2">Writing Good Commit Messages:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 font-bold text-sm">✅ Good</p>
                    <p className="text-green-700 text-sm">"Add login form validation"</p>
                  </div>
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 font-bold text-sm">❌ Bad</p>
                    <p className="text-red-700 text-sm">"Fixed stuff"</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block w-1/3 space-y-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-700 mb-2 flex items-center gap-2">
                  <GitCommit size={16} /> Best Practice
                </h4>
                <p className="text-sm text-slate-600">
                  Commit often! Small, focused commits are easier to understand and fix than massive ones. This is called <strong>Atomic Commits</strong>.
                </p>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
                <h4 className="font-bold text-purple-900 mb-2 text-xs uppercase">Pro Shortcut</h4>
                <p className="text-sm text-purple-800 mb-2">
                  Skip the staging step for files Git already knows about:
                </p>
                <code className="text-xs bg-white px-2 py-1 rounded border border-purple-200 text-purple-700 block text-center">
                  git commit -am "Message"
                </code>
              </div>
            </div>
          </div>
        </Slide>

        {/* Git Log */}
        <Slide title="5. View History (git log)">
          <p className="mb-4">
            See a list of all commits in the repository's history.
          </p>
          <div className="code-block">
            <code className="text-sm">
              <span className="text-green-400">git log</span><br/><br/>
              # One-line summary (Cleaner)<br/>
              <span className="text-green-400">git log --oneline</span>
            </code>
          </div>
        </Slide>

        {/* Interactive Terminal */}
        <Slide title="Interactive Practice">
          <p className="mb-6">
            Try the workflow yourself! We've initialized a repo for you.
          </p>
          <div className="bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-slate-800">
            <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-xs text-slate-400 font-mono ml-2">bash — 80x24</span>
            </div>
            <div className="p-4">
              <TerminalWrapper initialCommands={["git init"]} />
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
              <h4 className="font-bold text-slate-900 mb-2">Mission 1:</h4>
              <p className="text-sm text-slate-600">Create a file called <code>style.css</code> and check status.</p>
              <code className="block mt-2 text-xs bg-slate-100 p-2 rounded text-slate-700">touch style.css && git status</code>
            </div>
            <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
              <h4 className="font-bold text-slate-900 mb-2">Mission 2:</h4>
              <p className="text-sm text-slate-600">Stage and commit the file.</p>
              <code className="block mt-2 text-xs bg-slate-100 p-2 rounded text-slate-700">git add . && git commit -m "Add styles"</code>
            </div>
          </div>
        </Slide>
      </div>
    </WorkshopLayout>
  );
}
