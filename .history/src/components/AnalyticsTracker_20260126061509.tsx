/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export default function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!window.dataLayer) return;

    window.dataLayer.push({
      event: "pageview",
      page_path: pathname + (searchParams.toString() ? `?${searchParams}` : ""),
    });
  }, [pathname, searchParams]);

  return null;
}
