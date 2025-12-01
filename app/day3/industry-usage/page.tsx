"use client";

import WorkshopLayout from "@/components/Layout/WorkshopLayout";
import { Building2, Globe, Server, Shield } from "lucide-react";

export default function IndustryUsagePage() {
  return (
    <WorkshopLayout
      currentPath="/day3/industry-usage"
      title="Industry Usage"
      nextPath="/day3/finding-projects"
      nextTitle="Finding Projects"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Open Source in the Real World</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Open source isn't just about free software. It's a strategic asset for businesses. 
            From startups to Fortune 500s, everyone uses it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="card bg-white border-slate-200 p-6 hover:shadow-md transition-shadow">
            <div className="p-3 bg-blue-50 text-blue-600 w-fit rounded-lg mb-4">
              <Building2 size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Enterprise Adoption</h3>
            <p className="text-slate-600">
              90% of companies use open source software in some form. It speeds up development and reduces costs.
            </p>
          </div>

          <div className="card bg-white border-slate-200 p-6 hover:shadow-md transition-shadow">
            <div className="p-3 bg-green-50 text-green-600 w-fit rounded-lg mb-4">
              <Shield size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Security & Reliability</h3>
            <p className="text-slate-600">
              "Given enough eyeballs, all bugs are shallow." Open source code is audited by thousands of developers, making it often more secure than proprietary code.
            </p>
          </div>

          <div className="card bg-white border-slate-200 p-6 hover:shadow-md transition-shadow">
            <div className="p-3 bg-purple-50 text-purple-600 w-fit rounded-lg mb-4">
              <Server size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Infrastructure</h3>
            <p className="text-slate-600">
              The internet runs on Linux (Open Source). The cloud runs on Kubernetes (Open Source). AI runs on PyTorch/TensorFlow (Open Source).
            </p>
          </div>

          <div className="card bg-white border-slate-200 p-6 hover:shadow-md transition-shadow">
            <div className="p-3 bg-orange-50 text-orange-600 w-fit rounded-lg mb-4">
              <Globe size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Global Collaboration</h3>
            <p className="text-slate-600">
              Innovation happens faster when the whole world works together. No single company can hire all the smartest people, but open source can leverage them.
            </p>
          </div>
        </div>

        {/* Case Studies */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Real World Case Studies</h2>
          
          <div className="space-y-8">
            {/* Netflix */}
            <div className="flex flex-col md:flex-row gap-8 items-center bg-slate-900 text-white p-8 rounded-2xl shadow-xl">
              <div className="flex-1">
                <div className="text-red-600 font-bold text-2xl mb-2">NETFLIX</div>
                <h3 className="text-xl font-bold mb-4">Streaming the World with Open Source</h3>
                <p className="text-slate-300 mb-4">
                  Netflix doesn't just use open source; they build it. To handle millions of concurrent streams, they built and open-sourced tools like <strong>Hystrix</strong> (for fault tolerance) and <strong>Zuul</strong> (for routing).
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-red-900/30 text-red-400 rounded-full text-xs font-bold">Cloud Infrastructure</span>
                  <span className="px-3 py-1 bg-red-900/30 text-red-400 rounded-full text-xs font-bold">Microservices</span>
                </div>
              </div>
              <div className="w-full md:w-1/3 bg-slate-800 p-4 rounded-xl border border-slate-700">
                <div className="text-xs font-mono text-slate-400 mb-2">Netflix Open Source</div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">✅ <strong>Chaos Monkey:</strong> Randomly shuts down servers to test resilience.</li>
                  <li className="flex items-center gap-2">✅ <strong>Spinnaker:</strong> Continuous delivery platform.</li>
                </ul>
              </div>
            </div>

            {/* Airbnb */}
            <div className="flex flex-col md:flex-row gap-8 items-center bg-white border border-slate-200 p-8 rounded-2xl shadow-lg">
              <div className="flex-1">
                <div className="text-rose-500 font-bold text-2xl mb-2">airbnb</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Design & Data at Scale</h3>
                <p className="text-slate-600 mb-4">
                  Airbnb revolutionized how designers and developers work together. They created <strong>Lottie</strong>, which renders After Effects animations natively on mobile and web, used by thousands of apps today.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-rose-50 text-rose-600 rounded-full text-xs font-bold">Mobile Dev</span>
                  <span className="px-3 py-1 bg-rose-50 text-rose-600 rounded-full text-xs font-bold">Data Engineering</span>
                </div>
              </div>
              <div className="w-full md:w-1/3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="text-xs font-mono text-slate-500 mb-2">Airbnb Open Source</div>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-center gap-2">✨ <strong>Lottie:</strong> High-quality animations.</li>
                  <li className="flex items-center gap-2">✨ <strong>Airflow:</strong> Workflow orchestration for data pipelines.</li>
                </ul>
              </div>
            </div>
          </div>
      </div>
      </div>
    </WorkshopLayout>
  );
}
