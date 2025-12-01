"use client";

import React from "react";
import WorkshopLayout from "@/components/Layout/WorkshopLayout";
import Slide from "@/components/Teaching/Slide";
import MermaidDiagram from "@/components/Visuals/MermaidDiagram";
import { GitFork, Download, RefreshCw } from "lucide-react";

export default function ContributionFlowPage() {
  return (
    <WorkshopLayout
      currentPath="/day3/contribution-flow"
      title="The Contribution Cycle"
      nextPath="/day3/documentation"
      nextTitle="Writing Documentation"
    >
      <div className="max-w-4xl mx-auto">
        {/* Visual Flow */}
        <Slide title="The Standard Workflow">
          <p className="mb-6">
            Contributing to open source follows a specific pattern because you don't have permission to write directly to the main repository.
          </p>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mb-6">
            <MermaidDiagram 
              chart={`sequenceDiagram
    participant You
    participant GitHub
    participant OriginalRepo

    Note over You, OriginalRepo: 1. Fork
    OriginalRepo->>GitHub: Fork to your account
    Note over You, GitHub: 2. Clone
    GitHub->>You: git clone
    Note over You: 3. Branch & Code
    You->>You: git checkout -b fix-bug
    You->>You: git commit
    Note over You, GitHub: 4. Push
    You->>GitHub: git push origin fix-bug
    Note over GitHub, OriginalRepo: 5. Pull Request
    GitHub->>OriginalRepo: Open PR
`} 
            />
          </div>
        </Slide>

        {/* Step 1: Fork */}
        <Slide title="1. Fork & Clone">
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-slate-900 mb-2">A. Fork on GitHub</h3>
              <p className="text-sm text-slate-600 mb-2">Click the "Fork" button. This creates a copy on <strong>your</strong> account.</p>
            </div>
            
            <div>
              <h3 className="font-bold text-slate-900 mb-2">B. Clone to Local</h3>
              <div className="code-block">
                <code className="text-sm">
                  <span className="text-slate-500"># Clone YOUR fork, not the original!</span><br/>
                  <span className="text-green-400">git clone https://github.com/YOUR-USERNAME/project.git</span><br/>
                  <span className="text-green-400">cd project</span>
                </code>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 mb-2">C. Add Upstream</h3>
              <p className="text-sm text-slate-600 mb-2">Link to the original repo so you can get updates.</p>
              <div className="code-block">
                <code className="text-sm">
                  <span className="text-green-400">git remote add upstream https://github.com/ORIGINAL-OWNER/project.git</span><br/>
                  <span className="text-green-400">git remote -v</span> <span className="text-slate-500"># Should show origin AND upstream</span>
                </code>
              </div>
            </div>
          </div>
        </Slide>

        {/* Step 2: Branch & Code */}
        <Slide title="2. Branch & Code">
          <div className="space-y-6">
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-800">
              <strong>NEVER commit to main!</strong> Always create a new branch for every feature or bug fix.
            </div>

            <div className="code-block">
              <code className="text-sm">
                <span className="text-slate-500"># 1. Get latest changes from original repo</span><br/>
                <span className="text-green-400">git checkout main</span><br/>
                <span className="text-green-400">git pull upstream main</span><br/><br/>
                
                <span className="text-slate-500"># 2. Create your feature branch</span><br/>
                <span className="text-green-400">git checkout -b fix-login-bug</span><br/><br/>
                
                <span className="text-slate-500"># 3. Code, Add, Commit</span><br/>
                <span className="text-green-400">git add .</span><br/>
                <span className="text-green-400">git commit -m "Fix login button alignment"</span>
              </code>
            </div>
          </div>
        </Slide>

        {/* Step 3: Push & PR */}
        <Slide title="3. Push & PR">
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-slate-900 mb-2">Push to YOUR Fork</h3>
              <div className="code-block">
                <code className="text-sm">
                  <span className="text-green-400">git push origin fix-login-bug</span>
                </code>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 mb-2">Open Pull Request</h3>
              <p className="text-sm text-slate-600 mb-4">
                Go to the <strong>Original Repository</strong> on GitHub. You'll see a yellow banner: "fix-login-bug had recent pushes". Click <strong>Compare & pull request</strong>.
              </p>
              <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg flex items-center gap-3">
                <RefreshCw className="text-blue-600" />
                <p className="text-sm text-blue-800">
                  <strong>Pro Tip:</strong> If the maintainer asks for changes, just make them locally, commit, and push again. The PR updates automatically!
                </p>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </WorkshopLayout>
  );
}
