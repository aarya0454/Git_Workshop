"use client";

import React from "react";
import WorkshopLayout from "@/components/Layout/WorkshopLayout";
import Slide from "@/components/Teaching/Slide";
import ComparisonTable from "@/components/Teaching/ComparisonTable";
import MermaidDiagram from "@/components/Visuals/MermaidDiagram";

export default function VersionControlPage() {
  return (
    <WorkshopLayout
      currentPath="/day1/version-control"
      title="Introduction to Version Control"
      nextPath="/day1/installation"
      nextTitle="Installation & Setup"
    >
      <div className="max-w-4xl mx-auto">
        {/* Intro Slide */}
        <Slide title="What is Version Control?">
          <p>
            Version control is a system that records changes to a file or set of files over time so that you can recall specific versions later.
          </p>
          <div className="mt-6 p-6 bg-blue-50 border border-blue-100 rounded-xl">
            <h3 className="text-lg font-bold text-blue-800 mb-2">Imagine this scenario:</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>You are working on a final year project report.</li>
              <li>You save files like <code className="bg-white px-2 py-1 rounded border border-blue-200">Final_Report.docx</code></li>
              <li>Then <code className="bg-white px-2 py-1 rounded border border-blue-200">Final_Report_v2.docx</code></li>
              <li>Then <code className="bg-white px-2 py-1 rounded border border-blue-200">Final_Report_FINAL_REAL.docx</code></li>
            </ul>
            <p className="mt-4 font-semibold text-blue-900">
              Version Control (Git) solves this chaos professionally.
            </p>
          </div>
        </Slide>

        {/* History of Git */}
        <Slide title="📜 History of Git">
          <div className="space-y-6">
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl">
              <h3 className="text-xl font-bold text-slate-900 mb-3">The Origin Story (2005)</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
                  <span>Created by <strong>Linus Torvalds</strong> (creator of Linux).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
                  <span>Linux kernel development needed a better VCS.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
                  <span>Existing options were either too slow or proprietary (BitKeeper).</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-blue-50 border border-blue-100 rounded-xl">
              <h3 className="text-xl font-bold text-blue-900 mb-3">The Philosophy</h3>
              <ul className="space-y-2 text-blue-800">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
                  <span>Linus wanted something <strong>fast</strong>, <strong>distributed</strong>, and <strong>safe</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
                  <span>He wrote the first version of Git in just <strong>2 weeks</strong>!</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
                  <span>Today, it is the standard for software development worldwide.</span>
                </li>
              </ul>
            </div>
          </div>
        </Slide>

        {/* Why Version Control is Non-Negotiable */}
        <Slide title="Why Version Control is Non-Negotiable">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-red-50 border border-red-100 rounded-xl">
              <h3 className="text-lg font-bold text-red-800 mb-4">Without Version Control (The Nightmare)</h3>
              <ul className="space-y-3 text-red-700">
                <li className="flex items-center gap-2">
                  <span>❌</span> Files named <code className="bg-white px-1 py-0.5 rounded text-xs">final_v9_REALLY_FINAL.java</code>
                </li>
                <li className="flex items-center gap-2">
                  <span>❌</span> Commenting out code blocks just to 'save' them
                </li>
                <li className="flex items-center gap-2">
                  <span>❌</span> Emailing zip files to your teammates
                </li>
                <li className="flex items-center gap-2">
                  <span>❌</span> "It works on my machine" but breaks on yours
                </li>
              </ul>
            </div>
            
            <div className="p-6 bg-green-50 border border-green-100 rounded-xl">
              <h3 className="text-lg font-bold text-green-800 mb-4">With Git (The Professional Way)</h3>
              <ul className="space-y-3 text-green-700">
                <li className="flex items-center gap-2">
                  <span>✅</span> A clear, linear history of every modification
                </li>
                <li className="flex items-center gap-2">
                  <span>✅</span> Instant rollback to the last working state
                </li>
                <li className="flex items-center gap-2">
                  <span>✅</span> A single source of truth for the entire team
                </li>
              </ul>
            </div>
          </div>
        </Slide>

        {/* Evolution of Version Control */}
        <Slide title="Evolution of Version Control">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                <h3 className="text-xl font-bold text-slate-800 mb-2">Local VCS</h3>
                <p className="text-slate-600">
                  Files saved on a single computer. Hard to collaborate, high risk of data loss.
                </p>
              </div>
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                <h3 className="text-xl font-bold text-slate-800 mb-2">Centralized VCS (CVCS)</h3>
                <p className="text-slate-600">
                  Single server contains all files. If server fails, everyone is stuck. (e.g., SVN).
                </p>
              </div>
              <div className="p-6 bg-blue-50 rounded-xl border border-blue-100 shadow-sm">
                <h3 className="text-xl font-bold text-blue-800 mb-2">Distributed VCS (DVCS)</h3>
                <p className="text-blue-700">
                  Every client mirrors the repository. Full backup on every machine. Offline work possible. (e.g., Git).
                </p>
              </div>
            </div>
            <div className="relative bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-center p-4 shadow-lg">
              <MermaidDiagram 
                chart={`graph TD
    subgraph Centralized
    Server[(Server)]
    Client1[Client A]
    Client2[Client B]
    Client1 -->|Check out| Server
    Client2 -->|Check out| Server
    end

    subgraph Distributed
    Server2[(Server)]
    Client3[Client A]
    Client4[Client B]
    Client3 <-->|Push/Pull| Server2
    Client4 <-->|Push/Pull| Server2
    Client3 <-->|Peer| Client4
    end
`} 
              />
            </div>
          </div>
        </Slide>

        {/* Why Tech Giants Use It */}
        <Slide title="Why Tech Giants Use Git?">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Speed</h3>
              <p className="text-slate-600 text-sm">
                Git is extremely fast. Operations like branching and merging are instantaneous.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Integrity</h3>
              <p className="text-slate-600 text-sm">
                Everything is checksummed. It's impossible to change file contents without Git knowing.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Branching</h3>
              <p className="text-slate-600 text-sm">
                Killer feature. Cheap and easy branching encourages non-linear development workflows.
              </p>
            </div>
          </div>
        </Slide>

        {/* Tech Giants Usage */}
        <Slide title="Case Studies: Scale of Version Control">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card bg-white border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-xl">G</div>
                <h3 className="text-xl font-bold text-slate-900">Google</h3>
              </div>
              <ul className="space-y-2 text-slate-600">
                <li>• Uses a massive monolithic repository (Piper).</li>
                <li>• Billions of lines of code.</li>
                <li>• 40,000+ commits per day.</li>
                <li>• <strong>Why?</strong> Code sharing and unified dependency management.</li>
              </ul>
            </div>
            <div className="card bg-white border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-xl">M</div>
                <h3 className="text-xl font-bold text-slate-900">Microsoft</h3>
              </div>
              <ul className="space-y-2 text-slate-600">
                <li>• Windows OS repo is 300GB+.</li>
                <li>• Created VFS for Git to handle this scale.</li>
                <li>• 4,000 engineers working on the same repo.</li>
                <li>• <strong>Why?</strong> Git allows them to manage this complexity.</li>
              </ul>
            </div>
          </div>
        </Slide>

        {/* Under the Hood */}
        <Slide title="Under the Hood: The .git Folder">
          <div className="flex items-start gap-6">
            <div className="flex-1">
              <p className="mb-4">
                Git isn't magic. It's just a folder named <code>.git</code> hidden in your project.
              </p>
              <div className="bg-slate-900 text-slate-300 p-6 rounded-xl font-mono text-sm shadow-lg">
                <div className="flex items-center gap-2 mb-4 text-slate-500 border-b border-slate-700 pb-2">
                  <span>.git structure</span>
                </div>
                <ul className="space-y-2">
                  <li className="flex gap-4">
                    <span className="text-blue-400 w-20">HEAD</span>
                    <span>Pointer to your current branch (e.g., refs/heads/main)</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-blue-400 w-20">config</span>
                    <span>Your local settings (remote URLs, user info)</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-blue-400 w-20">objects/</span>
                    <span>The database! Compressed files and commits live here.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-blue-400 w-20">refs/</span>
                    <span>Bookmarks for branches and tags.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Slide>

        {/* Three Tree Architecture */}
        <Slide title="The Three Tree Architecture">
          <p className="mb-6">
            To understand Git, you must understand the three states of a file.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-center mb-8">
            <div className="p-4 bg-red-50 border border-red-100 rounded-xl">
              <h3 className="font-bold text-red-900 mb-2">1. Working Directory</h3>
              <p className="text-xs text-red-700">The actual files on your hard drive that you edit.</p>
            </div>
            <div className="p-4 bg-yellow-50 border border-yellow-100 rounded-xl">
              <h3 className="font-bold text-yellow-900 mb-2">2. Staging Area</h3>
              <p className="text-xs text-yellow-700">A "holding zone" for changes you want to commit.</p>
            </div>
            <div className="p-4 bg-green-50 border border-green-100 rounded-xl">
              <h3 className="font-bold text-green-900 mb-2">3. Repository</h3>
              <p className="text-xs text-green-700">The permanent history stored in .git.</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex justify-center">
             <MermaidDiagram 
                chart={`graph LR
    WD[Working Directory] -->|git add| Index[Staging Area]
    Index -->|git commit| Repo[Repository]
    Repo -->|git checkout| WD
`} 
              />
          </div>
        </Slide>

        {/* Key Terminology */}
        <Slide title="Key Terminology">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { term: "Repository (Repo)", desc: "The project folder containing all files and history." },
              { term: "Commit", desc: "A snapshot of your files at a specific point in time." },
              { term: "Branch", desc: "A parallel version of the repository for isolated work." },
              { term: "Merge", desc: "Combining changes from one branch into another." },
              { term: "Remote", desc: "A version of the repository hosted on the internet (GitHub)." },
              { term: "Clone", desc: "Downloading a repository from a remote server." },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors">
                <div className="w-2 h-2 mt-2.5 rounded-full bg-blue-500 flex-shrink-0" />
                <div>
                  <span className="font-bold text-slate-900 block">{item.term}</span>
                  <span className="text-slate-600 text-sm">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </Slide>
      </div>
    </WorkshopLayout>
  );
}
