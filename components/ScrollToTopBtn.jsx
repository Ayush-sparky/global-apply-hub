"use client";

import { ArrowUpFromDot } from "lucide-react";
import React, { useState, useEffect } from "react";
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > window.innerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Custom smooth scroll: starts slow, then speeds up
  const scrollToTop = () => {
    const startY = window.pageYOffset;
    const duration = 2000; // ms
    const startTime = performance.now();

    function easeInOut(t) {
      // Slow start, fast end (cubic)
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function animateScroll(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOut(progress);
      const newY = startY * (1 - eased);
      window.scrollTo(0, newY);
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    }
    requestAnimationFrame(animateScroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes smoothBounce {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-8px);
          }
          60% {
            transform: translateY(-4px);
          }
        }

        .bounce-button {
          animation: smoothBounce 2s ease-in-out infinite;
        }

        .bounce-button:hover {
          animation: none;
        }
      `}</style>

      <button
        onClick={scrollToTop}
        className={`
          cursor-pointer
          fixed bottom-6 right-6 z-50
          w-10 h-10 md:w-12 md:h-12 rounded-full
          bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500
          text-white shadow-lg
          transition-all duration-300 ease-in-out
          hover:from-blue-800 hover:via-blue-600 hover:to-blue-400
          hover:shadow-xl hover:-translate-y-1
          active:translate-y-0 active:scale-95
          sm:w-12 sm:h-12 sm:bottom-4 sm:right-4
          ${
            isVisible
              ? "opacity-100 visible translate-y-0 bounce-button"
              : "opacity-0 invisible translate-y-5"
          }
        `}
        title="scroll to top"
        aria-label="Scroll to top"
      >
        <ArrowUpFromDot className=" w-4 h-4 md:w-6 md:h-6 mx-auto" />
      </button>
    </>
  );
};

export default ScrollToTopButton;
