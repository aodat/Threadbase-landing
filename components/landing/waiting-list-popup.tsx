"use client"

import React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface WaitingListPopupProps {
  isOpen: boolean
  onClose: () => void
}

export function WaitingListPopup({ isOpen, onClose }: WaitingListPopupProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [captcha, setCaptcha] = useState("")
  const [captchaQuestion, setCaptchaQuestion] = useState("")
  const [captchaAnswer, setCaptchaAnswer] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const [isSuccess, setIsSuccess] = useState(false)

  // Generate simple math captcha
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1
    const num2 = Math.floor(Math.random() * 10) + 1
    const answer = num1 + num2
    setCaptchaQuestion(`${num1} + ${num2} = ?`)
    setCaptchaAnswer(answer)
  }

  // Generate captcha when popup opens
  React.useEffect(() => {
    if (isOpen && !captchaQuestion) {
      generateCaptcha()
    }
  }, [isOpen, captchaQuestion])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    // Validate captcha
    if (Number.parseInt(captcha) !== captchaAnswer) {
      setError("Please solve the math problem correctly")
      setIsLoading(false)
      return
    }

    try {
      const response = await fetch("https://api.threadbase.dev/auth/waiting", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      })

      const data = await response.json()

      if (!response.ok) {
        if (data.meta && data.meta.message) {
          throw new Error(data.meta.message)
        } else if (data.errors && data.errors.length > 0) {
          throw new Error(data.errors[0].message || "Validation error")
        } else {
          throw new Error(`Waiting list signup failed with status: ${response.status}`)
        }
      }

      setIsSuccess(true)
      setIsLoading(false)
    } catch (error) {
      console.error("Waiting list signup error:", error)
      setIsLoading(false)
      setError(error instanceof Error ? error.message : "An unexpected error occurred")
    }
  }

  const handleClose = () => {
    setName("")
    setEmail("")
    setCaptcha("")
    setCaptchaQuestion("")
    setCaptchaAnswer(0)
    setError(null)
    setIsSuccess(false)
    onClose()
  }

  const handleTryAgain = () => {
    setIsSuccess(false)
    setName("")
    setEmail("")
    setCaptcha("")
    generateCaptcha()
    setError(null)
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Join the Waiting List</DialogTitle>
          <DialogDescription>
            Be the first to know when Threadbase becomes available. We'll notify you as soon as we're ready!
          </DialogDescription>
        </DialogHeader>

        {isSuccess ? (
          <div className="space-y-4">
            <Alert className="bg-green-50 border-green-200">
              <AlertDescription className="text-green-800">
                <strong>You're on the list!</strong> We'll email you at <span className="font-medium">{email}</span>{" "}
                when Threadbase is ready.
              </AlertDescription>
            </Alert>
            <div className="flex gap-3">
              <Button onClick={handleClose} variant="outline" className="flex-1">
                Close
              </Button>
              <Button onClick={handleTryAgain} className="flex-1 bg-black text-white hover:bg-black/90">
                Add Another
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="space-y-2">
              <Label htmlFor="waitlist-name">Name</Label>
              <Input
                id="waitlist-name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="waitlist-email">Email</Label>
              <Input
                id="waitlist-email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="captcha">Security Check</Label>
              <div className="flex items-center gap-3">
                <div className="bg-muted px-3 py-2 rounded-md font-mono text-sm min-w-[100px] text-center">
                  {captchaQuestion}
                </div>
                <Input
                  id="captcha"
                  type="number"
                  placeholder="Answer"
                  value={captcha}
                  onChange={(e) => setCaptcha(e.target.value)}
                  required
                  disabled={isLoading}
                  className="w-20"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={generateCaptcha}
                  disabled={isLoading}
                  className="text-xs"
                >
                  New
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">Solve the math problem to continue</p>
            </div>

            <div className="flex gap-3 pt-2">
              <Button type="button" variant="outline" onClick={handleClose} className="flex-1" disabled={isLoading}>
                Cancel
              </Button>
              <Button type="submit" className="flex-1 bg-black text-white hover:bg-black/90" disabled={isLoading}>
                {isLoading ? "Joining..." : "Join Waiting List"}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
