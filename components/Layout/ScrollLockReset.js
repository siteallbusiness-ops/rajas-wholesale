"use client";

import { useEffect } from "react";
import { releaseAllScrollLocks } from "@/hooks/useScrollLock";

/** Clear stale body scroll-lock styles after refresh or hard navigation. */
export default function ScrollLockReset() {
  useEffect(() => {
    releaseAllScrollLocks();

    const handlePageHide = () => {
      releaseAllScrollLocks();
    };

    window.addEventListener("pagehide", handlePageHide);
    return () => window.removeEventListener("pagehide", handlePageHide);
  }, []);

  return null;
}
