"use client";

import React from "react";
import WorkshopLayout from "@/components/Layout/WorkshopLayout";
import Slide from "@/components/Teaching/Slide";
import MermaidDiagram from "@/components/Visuals/MermaidDiagram";
import { AlertTriangle, Check, X } from "lucide-react";

export default function MergeConflictsPage() {
  return (
    <WorkshopLayout
      currentPath="/day2/merge-conflicts"
      title="Handling Merge Conflicts"
      nextPath="/day2/github-issues"
      nextTitle="Issues & Projects"
    >
      <div className="max-w-4xl mx-auto">
        {/* Intro */}
        <Slide title="Don't Panic!">
          <div className="flex items-center gap-6 p-6 bg-red-50 border border-red-100 rounded-xl mb-6">
            <AlertTriangle size={48} className="text-red-500 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-red-900 mb-2">What is a Conflict?</h3>
              <p className="text-red-800">
                A conflict happens when two people change the <strong>same line</strong> of the <strong>same file</strong> differently. Git doesn't know which one to pick, so it asks you to decide.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-4 text-center">Visualizing a Conflict</h3>
            <MermaidDiagram 
              chart={`gitGraph
       commit
       commit
       branch feature-A
       checkout feature-A
       commit id: "Change Line 10"
       checkout main
       commit id: "Also Change Line 10"
       merge feature-A type: REVERSE
`} 
            />
            <p className="text-center text-sm text-slate-500 mt-4">
              Both branches modified the same part of the code. Git stops and asks for help.
            </p>
          </div>
        </Slide>

        {/* Anatomy of a Conflict */}
        <Slide title="Anatomy of a Conflict">
          <p className="mb-6">
            When Git gets confused, it pauses and asks for help. It marks the file like this:
          </p>
          <div className="bg-slate-900 p-6 rounded-xl font-mono text-sm shadow-2xl border border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-yellow-500"></div>
            
            <div className="text-yellow-500 mb-2">{'<<<<<<< HEAD'}</div>
            <div className="text-white pl-4 bg-white/5 py-1">
              const buttonColor = "blue"; // Your change
            </div>
            
            <div className="text-slate-500 my-2">=======</div>
            
            <div className="text-white pl-4 bg-white/5 py-1">
              const buttonColor = "red"; // Incoming change
            </div>
            <div className="text-green-500 mt-2">{'>>>>>>> feature-login'}</div>
          </div>
          
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white border border-slate-200 rounded-xl">
              <h4 className="font-bold text-slate-900 mb-2">The Markers</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li><code>{'<<<<<<<'}</code> : Start of your changes</li>
                <li><code>=======</code> : The divider</li>
                <li><code>{'>>>>>>>'}</code> : End of incoming changes</li>
              </ul>
            </div>
            <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl">
              <h4 className="font-bold text-blue-900 mb-2">How to Fix</h4>
              <ol className="list-decimal list-inside text-sm text-blue-800 space-y-1">
                <li>Delete the markers.</li>
                <li>Choose the code you want (or combine them).</li>
                <li>Save the file.</li>
              </ol>
            </div>
          </div>
        </Slide>

        {/* Resolution Steps */}
        <Slide title="How to Resolve">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-600">1</div>
              <div>
                <h4 className="font-bold text-slate-900">Open the file</h4>
                <p className="text-sm text-slate-600">Open the conflicting file in VS Code. It usually highlights conflicts for you.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-600">2</div>
              <div>
                <h4 className="font-bold text-slate-900">Decide</h4>
                <p className="text-sm text-slate-600">Choose which code is correct. Or combine them if both are needed.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-600">3</div>
              <div>
                <h4 className="font-bold text-slate-900">Clean up</h4>
                <p className="text-sm text-slate-600">Delete the markers (<code>{'<<<<<<<'}</code>, <code>=======</code>, <code>{'>>>>>>>'}</code>). The file should look normal again.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-600">4</div>
              <div>
                <h4 className="font-bold text-slate-900">Commit</h4>
                <p className="text-sm text-slate-600">Stage the file (<code>git add</code>) and commit (<code>git commit</code>). You've resolved the conflict!</p>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </WorkshopLayout>
  );
}
