"use client";

import React from "react";
import WorkshopLayout from "@/components/Layout/WorkshopLayout";
import Slide from "@/components/Teaching/Slide";
import { Globe, Heart, BookOpen, Users } from "lucide-react";

export default function IntroPage() {
  return (
    <WorkshopLayout
      currentPath="/day3/intro"
      title="What is Open Source?"
      nextPath="/day3/industry-usage"
      nextTitle="Industry Usage"
    >
      <div className="max-w-4xl mx-auto">
        {/* Definition */}
        <Slide title="The Open Source Philosophy">
          <p className="mb-8 text-lg">
            Open Source is software with source code that anyone can inspect, modify, and enhance. It's built on transparency and collaboration.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
              <h3 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                <Globe size={20} /> For the World
              </h3>
              <p className="text-blue-800 text-sm">
                Software like Linux, Python, and React powers the modern world. It's free for everyone to use and improve.
              </p>
            </div>
            <div className="p-6 bg-purple-50 rounded-xl border border-purple-100">
              <h3 className="font-bold text-purple-900 mb-4 flex items-center gap-2">
                <Users size={20} /> By the Community
              </h3>
              <p className="text-purple-800 text-sm">
                "Given enough eyeballs, all bugs are shallow." Thousands of developers working together create better software than any single company.
              </p>
            </div>
          </div>
        </Slide>

        {/* Examples */}
        <Slide title="Giants of Open Source">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-white border border-slate-200 rounded-xl text-center shadow-sm hover:shadow-md transition-all">
              <div className="text-4xl mb-2">🐧</div>
              <h4 className="font-bold text-slate-900">Linux</h4>
              <p className="text-xs text-slate-500">Runs the internet & Android</p>
            </div>
            <div className="p-4 bg-white border border-slate-200 rounded-xl text-center shadow-sm hover:shadow-md transition-all">
              <div className="text-4xl mb-2">⚛️</div>
              <h4 className="font-bold text-slate-900">React</h4>
              <p className="text-xs text-slate-500">Built by Meta, used by all</p>
            </div>
            <div className="p-4 bg-white border border-slate-200 rounded-xl text-center shadow-sm hover:shadow-md transition-all">
              <div className="text-4xl mb-2">📝</div>
              <h4 className="font-bold text-slate-900">VS Code</h4>
              <p className="text-xs text-slate-500">The editor we use</p>
            </div>
            <div className="p-4 bg-white border border-slate-200 rounded-xl text-center shadow-sm hover:shadow-md transition-all">
              <div className="text-4xl mb-2">🐍</div>
              <h4 className="font-bold text-slate-900">Python</h4>
              <p className="text-xs text-slate-500">AI & Data Science</p>
            </div>
          </div>
        </Slide>

        {/* React Story */}
        <Slide title="Success Story: React">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
              <p className="mb-4">
                In 2011, Facebook (now Meta) had a problem: their ads interface was too complex to manage. 
                Engineer <strong>Jordan Walke</strong> created a prototype called "FaxJS" to solve it.
              </p>
              <p className="mb-4">
                They open-sourced it as <strong>React</strong> in 2013. At first, the community hated it because it mixed HTML with JavaScript (JSX).
              </p>
              <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl">
                <h4 className="font-bold text-blue-900 mb-2">The Turning Point</h4>
                <p className="text-sm text-blue-800">
                  Instead of giving up, the team engaged with the community, improved the tools, and proved its value. 
                  Today, React is the <strong>#1 web framework</strong> in the world, powering millions of sites including Netflix, Airbnb, and Instagram.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 bg-slate-900 text-slate-300 p-6 rounded-xl font-mono text-xs shadow-xl">
              <div className="flex gap-2 mb-4 border-b border-slate-700 pb-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <p className="text-green-400">// 2013: "This looks weird"</p>
              <p>const element = &lt;h1&gt;Hello&lt;/h1&gt;;</p>
              <br/>
              <p className="text-green-400">// 2024: "Standard Standard"</p>
              <p>export default function App() &#123;</p>
              <p className="pl-4">return &lt;h1&gt;Hello World&lt;/h1&gt;;</p>
              <p>&#125;</p>
            </div>
          </div>
        </Slide>

        {/* Pioneers */}
        <Slide title="Pioneers of Open Source">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-white border border-slate-200 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">
                🐧
              </div>
              <h3 className="font-bold text-slate-900 text-center">Linus Torvalds</h3>
              <p className="text-xs text-center text-slate-500 mb-2">Creator of Linux & Git</p>
              <p className="text-sm text-slate-600 text-center">
                "Talk is cheap. Show me the code." Created the OS that runs the internet and the tool we use to manage code.
              </p>
            </div>

            <div className="p-4 bg-white border border-slate-200 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">
                gnu
              </div>
              <h3 className="font-bold text-slate-900 text-center">Richard Stallman</h3>
              <p className="text-xs text-center text-slate-500 mb-2">Founder of GNU & FSF</p>
              <p className="text-sm text-slate-600 text-center">
                Started the Free Software movement. Created the GPL license which ensures code remains free forever.
              </p>
            </div>

            <div className="p-4 bg-white border border-slate-200 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">
                🐍
              </div>
              <h3 className="font-bold text-slate-900 text-center">Guido van Rossum</h3>
              <p className="text-xs text-center text-slate-500 mb-2">Creator of Python</p>
              <p className="text-sm text-slate-600 text-center">
                "Benevolent Dictator For Life." Built a language for everyone, now powering the AI revolution.
              </p>
            </div>
          </div>
        </Slide>

        {/* Licenses */}
        <Slide title="Understanding Licenses">
          <p className="mb-6">
            Just because code is public doesn't mean you can do anything with it. Licenses define the rules.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl border border-green-100">
              <div className="p-2 bg-white rounded-lg text-green-600 shadow-sm">
                <Heart size={20} />
              </div>
              <div>
                <h3 className="font-bold text-green-900">MIT / Apache (Permissive)</h3>
                <p className="text-sm text-green-800">
                  Do whatever you want (use, modify, sell), just give credit to the original author.
                  <br/>
                  <em>Examples: React, Node.js, Bootstrap</em>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-xl border border-orange-100">
              <div className="p-2 bg-white rounded-lg text-orange-600 shadow-sm">
                <BookOpen size={20} />
              </div>
              <div>
                <h3 className="font-bold text-orange-900">GPL (Copyleft)</h3>
                <p className="text-sm text-orange-800">
                  If you use this code in your project, your project MUST also be open source under the same license.
                  <br/>
                  <em>Examples: Linux, WordPress, VLC</em>
                </p>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </WorkshopLayout>
  );
}
