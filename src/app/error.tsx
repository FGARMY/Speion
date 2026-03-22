"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error
    console.error("Global Error Caught:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Something went wrong!</h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-md">
        An unexpected error has occurred. We have been notified and are looking into it.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button onClick={() => reset()} className="px-8 hover:bg-primary hover:text-white">
          Try again
        </Button>
        <Button onClick={() => window.location.href = '/'} variant="outline" className="px-8 hover:bg-black/10 dark:bg-white/10">
          Go Home
        </Button>
      </div>
    </div>
  );
}
