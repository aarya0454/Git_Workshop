"use client";

import React from "react";
import WorkshopLayout from "@/components/Layout/WorkshopLayout";
import Slide from "@/components/Teaching/Slide";
import { Heart, MessageCircle, AlertTriangle, ThumbsUp } from "lucide-react";

export default function EtiquettePage() {
  return (
    <WorkshopLayout
      currentPath="/day3/etiquette"
      title="Community Etiquette"
      nextPath="/day3/next-steps"
      nextTitle="Next Steps"
    >
      <div className="max-w-4xl mx-auto">
        {/* Intro */}
        <Slide title="Open Source is About People">
          <p className="mb-6 text-lg">
            Behind every line of code is a human being. Most maintainers are volunteers working in their free time. Kindness is your most important tool.
          </p>
          <div className="bg-pink-50 border border-pink-100 rounded-xl p-6 flex items-center gap-4">
            <Heart className="text-pink-500" size={32} />
            <p className="text-pink-800 font-medium">
              "Treat others as you would like to be treated."
            </p>
          </div>
        </Slide>

        {/* Communication Templates */}
        <Slide title="Communication Templates">
          <p className="mb-4">
            Not sure what to say? Use these templates to sound professional.
          </p>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-2 text-sm uppercase tracking-wide">Asking to work on an issue</h4>
              <div className="font-mono text-sm text-slate-600 bg-slate-50 p-3 rounded border border-slate-100">
                "Hi! I'd like to work on this issue. I plan to fix it by [briefly explain your plan]. Is that the right direction?"
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-2 text-sm uppercase tracking-wide">Asking for help</h4>
              <div className="font-mono text-sm text-slate-600 bg-slate-50 p-3 rounded border border-slate-100">
                "I'm stuck on [specific problem]. I've tried [solution A] and [solution B], but I'm still seeing [error message]. Could you point me in the right direction?"
              </div>
            </div>
          </div>
        </Slide>

        {/* Handling Rejection */}
        <Slide title="Handling Rejection">
          <div className="flex items-center gap-6">
            <div className="flex-1">
              <p className="mb-4">
                Sometimes your PR will be closed or rejected. <strong>This is normal.</strong>
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg text-sm text-red-800">
                  <AlertTriangle size={16} className="mt-1 shrink-0" />
                  <p><strong>"Out of Scope":</strong> The feature doesn't fit the project's goals. It's not about your code quality.</p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg text-sm text-orange-800">
                  <AlertTriangle size={16} className="mt-1 shrink-0" />
                  <p><strong>"Duplicate":</strong> Someone else fixed it first. Bad luck, but you still learned!</p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg text-sm text-blue-800">
                  <ThumbsUp size={16} className="mt-1 shrink-0" />
                  <p><strong>The Response:</strong> "Thanks for the feedback! I understand. Is there another issue I could help with?"</p>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        {/* Code of Conduct */}
        <Slide title="Code of Conduct (CoC)">
          <p className="mb-4">
            Most projects have a <code>CODE_OF_CONDUCT.md</code> file. It defines acceptable behavior.
          </p>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-2">Zero Tolerance</h3>
            <p className="text-slate-600 text-sm mb-4">
              Harassment, discrimination, and trolling are never okay. Maintainers have the right to ban toxic users.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-slate-200 text-slate-600 rounded-full text-xs font-bold">Be Inclusive</span>
              <span className="px-3 py-1 bg-slate-200 text-slate-600 rounded-full text-xs font-bold">Be Respectful</span>
              <span className="px-3 py-1 bg-slate-200 text-slate-600 rounded-full text-xs font-bold">Be Professional</span>
            </div>
          </div>
        </Slide>
      </div>
    </WorkshopLayout>
  );
}
