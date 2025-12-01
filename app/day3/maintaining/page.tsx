"use client";

import WorkshopLayout from "@/components/Layout/WorkshopLayout";
import { Heart, Shield, Users, MessageSquare } from "lucide-react";

export default function MaintainingReposPage() {
  return (
    <WorkshopLayout
      currentPath="/day3/maintaining"
      title="Maintaining Repositories"
      nextPath="/day3/branding"
      nextTitle="Building Your Brand"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Becoming a Maintainer</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Contributing is just the start. Maintaining a repository is leadership. It's about fostering a community, managing quality, and guiding a project's vision.
          </p>
        </div>

        {/* Triage 101 */}
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Level 1: Triage</h2>
          <p className="text-slate-600 mb-4">
            Triage is the art of sorting the mess. Your goal is to label issues so developers know what to work on.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="p-2 bg-red-50 text-red-600 rounded-lg h-fit"><Heart size={24}/></div>
              <div>
                <h3 className="font-bold text-slate-900">The "Good First Issue"</h3>
                <p className="text-sm text-slate-600">Label easy tasks for beginners. This grows your team.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg h-fit"><Shield size={24}/></div>
              <div>
                <h3 className="font-bold text-slate-900">The "Bug" vs "Feature"</h3>
                <p className="text-sm text-slate-600">Separate broken things from new ideas.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Automation */}
        <div className="bg-slate-900 text-white p-8 rounded-2xl mb-8">
          <h2 className="text-2xl font-bold mb-4">Level 2: Automation (CI/CD)</h2>
          <p className="text-slate-300 mb-6">
            Don't waste time checking formatting manually. Let robots do it.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs font-mono font-bold">GitHub Actions</span>
              <p className="text-slate-300 text-sm">
                A script that runs every time someone pushes code.
              </p>
            </div>
            <div className="bg-black/50 p-4 rounded-lg font-mono text-xs text-slate-400">
              <p>name: CI</p>
              <p>on: [push]</p>
              <p>jobs:</p>
              <p className="pl-4">build:</p>
              <p className="pl-8">runs-on: ubuntu-latest</p>
              <p className="pl-8">steps:</p>
              <p className="pl-12">- uses: actions/checkout@v2</p>
              <p className="pl-12">- run: npm test</p>
            </div>
            <p className="text-xs text-slate-500 italic text-center">
              If this script fails, the PR cannot be merged. Safe!
            </p>
          </div>
        </div>

        {/* Community Health */}
        <div className="bg-purple-50 p-8 rounded-2xl border border-purple-100">
          <h2 className="text-2xl font-bold text-purple-900 mb-4">Level 3: Community Health</h2>
          <p className="text-purple-800 mb-6">
            A toxic community kills a project faster than bad code.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h4 className="font-bold text-slate-900 mb-2">Code of Conduct</h4>
              <p className="text-xs text-slate-600">Enforce it. If someone is being rude, warn them. If they continue, ban them.</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h4 className="font-bold text-slate-900 mb-2">Say "No" Nicely</h4>
              <p className="text-xs text-slate-600">You can't accept every feature. Explain why it doesn't fit the roadmap.</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h4 className="font-bold text-slate-900 mb-2">Burnout is Real</h4>
              <p className="text-xs text-slate-600">You don't owe the world your free time. Take breaks.</p>
            </div>
          </div>
        </div>
      </div>
    </WorkshopLayout>
  );
}
