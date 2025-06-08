"use client"

import { useState } from "react"
import Link from "next/link"
import { Clock, GitCompare, GitBranch } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
            <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-semibold">T</span>
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
            <Button variant="default" asChild>
              <a href="https://cal.com/threadbase" target="_blank" rel="noopener noreferrer">
                Get a Demo
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-20 md:py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Track, debug, and version what your AI Agent remembers
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Threadbase gives developers deep visibility on what AI Agent remembers, how it changes, and why it behaves
            the way it does.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="https://cal.com/threadbase" target="_blank" rel="noopener noreferrer">
                Get a Demo
              </a>
            </Button>
            <Button size="lg" variant="outline" onClick={() => setIsWaitingListOpen(true)}>
              Join Waiting List
            </Button>
          </div>
        </div>
        <div className="container mx-auto max-w-4xl flex justify-center mt-4">
          <img
            src="https://i.ibb.co/fYkwsCtz/Screen-Shot-2025-05-11-at-1-15-19-AM.png"
            alt="Threadbase Memory Timeline Visualization"
            className="rounded-lg shadow-md border border-border/40 max-w-full h-auto"
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="border-border/40 transition-all hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="mb-4 h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Memory Timeline</CardTitle>
                <CardDescription>Track memory operations over time</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Inspect what was read, written, and when. Monitor all memory operations with a detailed timeline view.
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="border-border/40 transition-all hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="mb-4 h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">
                  <GitCompare className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Versioning & Diffs</CardTitle>
                <CardDescription>Track memory changes over time</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  See changes to memory across sessions. Compare different versions and understand how memory evolves.
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="border-border/40 transition-all hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="mb-4 h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">
                  <GitBranch className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Behavior Tracing</CardTitle>
                <CardDescription>Understand memory influence</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Understand why your AI acted the way it did. Trace the path from memory to agent behavior and
                  responses.
                </p>
              </CardContent>
            </Card>
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
              <div className="mb-6 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect your agent</h3>
              <p className="text-muted-foreground">
                Integrate Threadbase with your AI agent using our simple SDK. Just a few lines of code.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Watch memory updates in real time</h3>
              <p className="text-muted-foreground">
                See memory operations as they happen. Monitor reads, writes, and changes in real time.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Debug with full context and history</h3>
              <p className="text-muted-foreground">
                Understand why your agent behaves the way it does with complete memory context and history.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Button size="lg" asChild>
              <Link href="https://cal.com/threadbase">Get a Demo Now</Link>
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
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
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
