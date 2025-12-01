"use client";

import React from "react";
import WorkshopLayout from "@/components/Layout/WorkshopLayout";
import Slide from "@/components/Teaching/Slide";
import { Search, Tag, ExternalLink, CheckCircle } from "lucide-react";

export default function FindingProjectsPage() {
  return (
    <WorkshopLayout
      currentPath="/day3/finding-projects"
      title="Finding Projects"
      nextPath="/day3/contribution-flow"
      nextTitle="Contribution Flow"
    >
      <div className="max-w-4xl mx-auto">
        {/* The Problem */}
        <Slide title="Where Do I Start?">
          <p className="mb-6">
            The hardest part of open source is finding that first issue to work on. You don't need to build a new operating system; you just need to fix a small bug.
          </p>
          <div className="bg-purple-50 border border-purple-100 rounded-xl p-6 flex items-center gap-4 shadow-sm">
            <Tag className="text-purple-600" size={32} />
            <div>
              <h3 className="font-bold text-purple-900 text-lg">The Magic Label: "good first issue"</h3>
              <p className="text-purple-800 text-sm">
                Maintainers use this label specifically for beginners. These tasks are usually well-defined, isolated, and not too complex.
              </p>
            </div>
          </div>
        </Slide>

        {/* Where to Look */}
        <Slide title="Strategy 1: The Aggregators">
          <p className="mb-4">
            Don't just search GitHub randomly. Use tools built to find beginner-friendly issues.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="https://goodfirstissue.dev" target="_blank" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-blue-400 transition-all group block">
              <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                <ExternalLink size={16} className="text-blue-500" /> GoodFirstIssue.dev
              </h3>
              <p className="text-sm text-slate-600">
                Curates issues from popular repos. Filters by language (JavaScript, Python, Go).
              </p>
            </a>

            <a href="https://www.codetriage.com" target="_blank" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-green-400 transition-all group block">
              <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                <ExternalLink size={16} className="text-green-500" /> CodeTriage
              </h3>
              <p className="text-sm text-slate-600">
                Pick your favorite repos and get one open issue sent to your inbox every day.
              </p>
            </a>

            <a href="https://up-for-grabs.net" target="_blank" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-orange-400 transition-all group block">
              <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                <ExternalLink size={16} className="text-orange-500" /> Up For Grabs
              </h3>
              <p className="text-sm text-slate-600">
                Specifically lists projects that have tasks specifically for new contributors.
              </p>
            </a>

            <a href="https://github.com/explore" target="_blank" className="p-4 bg-white border border-slate-200 rounded-xl hover:border-purple-400 transition-all group block">
              <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Search size={16} className="text-purple-500" /> GitHub Explore
              </h3>
              <p className="text-sm text-slate-600">
                The "For You" page of code. Great for finding trending projects in your stack.
              </p>
            </a>
          </div>
        </Slide>

        <Slide title="Strategy 2: Scratch Your Own Itch">
          <div className="flex items-start gap-6">
            <div className="flex-1">
              <p className="mb-4 text-lg font-medium text-slate-800">
                The best project to contribute to is one you already use.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold mt-1">1</div>
                  <p className="text-slate-600"><strong>Notice a bug?</strong> Don't just complain. Fix it.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold mt-1">2</div>
                  <p className="text-slate-600"><strong>Docs confusing?</strong> Rewrite them to be clearer.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold mt-1">3</div>
                  <p className="text-slate-600"><strong>Missing a feature?</strong> Build it (but ask first!).</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-800">
                <strong>Pro Tip:</strong> You already know the context because you are a user. This skips 50% of the learning curve.
              </div>
            </div>
            <div className="hidden md:block w-1/3">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-lg rotate-3">
                <div className="flex items-center gap-2 mb-2 text-slate-400 text-xs uppercase font-bold">
                  <Tag size={12} /> npm install
                </div>
                <div className="font-mono text-sm text-slate-600">
                  Error: Cannot find module 'react'<br/>
                  at Function.Module._resolveFilename...
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100 text-center text-blue-600 font-bold text-sm">
                  Fixing this &gt; Random Issue
                </div>
              </div>
            </div>
          </div>
        </Slide>

        {/* Etiquette */}
        <Slide title="Before You Code">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-600">1</div>
              <div>
                <h4 className="font-bold text-slate-900">Read CONTRIBUTING.md</h4>
                <p className="text-sm text-slate-600">Every project has rules. Read them first or your PR might be ignored.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-600">2</div>
              <div>
                <h4 className="font-bold text-slate-900">Check Existing PRs</h4>
                <p className="text-sm text-slate-600">Is someone else already working on it? Don't duplicate work.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-600">3</div>
              <div>
                <h4 className="font-bold text-slate-900">Ask for Assignment</h4>
                <p className="text-sm text-slate-600">Comment on the issue: "Hi, I'd like to work on this!" and wait for approval.</p>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </WorkshopLayout>
  );
}
