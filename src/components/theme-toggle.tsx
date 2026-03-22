"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-10 h-10" />
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full w-10 h-10 border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-md relative flex items-center justify-center overflow-hidden hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] transition-all dark:translate-y-10 dark:opacity-0 text-foreground" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] transition-all -translate-y-10 opacity-0 dark:translate-y-0 dark:opacity-100 text-foreground" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
