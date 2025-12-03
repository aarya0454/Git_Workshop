import Link from "next/link";
import { Analytics } from "@vercel/analytics/next"
import { ArrowRight, Terminal, Code, Rocket, Trophy, MapPin, Calendar, Users, BookOpen } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-slate-50 border-b border-slate-200">
        <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Institution Badge */}
            <div className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-2 rounded-full mb-8 border border-blue-100 shadow-sm">
              <MapPin size={18} />
              <span className="font-bold tracking-wide uppercase text-sm">SCRIET, Meerut</span>
            </div>

            {/* Main Title */}
            <h1 className="text-7xl font-extrabold mb-8 text-slate-900 tracking-tight leading-tight">
              GitHub & Open Source
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 mt-2">
                Collaboration Workshop
              </span>
            </h1>

            <p className="text-2xl text-slate-600 mb-8 font-light max-w-3xl mx-auto leading-relaxed">
              Master the tools of modern software engineering. From your first commit to your first open source contribution.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-6 justify-center mb-16">
              <Link href="/day1" className="btn-primary inline-flex items-center gap-3 px-8 py-4 text-lg shadow-xl shadow-blue-500/20 hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1">
                Start Learning <ArrowRight size={24} />
              </Link>
              <Link href="/syllabus" className="btn-secondary inline-flex items-center gap-3 px-8 py-4 text-lg bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-blue-600 shadow-sm hover:shadow-md transition-all">
                <BookOpen size={24} /> View Syllabus
              </Link>
            </div>
            
            {/* Stats/Info */}
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto border-t border-slate-200 pt-8">
              <div>
                <div className="text-3xl font-bold text-slate-900">3 Days</div>
                <div className="text-slate-500 uppercase text-sm font-semibold tracking-wider">Intensive Training</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900">100%</div>
                <div className="text-slate-500 uppercase text-sm font-semibold tracking-wider">Hands-On</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900">B.Tech</div>
                <div className="text-slate-500 uppercase text-sm font-semibold tracking-wider">Level Curriculum</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Organizers Section - Prominent */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Meet Your Organizers</h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                helping and Learning thorugh the hands on workshop
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { name: "Lakshya Pandey", dept: "B.Tech IT", role: "Lead Organizer", color: "from-blue-500 to-blue-600" },
              { name: "Jayesh Gaur", dept: "B.Tech CS", role: "Co-Organizer", color: "from-teal-500 to-teal-600" },
              { name: "Utsav Dubey", dept: "B.Tech CS", role: "Co-Organizer", color: "from-indigo-500 to-indigo-600" },
            ].map((organizer, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 bg-slate-100 rounded-2xl transform rotate-3 transition-transform group-hover:rotate-6"></div>
                <div className="relative bg-white border border-slate-100 rounded-2xl p-8 shadow-lg transition-transform group-hover:-translate-y-2">
                  <div className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br ${organizer.color} flex items-center justify-center text-white text-3xl font-bold shadow-md`}>
                    {organizer.name.charAt(0)}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1 text-center">{organizer.name}</h3>
                  <p className="text-blue-600 font-semibold text-center text-sm mb-2">{organizer.dept}</p>
                  <div className="w-8 h-1 bg-slate-100 mx-auto mb-3"></div>
                  <p className="text-slate-500 text-center text-sm font-medium uppercase tracking-wide">{organizer.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Curriculum Preview */}
      <div className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
            Workshop Curriculum
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Day 1 */}
            <Link href="/day1" className="group bg-white rounded-xl shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 border border-slate-200 overflow-hidden">
              <div className="h-2 bg-blue-500 w-full"></div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-blue-50 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Terminal size={28} />
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Day 01</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Introduction to Git</h3>
                <p className="text-slate-500 mb-6 line-clamp-2">Version control fundamentals, installation, and your first repository.</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div> Importance of Version Control
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div> Installing Git
                  </li>
                </ul>
              </div>
            </Link>

            {/* Day 2 */}
            <Link href="/day2" className="group bg-white rounded-xl shadow-sm hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300 border border-slate-200 overflow-hidden">
              <div className="h-2 bg-teal-500 w-full"></div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-teal-50 rounded-lg text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                    <Code size={28} />
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Day 02</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">Git Basics</h3>
                <p className="text-slate-500 mb-6 line-clamp-2">Remote repositories, collaboration, branching, and pull requests.</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-400"></div> Branching & Forking
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-400"></div> Pull Requests
                  </li>
                </ul>
              </div>
            </Link>

            {/* Day 3 */}
            <Link href="/day3" className="group bg-white rounded-xl shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 border border-slate-200 overflow-hidden">
              <div className="h-2 bg-indigo-500 w-full"></div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-indigo-50 rounded-lg text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Rocket size={28} />
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Day 03</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">Open Source & Career</h3>
                <p className="text-slate-500 mb-6 line-clamp-2">Finding projects, contributing, building your brand, and next steps.</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div> Real-world usage
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div> Contributing & Branding
                  </li>
                </ul>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
