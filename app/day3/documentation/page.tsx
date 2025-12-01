"use client";

import WorkshopLayout from "@/components/Layout/WorkshopLayout";
import { BookOpen, FileText, List, Code } from "lucide-react";
import Slide from "@/components/Teaching/Slide";

export default function DocumentationPage() {
  return (
    <WorkshopLayout
      currentPath="/day3/documentation"
      title="Writing Documentation"
      nextPath="/day3/maintaining"
      nextTitle="Maintaining Repositories"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Documentation is King</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Code tells the machine what to do. Documentation tells the human why it does it and how to use it. 
            Good documentation is the difference between a dead project and a thriving one.
          </p>
        </div>

        <div className="grid gap-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Essential Files</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                <BookOpen className="text-blue-600 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-slate-900">README.md</h3>
                  <p className="text-slate-600 text-sm">The landing page of your project. Must answer: What is this? How do I install it? How do I use it?</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                <FileText className="text-teal-600 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-slate-900">CONTRIBUTING.md</h3>
                  <p className="text-slate-600 text-sm">The guide for contributors. Setup instructions, coding standards, and PR process.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                <List className="text-purple-600 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-slate-900">CHANGELOG.md</h3>
                  <p className="text-slate-600 text-sm">A history of changes. What's new in each version?</p>
                </div>
              </div>
            </div>
          </div>

        {/* Readme Driven Development */}
        <Slide title="Readme Driven Development">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
              <p className="mb-4">
                Most developers write code first, then docs. <strong>Try doing it backwards.</strong>
              </p>
              <div className="p-4 bg-purple-50 border border-purple-100 rounded-xl">
                <h3 className="font-bold text-purple-900 mb-2">The Process</h3>
                <ol className="list-decimal list-inside space-y-2 text-sm text-purple-800">
                  <li>Write the <code>README.md</code> first.</li>
                  <li>Describe how the feature <em>should</em> work.</li>
                  <li>Write the code to make the README true.</li>
                </ol>
              </div>
              <p className="mt-4 text-sm text-slate-600">
                This forces you to design a good API before you get lost in the implementation details.
              </p>
            </div>
            <div className="w-full md:w-1/3">
              <div className="bg-slate-900 text-slate-300 p-4 rounded-xl font-mono text-xs shadow-lg">
                <p className="text-green-400"># My Awesome Feature</p>
                <br/>
                <p>## Usage</p>
                <p>```js</p>
                <p>const user = await getUser(1);</p>
                <p>console.log(user.name);</p>
                <p>```</p>
                <br/>
                <p className="text-slate-500">// Now I just need to make this code work...</p>
              </div>
            </div>
          </div>
        </Slide>

        {/* Tools */}
        <Slide title="Tools of the Trade">
          <p className="mb-6">
            As your project grows, a single README won't be enough. Use these tools to build full documentation sites.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white border border-slate-200 rounded-xl hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2">🦖</div>
              <h3 className="font-bold text-slate-900">Docusaurus</h3>
              <p className="text-xs text-slate-500 mb-2">By Meta</p>
              <p className="text-sm text-slate-600">Built with React. Used by Redux, Create React App, and millions of others.</p>
            </div>

            <div className="p-4 bg-white border border-slate-200 rounded-xl hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2">📘</div>
              <h3 className="font-bold text-slate-900">MkDocs</h3>
              <p className="text-xs text-slate-500 mb-2">Python-based</p>
              <p className="text-sm text-slate-600">Simple, fast, and uses standard Markdown. Great for non-JS projects.</p>
            </div>

            <div className="p-4 bg-white border border-slate-200 rounded-xl hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2">⚡</div>
              <h3 className="font-bold text-slate-900">VitePress</h3>
              <p className="text-xs text-slate-500 mb-2">By Vue.js</p>
              <p className="text-sm text-slate-600">Extremely fast static site generator. The modern choice for Vue projects.</p>
            </div>
          </div>
        </Slide>
        </div>
      </div>
    </WorkshopLayout>
  );
}
