"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      // Professional analytics tracking (e.g., GTM, GA4, Vercel Analytics)
      // This is a placeholder for a real integration
      console.log(`[Analytics] Page View: ${pathname}${searchParams?.toString() ? `?${searchParams.toString()}` : ''}`);
    }
  }, [pathname, searchParams]);

  return null;
}
