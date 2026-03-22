import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg" | "xl" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap font-bold tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]";
    
    const variants = {
      primary: "bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 hover:shadow-primary/40 hover:-translate-y-0.5",
      secondary: "bg-foreground text-background shadow-lg hover:bg-foreground/90 hover:-translate-y-0.5",
      outline: "border-2 border-border bg-transparent hover:bg-muted hover:border-primary/50 hover:text-foreground",
      ghost: "hover:bg-muted/50 hover:text-foreground",
      link: "text-primary underline-offset-4 hover:underline p-0 h-auto",
    }

    const sizes = {
      sm: "h-9 rounded-md px-4 text-xs",
      md: "h-12 rounded-lg px-6 text-sm",
      lg: "h-14 rounded-xl px-8 text-base",
      xl: "h-16 rounded-2xl px-10 text-lg",
      icon: "h-10 w-10 rounded-md",
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
