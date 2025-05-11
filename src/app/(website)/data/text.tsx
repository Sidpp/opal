"use client";
import { useEffect, useState } from "react";

const phrases = [
  "Welcome to Opal",
  "Reach more. Do less.",
  "Effortless video creation.",
  "Start Creating Now. 📹 ",
];
function Text() {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [stopped, setStopped] = useState(false);

  useEffect(() => {
    if (stopped) return;

    const currentPhrase = phrases[phraseIndex];
    const delay = isDeleting
      ? Math.max(10, 100 - charIndex * 3)
      : Math.min(100, 30 + charIndex * 2);

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentPhrase.length) {
        setText(currentPhrase.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (!isDeleting && charIndex === currentPhrase.length) {
        if (phraseIndex === phrases.length - 1) {
          setStopped(true);
        } else {
          setTimeout(() => setIsDeleting(true), 1000); // Soft pause before deleting
        }
      } else if (isDeleting && charIndex > 0) {
        setText(currentPhrase.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setPhraseIndex((prev) => prev + 1);
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex, stopped]);

  return (
    <div className="absolute inset-0 z-50 flex flex-col item-center justify-center text-center  px-6 text-slate-300">
      <h1
        className={`text-6xl font-bold drop-shadow-lg ${
          phraseIndex === phrases.length - 1 ? "text-grey" : ""
        }`}
      >
        {text}
        {!stopped && <span className="animate-blink">|</span>}
      </h1>
    </div>
  );
}
export default Text;
