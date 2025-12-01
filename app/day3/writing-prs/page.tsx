"use client";

import React from "react";
import WorkshopLayout from "@/components/Layout/WorkshopLayout";
import Slide from "@/components/Teaching/Slide";
import { PenTool, CheckCircle, XCircle, MessageSquare } from "lucide-react";

export default function WritingPRsPage() {
  return (
    <WorkshopLayout
      currentPath="/day3/writing-prs"
      title="Writing Great PRs"
      nextPath="/day4"
      nextTitle="Day 4: Career & Growth"
    >
      <div className="max-w-4xl mx-auto">
        {/* The Perfect PR Template */}
        <Slide title="The Perfect PR Template">
          <p className="mb-6">
            A blank PR description is a red flag. Use this template to make your reviewer's life easy.
          </p>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 font-mono text-sm overflow-x-auto">
            <div className="text-slate-500 mb-2">## Summary</div>
            <div className="text-slate-800 mb-4">
              [Briefly explain WHAT you changed and WHY. Example: "Fixed the login button not working on mobile devices by adding a touch event listener."]
            </div>

            <div className="text-slate-500 mb-2">## Changes</div>
            <div className="text-slate-800 mb-4">
              - [x] Added `onTouchStart` handler to `LoginButton.tsx`<br/>
              - [x] Updated unit tests to cover touch events<br/>
              - [x] Fixed typo in `auth.ts`
            </div>

            <div className="text-slate-500 mb-2">## Related Issue</div>
            <div className="text-slate-800 mb-4">
              Closes #42
            </div>

            <div className="text-slate-500 mb-2">## Screenshots (Optional)</div>
            <div className="text-slate-800">
              [Insert image here]
            </div>
          </div>
        </Slide>

        {/* Self-Review Checklist */}
        <Slide title="The Self-Review Checklist">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-slate-200 rounded-xl">
              <h3 className="font-bold text-slate-900 mb-4">Before you click "Create":</h3>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <input type="checkbox" checked readOnly className="accent-green-500" /> 
                  Did I delete console.log statements?
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" checked readOnly className="accent-green-500" /> 
                  Did I run the tests locally?
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" checked readOnly className="accent-green-500" /> 
                  Did I update the documentation?
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" checked readOnly className="accent-green-500" /> 
                  Is my branch up to date with main?
                </li>
              </ul>
            </div>
            <div className="p-6 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center text-center">
              <div>
                <div className="text-4xl mb-4">👀</div>
                <h3 className="font-bold text-blue-900 mb-2">Review Your Own Diff</h3>
                <p className="text-sm text-blue-800">
                  Look at the "Files Changed" tab on GitHub. If you see something you didn't mean to change (like whitespace), fix it before asking for a review.
                </p>
              </div>
            </div>
          </div>
        </Slide>

        {/* Good vs Bad */}
        <Slide title="Good vs Bad PRs">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-green-50 border border-green-100 rounded-xl">
              <h3 className="font-bold text-green-900 mb-4 flex items-center gap-2">
                <CheckCircle size={20} /> The Good PR
              </h3>
              <ul className="space-y-3 text-sm text-green-800">
                <li>✅ <strong>Small:</strong> Changes one thing well.</li>
                <li>✅ <strong>Focused:</strong> Doesn't include random formatting changes.</li>
                <li>✅ <strong>Tested:</strong> Includes tests for the new code.</li>
                <li>✅ <strong>Descriptive:</strong> Explains the "Why", not just the "What".</li>
              </ul>
            </div>

            <div className="p-6 bg-red-50 border border-red-100 rounded-xl">
              <h3 className="font-bold text-red-900 mb-4 flex items-center gap-2">
                <XCircle size={20} /> The Bad PR
              </h3>
              <ul className="space-y-3 text-sm text-red-800">
                <li>❌ <strong>Huge:</strong> Changes 50 files at once.</li>
                <li>❌ <strong>Vague:</strong> Title is "Fix stuff".</li>
                <li>❌ <strong>Breaking:</strong> Changes API without warning.</li>
                <li>❌ <strong>Silent:</strong> No description or context provided.</li>
              </ul>
            </div>
          </div>
        </Slide>

        {/* Handling Feedback */}
        <Slide title="Handling Feedback">
          <p className="mb-6">
            Code review is a conversation. Don't take it personally.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
              <div className="text-blue-500 mb-2"><MessageSquare /></div>
              <h4 className="font-bold text-slate-900">Be Polite</h4>
              <p className="text-sm text-slate-600">"Thanks for the review!" goes a long way.</p>
            </div>
            <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
              <div className="text-purple-500 mb-2"><PenTool /></div>
              <h4 className="font-bold text-slate-900">Ask Questions</h4>
              <p className="text-sm text-slate-600">If you don't understand a comment, ask for clarification.</p>
            </div>
            <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
              <div className="text-green-500 mb-2"><CheckCircle /></div>
              <h4 className="font-bold text-slate-900">Iterate</h4>
              <p className="text-sm text-slate-600">Push fixes quickly to show you are engaged.</p>
            </div>
          </div>
        </Slide>
      </div>
    </WorkshopLayout>
  );
}
