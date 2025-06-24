"use client";

import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > window.innerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
          fixed bottom-6 right-6 z-50
          w-14 h-14 rounded-full
          bg-gradient-to-r from-pink-500 to-rose-500
          text-white shadow-lg
          transition-all duration-300 ease-in-out
          hover:from-rose-500 hover:to-pink-500
          hover:shadow-xl hover:-translate-y-1
          active:translate-y-0 active:scale-95
          sm:w-12 sm:h-12 sm:bottom-4 sm:right-4
          ${
            isVisible
              ? "opacity-100 visible translate-y-0 bounce-button"
              : "opacity-0 invisible translate-y-5"
          }
        `}
        title="Back to top"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6 mx-auto" />
      </button>
    </>
  );
};

export default ScrollToTopButton;
