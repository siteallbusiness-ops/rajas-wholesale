"use client";

import { useEffect } from "react";

let lockCount = 0;
let savedScrollY = 0;

function lockBodyScroll() {
  lockCount += 1;

  if (lockCount > 1) {
    return;
  }

  savedScrollY = window.scrollY;
  document.body.style.position = "fixed";
  document.body.style.top = `-${savedScrollY}px`;
  document.body.style.left = "0";
  document.body.style.right = "0";
  document.body.style.width = "100%";
  document.body.style.overflow = "hidden";
}

function unlockBodyScroll() {
  lockCount = Math.max(0, lockCount - 1);

  if (lockCount > 0) {
    return;
  }

  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.left = "";
  document.body.style.right = "";
  document.body.style.width = "";
  document.body.style.overflow = "";
  window.scrollTo(0, savedScrollY);
}

/**
 * Lock body scroll when overlay/menu is open.
 * Supports multiple simultaneous locks (menu + cart + quick view).
 * @param {boolean} isLocked
 */
export function useScrollLock(isLocked) {
  useEffect(() => {
    if (!isLocked) {
      return undefined;
    }

    lockBodyScroll();

    return () => {
      unlockBodyScroll();
    };
  }, [isLocked]);
}

/** Reset scroll lock if navigation leaves a drawer open. */
export function releaseAllScrollLocks() {
  lockCount = 0;
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.left = "";
  document.body.style.right = "";
  document.body.style.width = "";
  document.body.style.overflow = "";
  savedScrollY = 0;
}
