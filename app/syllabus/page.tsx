"use client";

import Link from "next/link";
import WorkshopLayout from "@/components/Layout/WorkshopLayout";
import { Terminal, GitBranch, Code, Zap, Globe, Search, GitPullRequest, PenTool, Users, BookOpen, Star, Rocket, ArrowRight, CheckCircle2 } from "lucide-react";

export default function SyllabusPage() {
  const curriculum = [
    {
      day: 1,
      title: "Introduction to Git & Version Control",
      description: "Master the fundamentals of tracking changes, collaborating with others, and securing your code history.",
      color: "blue",
      icon: Terminal,
      modules: [
        { title: "Importance of Version Control", icon: GitBranch },
        { title: "Use of open source by MNC’s", icon: Globe },
        { title: "Installing Git", icon: Terminal },
        { title: "First Git Commands", icon: Code },
        { title: "Local vs remote repositories", icon: Zap },
        { title: "SSH Setup & First Push", icon: Globe },

      ]
    },
    {
      day: 2,
      title: "Git Basics",
      description: "Move beyond local files. Learn how to collaborate with teams, manage projects, and contribute to open source.",
      color: "teal",
      icon: Code,
      modules: [

        { title: "GitHub interface", icon: Globe },
        { title: "Branching, forking, pull requests", icon: GitBranch },
        { title: "Merge conflicts", icon: Zap },
        { title: "Issues, Projects, Milestones", icon: Users },
        { title: "Creating a developer profile", icon: Star },
      ]
    },
    {
      day: 3,
      title: "Open Source & Career Growth",
      description: "Join the global community. Learn to find projects, contribute code, build your brand, and master documentation.",
      color: "indigo",
      icon: Rocket,
      modules: [
        { title: "What is Open Source?", icon: Globe },
        { title: "Real-world industry usage", icon: Users },
        { title: "Finding beginner-friendly repositories", icon: Search },
        { title: "Contributing to real projects", icon: GitPullRequest },
        { title: "Maintaining repositories", icon: BookOpen },
        { title: "Developer Brand", icon: Star },
        { title: "Markdown Guide", icon: PenTool },
        { title: "Community Etiquette", icon: Users },
        { title: "Next Steps", icon: Rocket },
      ]
    }
  ];

  return (
    <WorkshopLayout
      currentPath="/syllabus"
      title="Workshop Syllabus"
      nextPath="/day1"
      nextTitle="Start Learning"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-6">Complete Curriculum</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A comprehensive 3-day journey from absolute beginner to open source contributor. 
            Every module is designed to be practical, hands-on, and immediately useful.
          </p>
        </div>

        <div className="space-y-12">
          {curriculum.map((day, idx) => (
            <div key={idx} className="relative pl-8 md:pl-0">
              {/* Timeline Connector (Desktop) */}
              <div className="hidden md:block absolute left-8 top-24 bottom-0 w-0.5 bg-slate-200 -z-10 last:hidden"></div>

              <div className="md:flex gap-8 items-start">
                {/* Day Indicator */}
                <div className={`hidden md:flex flex-col items-center shrink-0 w-16`}>
                  <div className={`w-16 h-16 rounded-2xl bg-${day.color}-50 text-${day.color}-600 flex items-center justify-center shadow-sm border border-${day.color}-100 mb-4`}>
                    <day.icon size={32} />
                  </div>
                  <div className="h-full w-0.5 bg-slate-200"></div>
                </div>

                {/* Content Card */}
                <div className="flex-1">
                  <div className={`bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300`}>
                    <div className={`h-2 w-full bg-${day.color}-500`}></div>
                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-4 md:hidden">
                        <div className={`p-3 rounded-lg bg-${day.color}-50 text-${day.color}-600`}>
                          <day.icon size={24} />
                        </div>
                        <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Day 0{day.day}</span>
                      </div>
                      
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <span className="hidden md:block text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Day 0{day.day}</span>
                          <h2 className="text-3xl font-bold text-slate-900">{day.title}</h2>
                        </div>
                        <Link href={`/day${day.day}`} className={`hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-${day.color}-50 text-${day.color}-700 font-semibold text-sm hover:bg-${day.color}-100 transition-colors`}>
                          View Modules <ArrowRight size={16} />
                        </Link>
                      </div>
                      
                      <p className="text-slate-600 text-lg mb-8">{day.description}</p>

                      <div className="grid sm:grid-cols-2 gap-4">
                        {day.modules.map((module, mIdx) => (
                          <div key={mIdx} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                            <div className={`text-${day.color}-500`}>
                              <module.icon size={20} />
                            </div>
                            <span className="font-medium text-slate-700">{module.title}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 sm:hidden">
                        <Link href={`/day${day.day}`} className={`flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-${day.color}-50 text-${day.color}-700 font-semibold text-sm hover:bg-${day.color}-100 transition-colors`}>
                          View Modules <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link href="/day1" className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg shadow-xl shadow-blue-500/20 hover:bg-blue-700 hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1">
            Start Your Journey <ArrowRight size={24} />
          </Link>
        </div>
      </div>
    </WorkshopLayout>
  );
}

// Helper component for the Trophy icon since it wasn't imported in the original list but used in Day 4
function Trophy(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  )
}
