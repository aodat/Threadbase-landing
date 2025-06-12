"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { WaitingListPopup } from "@/components/landing/waiting-list-popup"

export function LandingPage() {
  const [isWaitingListOpen, setIsWaitingListOpen] = useState(false)
  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-black flex items-center justify-center">
              <span className="text-white font-semibold">T</span>
            </div>
            <span className="font-semibold text-lg">Threadbase</span>
          </div>

          {/* Middle Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#features"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              How it Works
            </a>
          </nav>

          {/* Right CTA */}
          <div className="flex items-center gap-3">
            <Button variant="outline" onClick={() => setIsWaitingListOpen(true)}>
              Join Waiting List
            </Button>
            <Button
              className="bg-black text-white hover:bg-black/90"
              onClick={() => window.open("https://cal.com/threadbase", "_blank")}
            >
              Get a Demo
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-20 md:py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">MemoryOps for AI Agents</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Threadbase gives you full visibility into what your agent remembers, how memory evolves, and why it fails —
            so you can debug and fix faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-black text-white hover:bg-black/90"
              onClick={() => window.open("https://cal.com/threadbase", "_blank")}
            >
              Get a Demo
            </Button>
            <Button size="lg" variant="outline" onClick={() => setIsWaitingListOpen(true)}>
              Join Waiting List
            </Button>
          </div>
        </div>
        <div className="container mx-auto max-w-4xl flex justify-center mt-12">
          <div className="w-full h-64 bg-muted rounded-lg border border-border/40 flex items-center justify-center">
            <p className="text-muted-foreground">Threadbase Dashboard Preview</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="border rounded-lg p-6 bg-background">
              <div className="mb-4 h-12 w-12 rounded-md bg-black/10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-black"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Memory Timeline</h3>
              <p className="text-sm text-muted-foreground">Track memory operations over time</p>
              <p className="mt-2 text-muted-foreground">
                Inspect what was read, written, and when. Monitor all memory operations with a detailed timeline view.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="border rounded-lg p-6 bg-background">
              <div className="mb-4 h-12 w-12 rounded-md bg-black/10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-black"
                >
                  <path d="m18 16 4-4-4-4" />
                  <path d="m6 8-4 4 4 4" />
                  <path d="m14.5 4-5 16" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Versioning & Diffs</h3>
              <p className="text-sm text-muted-foreground">Track memory changes over time</p>
              <p className="mt-2 text-muted-foreground">
                See changes to memory across sessions. Compare different versions and understand how memory evolves.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="border rounded-lg p-6 bg-background">
              <div className="mb-4 h-12 w-12 rounded-md bg-black/10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-black"
                >
                  <path d="M6 3v12" />
                  <circle cx="18" cy="6" r="3" />
                  <circle cx="6" cy="18" r="3" />
                  <path d="M18 9a9 9 0 0 1-9 9" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Behavior Tracing</h3>
              <p className="text-sm text-muted-foreground">Understand memory influence</p>
              <p className="mt-2 text-muted-foreground">
                Understand why your AI acted the way it did. Trace the path from memory to agent behavior and responses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 h-16 w-16 rounded-full bg-black/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-black">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect your agent</h3>
              <p className="text-muted-foreground">
                Integrate Threadbase with your AI agent using our simple SDK. Just a few lines of code.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 h-16 w-16 rounded-full bg-black/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-black">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Watch memory updates in real time</h3>
              <p className="text-muted-foreground">
                See memory operations as they happen. Monitor reads, writes, and changes in real time.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 h-16 w-16 rounded-full bg-black/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-black">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Debug with full context and history</h3>
              <p className="text-muted-foreground">
                Understand why your agent behaves the way it does with complete memory context and history.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Button
              size="lg"
              className="bg-black text-white hover:bg-black/90"
              onClick={() => window.open("https://cal.com/threadbase", "_blank")}
            >
              Get a Demo Now
            </Button>
            <Button size="lg" variant="outline" onClick={() => setIsWaitingListOpen(true)}>
              Join Waiting List
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">© Threadbase, {currentYear}</div>
          <div className="flex gap-6">
            <a
              href="mailto:founders@threadbase.dev"
              className="text-sm text-muted-foreground hover:text-black transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>

      {/* Waiting List Popup */}
      <WaitingListPopup isOpen={isWaitingListOpen} onClose={() => setIsWaitingListOpen(false)} />
    </div>
  )
}
