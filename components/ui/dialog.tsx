"use client"

import type * as React from "react"
import { cn } from "@/lib/utils"

interface DialogProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
}

const Dialog = ({ open, onOpenChange, children }: DialogProps) => {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/50" onClick={() => onOpenChange?.(false)} />
      <div className="z-50">{children}</div>
    </div>
  )
}

const DialogContent = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "fixed z-50 grid w-full max-w-lg scale-100 gap-4 bg-background p-6 shadow-lg sm:rounded-lg md:w-full",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)} {...props} />
}

const DialogTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
  return <h3 className={cn("text-lg font-semibold leading-none tracking-tight", className)} {...props} />
}

const DialogDescription = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => {
  return <p className={cn("text-sm text-muted-foreground", className)} {...props} />
}

export { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription }
