"use client";

import { useEffect, useState } from "react";
import { SITE_TAGLINE } from "@/constants/site";
import styles from "./HomeHero.module.css";

const LINE_TWO_PREFIX = "Quality stock for ";
const LINE_TWO_ACCENT = "your shop";
const LINE_ONE_LENGTH = SITE_TAGLINE.length;
const LINE_TWO_PREFIX_LENGTH = LINE_TWO_PREFIX.length;
const LINE_TWO_ACCENT_LENGTH = LINE_TWO_ACCENT.length;
const TOTAL_LENGTH = LINE_ONE_LENGTH + LINE_TWO_PREFIX_LENGTH + LINE_TWO_ACCENT_LENGTH;

function getTypingDelay(index) {
  if (index === 0) return 350;
  if (index === LINE_ONE_LENGTH) return 650;
  if (index === LINE_ONE_LENGTH + LINE_TWO_PREFIX_LENGTH) return 280;
  if (index < LINE_ONE_LENGTH && SITE_TAGLINE[index - 1] === " ") return 95;
  return 58;
}

export default function HeroTypewriterTitle() {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [progress, setProgress] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  const charIndex = reduceMotion ? TOTAL_LENGTH : progress;
  const isComplete = charIndex >= TOTAL_LENGTH;
  const showCursor = !reduceMotion && cursorVisible;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const applyPreference = () => setReduceMotion(media.matches);
    applyPreference();
    media.addEventListener("change", applyPreference);
    return () => media.removeEventListener("change", applyPreference);
  }, []);

  useEffect(() => {
    if (reduceMotion || isComplete) return undefined;

    const timer = window.setTimeout(() => {
      setProgress((current) => current + 1);
    }, getTypingDelay(progress));

    return () => window.clearTimeout(timer);
  }, [progress, isComplete, reduceMotion]);

  useEffect(() => {
    if (reduceMotion || !isComplete) return undefined;

    const hideCursor = window.setTimeout(() => setCursorVisible(false), 2200);
    return () => window.clearTimeout(hideCursor);
  }, [isComplete, reduceMotion]);

  const lineOne = SITE_TAGLINE.slice(0, Math.min(charIndex, LINE_ONE_LENGTH));
  const lineTwoIndex = Math.max(0, charIndex - LINE_ONE_LENGTH);
  const lineTwoPrefix = LINE_TWO_PREFIX.slice(
    0,
    Math.min(lineTwoIndex, LINE_TWO_PREFIX_LENGTH)
  );
  const lineTwoAccent = LINE_TWO_ACCENT.slice(
    0,
    Math.max(0, lineTwoIndex - LINE_TWO_PREFIX_LENGTH)
  );

  const cursor = showCursor ? (
    <span className={styles.typeCursor} aria-hidden="true">
      |
    </span>
  ) : null;

  return (
    <h1 id="home-hero-title" className={styles.title}>
      <span className="sr-only">
        {SITE_TAGLINE}. {LINE_TWO_PREFIX}
        {LINE_TWO_ACCENT}
      </span>

      <span className={styles.titleMain} aria-hidden="true">
        {lineOne}
        {charIndex <= LINE_ONE_LENGTH ? cursor : null}
      </span>

      {(charIndex > LINE_ONE_LENGTH || isComplete) && (
        <span className={styles.titleLine} aria-hidden="true">
          {lineTwoPrefix}
          {lineTwoAccent ? (
            <span className={styles.titleAccent}>{lineTwoAccent}</span>
          ) : null}
          {charIndex > LINE_ONE_LENGTH && !isComplete ? cursor : null}
        </span>
      )}
    </h1>
  );
}
