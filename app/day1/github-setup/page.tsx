"use client";

import React, { useState } from "react";
import WorkshopLayout from "@/components/Layout/WorkshopLayout";
import Slide from "@/components/Teaching/Slide";
import { Terminal, Key, Globe, Shield, Copy, Check, ArrowRight } from "lucide-react";

export default function GitHubSetupPage() {
  const [activeTab, setActiveTab] = useState<"windows" | "mac" | "linux">("windows");

  return (
    <WorkshopLayout
      currentPath="/day1/github-setup"
      title="GitHub Setup & SSH"
      nextPath="/day2"
      nextTitle="Day 2: GitHub & Collaboration"
    >
      <div className="max-w-4xl mx-auto">
        {/* Intro */}
        <Slide title="Connecting to GitHub">
          <p className="mb-6">
            To push code from your computer to GitHub securely, we use <strong>SSH Keys</strong>. 
            Think of this as a special digital handshake that proves who you are without typing your password every time.
          </p>
          <div className="flex items-center gap-4 p-4 bg-blue-50 border border-blue-100 rounded-xl">
            <div className="p-3 bg-white rounded-full shadow-sm">
              <Key className="text-blue-600" size={24} />
            </div>
            <div>
              <h3 className="font-bold text-blue-900">Why SSH?</h3>
              <p className="text-sm text-blue-700">Secure, encrypted, and convenient. Once set up, you just `git push` and it works.</p>
            </div>
          </div>
        </Slide>

        {/* Step 1: Generate Key */}
        <Slide title="Step 1: Generate SSH Key">
          <div className="mb-6">
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setActiveTab("windows")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === "windows" 
                    ? "bg-blue-600 text-white" 
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                Windows
              </button>
              <button
                onClick={() => setActiveTab("mac")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === "mac" 
                    ? "bg-blue-600 text-white" 
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                macOS
              </button>
              <button
                onClick={() => setActiveTab("linux")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === "linux" 
                    ? "bg-blue-600 text-white" 
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                Linux
              </button>
            </div>

            <div className="bg-slate-900 text-slate-50 p-6 rounded-xl font-mono text-sm shadow-lg">
              <div className="flex items-center gap-2 mb-4 text-slate-400 border-b border-slate-700 pb-2">
                <Terminal size={16} />
                <span>Terminal ({activeTab === "windows" ? "Git Bash" : "Terminal"})</span>
              </div>
              
              {activeTab === "windows" && (
                <div className="space-y-4">
                  <div>
                    <p className="text-slate-400 mb-1"># 1. Open Git Bash and run:</p>
                    <p className="text-green-400">ssh-keygen -t ed25519 -C "your.email@example.com"</p>
                  </div>
                  <div>
                    <p className="text-slate-400 mb-1"># 2. Press Enter 3 times (accept default file location and empty passphrase)</p>
                  </div>
                  <div>
                    <p className="text-slate-400 mb-1"># 3. Start the ssh-agent in the background</p>
                    <p className="text-green-400">eval "$(ssh-agent -s)"</p>
                  </div>
                  <div>
                    <p className="text-slate-400 mb-1"># 4. Add your SSH private key to the ssh-agent</p>
                    <p className="text-green-400">ssh-add ~/.ssh/id_ed25519</p>
                  </div>
                  <div>
                    <p className="text-slate-400 mb-1"># 5. Copy the public key to clipboard</p>
                    <p className="text-green-400">clip &lt; ~/.ssh/id_ed25519.pub</p>
                  </div>
                </div>
              )}

              {activeTab === "mac" && (
                <div className="space-y-4">
                  <div>
                    <p className="text-slate-400 mb-1"># 1. Open Terminal and run:</p>
                    <p className="text-green-400">ssh-keygen -t ed25519 -C "your.email@example.com"</p>
                  </div>
                  <div>
                    <p className="text-slate-400 mb-1"># 2. Press Enter 3 times (accept defaults)</p>
                  </div>
                  <div>
                    <p className="text-slate-400 mb-1"># 3. Start the ssh-agent</p>
                    <p className="text-green-400">eval "$(ssh-agent -s)"</p>
                  </div>
                  <div>
                    <p className="text-slate-400 mb-1"># 4. Add key to Apple Keychain</p>
                    <p className="text-green-400">ssh-add --apple-use-keychain ~/.ssh/id_ed25519</p>
                  </div>
                  <div>
                    <p className="text-slate-400 mb-1"># 5. Copy to clipboard</p>
                    <p className="text-green-400">pbcopy &lt; ~/.ssh/id_ed25519.pub</p>
                  </div>
                </div>
              )}

              {activeTab === "linux" && (
                <div className="space-y-4">
                  <div>
                    <p className="text-slate-400 mb-1"># 1. Open Terminal and run:</p>
                    <p className="text-green-400">ssh-keygen -t ed25519 -C "your.email@example.com"</p>
                  </div>
                  <div>
                    <p className="text-slate-400 mb-1"># 2. Press Enter 3 times (accept defaults)</p>
                  </div>
                  <div>
                    <p className="text-slate-400 mb-1"># 3. Start the ssh-agent</p>
                    <p className="text-green-400">eval "$(ssh-agent -s)"</p>
                  </div>
                  <div>
                    <p className="text-slate-400 mb-1"># 4. Add key</p>
                    <p className="text-green-400">ssh-add ~/.ssh/id_ed25519</p>
                  </div>
                  <div>
                    <p className="text-slate-400 mb-1"># 5. Display key (then manually copy it)</p>
                    <p className="text-green-400">cat ~/.ssh/id_ed25519.pub</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Slide>

        {/* Step 2: Add to GitHub */}
        <Slide title="Step 2: Add Key to GitHub">
          <div className="space-y-4">
            <p>Now that you have copied your public key, let's give it to GitHub.</p>
            <ol className="list-decimal list-inside space-y-4 text-slate-700 bg-white p-6 rounded-xl border border-slate-200">
              <li>Go to <a href="https://github.com/settings/keys" target="_blank" className="text-blue-600 hover:underline font-medium">GitHub Settings &gt; SSH and GPG keys</a>.</li>
              <li>Click the green <strong>New SSH key</strong> button.</li>
              <li>
                <strong>Title:</strong> Give it a name like "My Laptop".
              </li>
              <li>
                <strong>Key:</strong> Paste the key you copied in the previous step.
                <div className="mt-2 text-xs text-slate-500 bg-slate-100 p-2 rounded">
                  It should start with <code>ssh-ed25519...</code>
                </div>
              </li>
              <li>Click <strong>Add SSH key</strong>.</li>
            </ol>
          </div>
        </Slide>

        {/* Step 3: Create Repo & Push */}
        <Slide title="Step 3: Create Repo & Push">
          <div className="space-y-6">
            <p>Time to put your code on the internet!</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-bold text-slate-900">1. Create Empty Repo</h3>
                <ul className="list-disc list-inside text-sm text-slate-600 space-y-2">
                  <li>Click the <strong>+</strong> icon in top-right of GitHub.</li>
                  <li>Select <strong>New repository</strong>.</li>
                  <li>Name it <code>my-first-repo</code>.</li>
                  <li>Leave it <strong>Public</strong>.</li>
                  <li><strong>DO NOT</strong> check "Initialize with README".</li>
                  <li>Click <strong>Create repository</strong>.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-slate-900">2. Push Local Code</h3>
                <p className="text-sm text-slate-600 mb-2">Run these commands in your project folder:</p>
                <div className="bg-slate-900 text-slate-50 p-4 rounded-lg font-mono text-xs">
                  <p className="text-slate-400"># Link local repo to GitHub</p>
                  <p className="text-green-400 mb-2">git remote add origin git@github.com:YOUR_USERNAME/my-first-repo.git</p>
                  
                  <p className="text-slate-400"># Rename branch to main (if needed)</p>
                  <p className="text-green-400 mb-2">git branch -M main</p>
                  
                  <p className="text-slate-400"># Push code!</p>
                  <p className="text-green-400">git push -u origin main</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
              <Check className="text-green-600 mt-1" />
              <div>
                <h4 className="font-bold text-green-800">Success!</h4>
                <p className="text-sm text-green-700">
                  Refresh your GitHub page. You should see your files there. You have successfully connected your computer to the cloud!
                </p>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </WorkshopLayout>
  );
}
