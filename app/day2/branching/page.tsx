"use client";

import React from "react";
import WorkshopLayout from "@/components/Layout/WorkshopLayout";
import Slide from "@/components/Teaching/Slide";
import MermaidDiagram from "@/components/Visuals/MermaidDiagram";
import { GitBranch, GitMerge, Scissors } from "lucide-react";

export default function BranchingPage() {
  return (
    <WorkshopLayout
      currentPath="/day2/branching"
      title="Branching & Merging"
      nextPath="/day2/pull-requests"
      nextTitle="Pull Requests"
    >
      <div className="max-w-4xl mx-auto">
        {/* What is a Branch? */}
        <Slide title="What is a Branch?">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <p className="mb-4">
                A branch is NOT a copy of the files. It is simply a <strong>movable pointer</strong> to a commit.
              </p>
              <div className="bg-slate-900 text-slate-300 p-6 rounded-xl shadow-lg">
                <h4 className="font-bold text-white mb-4 border-b border-slate-700 pb-2">The "HEAD" Pointer</h4>
                <p className="mb-4 text-sm">
                  Git uses a special pointer called <strong>HEAD</strong> to know "You Are Here".
                </p>
                <ul className="space-y-2 text-sm font-mono">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">HEAD</span>
                    <span>→</span>
                    <span className="text-green-400">main</span>
                    <span>→</span>
                    <span className="text-yellow-400">Commit A</span>
                  </li>
                  <li className="text-slate-500 italic">// You are on 'main', looking at Commit A</li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/2 bg-white p-4 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-2 text-center">Visualizing Pointers</h4>
              <MermaidDiagram 
                chart={`gitGraph
       commit id: "A"
       commit id: "B"
       branch feature
       checkout feature
       commit id: "C"
       checkout main
       commit id: "D"
       checkout feature
       commit id: "E"
    `} 
              />
            </div>
          </div>
        </Slide>

        {/* Merge Types */}
        <Slide title="Types of Merges">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl">
              <h3 className="font-bold text-blue-900 mb-2">1. Fast-Forward</h3>
              <p className="text-sm text-blue-800 mb-4">
                Git simply moves the pointer forward. No new commit is created.
              </p>
              <div className="text-xs bg-white p-2 rounded border border-blue-200 text-slate-500">
                Happens when <code>main</code> hasn't changed while you were working on <code>feature</code>.
              </div>
            </div>
            <div className="p-4 bg-purple-50 border border-purple-100 rounded-xl">
              <h3 className="font-bold text-purple-900 mb-2">2. Recursive (Merge Commit)</h3>
              <p className="text-sm text-purple-800 mb-4">
                Git creates a new "Merge Commit" to tie the two histories together.
              </p>
              <div className="text-xs bg-white p-2 rounded border border-purple-200 text-slate-500">
                Happens when <code>main</code> HAS changed (e.g., someone else pushed code).
              </div>
            </div>
          </div>
        </Slide>

        {/* Commands */}
        <Slide title="Essential Commands">
          <div className="grid gap-6">
            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
              <div className="p-2 bg-purple-100 text-purple-600 rounded-lg"><GitBranch /></div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900">Create & Switch</h3>
                <p className="text-sm text-slate-600 mb-2">Create a new branch and switch to it immediately.</p>
                <code className="text-xs bg-slate-900 text-green-400 px-3 py-2 rounded block">git checkout -b feature-name</code>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
              <div className="p-2 bg-blue-100 text-blue-600 rounded-lg"><GitMerge /></div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900">Merge</h3>
                <p className="text-sm text-slate-600 mb-2">Combine changes from another branch into your current one.</p>
                <code className="text-xs bg-slate-900 text-green-400 px-3 py-2 rounded block">git merge feature-name</code>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
              <div className="p-2 bg-red-100 text-red-600 rounded-lg"><Scissors /></div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900">Delete</h3>
                <p className="text-sm text-slate-600 mb-2">Remove a branch after it has been merged.</p>
                <code className="text-xs bg-slate-900 text-green-400 px-3 py-2 rounded block">git branch -d feature-name</code>
              </div>
            </div>
          </div>
        </Slide>

        {/* Best Practices */}
        <Slide title="Branching Strategy">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-green-50 rounded-xl border border-green-100">
              <h3 className="font-bold text-green-900 mb-3">✅ Do This</h3>
              <ul className="space-y-2 text-sm text-green-800">
                <li>• Name branches descriptively (e.g., <code>fix/login-bug</code>).</li>
                <li>• Keep branches short-lived (merge often).</li>
                <li>• Delete branches after merging.</li>
              </ul>
            </div>
            <div className="p-6 bg-red-50 rounded-xl border border-red-100">
              <h3 className="font-bold text-red-900 mb-3">❌ Avoid This</h3>
              <ul className="space-y-2 text-sm text-red-800">
                <li>• Committing broken code to <code>main</code>.</li>
                <li>• Working on one "mega-branch" for months.</li>
                <li>• Naming branches "test", "temp", or "changes".</li>
              </ul>
            </div>
          </div>
        </Slide>
      </div>
    </WorkshopLayout>
  );
}
