"use client";

import Link from "next/link";
import WorkshopLayout from "@/components/Layout/WorkshopLayout";
import { Code, GitBranch, GitPullRequest, AlertCircle, ArrowRight, Globe } from "lucide-react";

export default function Day2Page() {
  return (
    <WorkshopLayout
      currentPath="/day2"
      title="Day 2: GitHub & Collaboration"
      nextPath="/day2/github-intro"
      nextTitle="Start Day 2"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Deep Dive into GitHub</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Move beyond local files. Learn how to collaborate with teams, manage projects, and contribute to open source.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">


          <Link href="/day2/github-intro" className="group card bg-white border-slate-200 hover:border-teal-400 hover:shadow-lg hover:shadow-teal-500/10 transition-all">
            <div className="flex items-start justify-between mb-6">
              <div className="p-4 bg-teal-50 rounded-xl text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                <Globe size={32} />
              </div>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-full">Module 1</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">GitHub Interface</h3>
            <p className="text-slate-600 mb-6">
              Tour the platform. Set up your professional profile, understand the UI, and configure SSH keys for secure access.
            </p>
            <div className="flex items-center text-teal-600 font-semibold group-hover:translate-x-2 transition-transform">
              Explore GitHub <ArrowRight size={20} className="ml-2" />
            </div>
          </Link>

          <Link href="/day2/branching" className="group card bg-white border-slate-200 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/10 transition-all">
            <div className="flex items-start justify-between mb-6">
              <div className="p-4 bg-purple-50 rounded-xl text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <GitBranch size={32} />
              </div>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-full">Module 2</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">Branching & Merging</h3>
            <p className="text-slate-600 mb-6">
              The superpower of Git. Work on new features in isolation without breaking the main code.
            </p>
            <div className="flex items-center text-purple-600 font-semibold group-hover:translate-x-2 transition-transform">
              Master Branching <ArrowRight size={20} className="ml-2" />
            </div>
          </Link>

          <Link href="/day2/pull-requests" className="group card bg-white border-slate-200 hover:border-orange-400 hover:shadow-lg hover:shadow-orange-500/10 transition-all">
            <div className="flex items-start justify-between mb-6">
              <div className="p-4 bg-orange-50 rounded-xl text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                <GitPullRequest size={32} />
              </div>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-full">Module 3</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">Pull Requests</h3>
            <p className="text-slate-600 mb-6">
              The heart of collaboration. Propose changes, review code, and discuss improvements before merging.
            </p>
            <div className="flex items-center text-orange-600 font-semibold group-hover:translate-x-2 transition-transform">
              Start Reviewing <ArrowRight size={20} className="ml-2" />
            </div>
          </Link>

          <Link href="/day2/merge-conflicts" className="group card bg-white border-slate-200 hover:border-red-400 hover:shadow-lg hover:shadow-red-500/10 transition-all">
            <div className="flex items-start justify-between mb-6">
              <div className="p-4 bg-red-50 rounded-xl text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <AlertCircle size={32} />
              </div>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-full">Module 4</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">Merge Conflicts</h3>
            <p className="text-slate-600 mb-6">
              Don't panic! Learn how to resolve conflicts when two people edit the same file.
            </p>
            <div className="flex items-center text-red-600 font-semibold group-hover:translate-x-2 transition-transform">
              Resolve Conflicts <ArrowRight size={20} className="ml-2" />
            </div>
          </Link>

          <Link href="/day2/github-issues" className="group card bg-white border-slate-200 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/10 transition-all">
            <div className="flex items-start justify-between mb-6">
              <div className="p-4 bg-green-50 rounded-xl text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                <AlertCircle size={32} />
              </div>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-full">Module 5</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-green-600 transition-colors">Issues & Projects</h3>
            <p className="text-slate-600 mb-6">
              Manage your work. Track bugs, features, and milestones like a pro.
            </p>
            <div className="flex items-center text-green-600 font-semibold group-hover:translate-x-2 transition-transform">
              Manage Work <ArrowRight size={20} className="ml-2" />
            </div>
          </Link>

          <Link href="/day2/developer-profile" className="group card bg-white border-slate-200 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-500/10 transition-all">
            <div className="flex items-start justify-between mb-6">
              <div className="p-4 bg-yellow-50 rounded-xl text-yellow-600 group-hover:bg-yellow-600 group-hover:text-white transition-colors">
                <Globe size={32} />
              </div>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-full">Module 6</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-yellow-600 transition-colors">Developer Profile</h3>
            <p className="text-slate-600 mb-6">
              Build your personal brand. Create a profile README that stands out to recruiters.
            </p>
            <div className="flex items-center text-yellow-600 font-semibold group-hover:translate-x-2 transition-transform">
              Build Profile <ArrowRight size={20} className="ml-2" />
            </div>
          </Link>
        </div>
      </div>
    </WorkshopLayout>
  );
}
