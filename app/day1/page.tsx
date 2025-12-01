"use client";

import Link from "next/link";
import WorkshopLayout from "@/components/Layout/WorkshopLayout";
import { Terminal, GitBranch, Code, Zap, ArrowRight, Globe } from "lucide-react";

export default function Day1Page() {
  return (
    <WorkshopLayout
      currentPath="/day1"
      title="Day 1: Git Fundamentals"
      nextPath="/day1/version-control"
      nextTitle="Start Day 1"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Introduction to Version Control</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Master the fundamentals of tracking changes, collaborating with others, and securing your code history.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Link href="/day1/version-control" className="group card bg-white border-slate-200 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10 transition-all">
            <div className="flex items-start justify-between mb-6">
              <div className="p-4 bg-blue-50 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <GitBranch size={32} />
              </div>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-full">Module 1</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Why Version Control?</h3>
            <p className="text-slate-600 mb-6">
              Understand the chaos of file naming (v1, v2, final) and how Git solves it. Learn why every tech giant relies on it.
            </p>
            <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
              Start Learning <ArrowRight size={20} className="ml-2" />
            </div>
          </Link>

          <Link href="/day1/mnc-usage" className="group card bg-white border-slate-200 hover:border-teal-400 hover:shadow-lg hover:shadow-teal-500/10 transition-all">
            <div className="flex items-start justify-between mb-6">
              <div className="p-4 bg-teal-50 rounded-xl text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                <Globe size={32} />
              </div>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-full">Module 2</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">MNCs & Open Source</h3>
            <p className="text-slate-600 mb-6">
              Why do Meta, Google, and Apple use open source? Learn how the biggest companies build software.
            </p>
            <div className="flex items-center text-teal-600 font-semibold group-hover:translate-x-2 transition-transform">
              See Real World Usage <ArrowRight size={20} className="ml-2" />
            </div>
          </Link>

          <Link href="/day1/installation" className="group card bg-white border-slate-200 hover:border-indigo-400 hover:shadow-lg hover:shadow-indigo-500/10 transition-all">
            <div className="flex items-start justify-between mb-6">
              <div className="p-4 bg-indigo-50 rounded-xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <Terminal size={32} />
              </div>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-full">Module 3</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">Installation & Setup</h3>
            <p className="text-slate-600 mb-6">
              Get Git running on your machine. Configure your identity and get ready to code.
            </p>
            <div className="flex items-center text-indigo-600 font-semibold group-hover:translate-x-2 transition-transform">
              Install Git <ArrowRight size={20} className="ml-2" />
            </div>
          </Link>

          <Link href="/day1/first-commands" className="group card bg-white border-slate-200 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/10 transition-all">
            <div className="flex items-start justify-between mb-6">
              <div className="p-4 bg-purple-50 rounded-xl text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <Code size={32} />
              </div>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-full">Module 4</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">First Commands</h3>
            <p className="text-slate-600 mb-6">
              Your first steps. Learn init, add, commit, and status. The core workflow of Git.
            </p>
            <div className="flex items-center text-purple-600 font-semibold group-hover:translate-x-2 transition-transform">
              Start Coding <ArrowRight size={20} className="ml-2" />
            </div>
          </Link>

          <Link href="/day1/local-repository" className="group card bg-white border-slate-200 hover:border-orange-400 hover:shadow-lg hover:shadow-orange-500/10 transition-all">
            <div className="flex items-start justify-between mb-6">
              <div className="p-4 bg-orange-50 rounded-xl text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                <Zap size={32} />
              </div>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-full">Module 5</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">Local vs Remote</h3>
            <p className="text-slate-600 mb-6">
              Understand the difference between your computer and the cloud. The foundation of collaboration.
            </p>
            <div className="flex items-center text-orange-600 font-semibold group-hover:translate-x-2 transition-transform">
              Connect to Cloud <ArrowRight size={20} className="ml-2" />
            </div>
          </Link>

          <Link href="/day1/github-setup" className="group card bg-white border-slate-200 hover:border-slate-800 hover:shadow-lg hover:shadow-slate-900/10 transition-all">
            <div className="flex items-start justify-between mb-6">
              <div className="p-4 bg-slate-100 rounded-xl text-slate-800 group-hover:bg-slate-800 group-hover:text-white transition-colors">
                <Globe size={32} />
              </div>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-full">Module 6</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors">GitHub Setup</h3>
            <p className="text-slate-600 mb-6">
              Generate SSH keys, connect your account, and push your first code to the cloud.
            </p>
            <div className="flex items-center text-slate-800 font-semibold group-hover:translate-x-2 transition-transform">
              Setup SSH <ArrowRight size={20} className="ml-2" />
            </div>
          </Link>
        </div>
      </div>
    </WorkshopLayout>
  );
}
