"use client";

import React, { useEffect, useRef } from "react";
import { Quote } from "lucide-react";

const CalloutQuote: React.FC = () => {
  const quoteRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLElement>(null);
  const authorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-bounce-in");

            // Stagger animations for child elements
            setTimeout(() => {
              if (iconRef.current)
                iconRef.current.classList.add("animate-bounce-in");
            }, 200);
            setTimeout(() => {
              if (textRef.current)
                textRef.current.classList.add("animate-fade-in-up");
            }, 400);
            setTimeout(() => {
              if (authorRef.current)
                authorRef.current.classList.add("animate-fade-in-up");
            }, 600);
          }
        });
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    if (quoteRef.current) {
      observer.observe(quoteRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={quoteRef} className="relative opacity-0">
      <div className="relative bg-gradient-primary rounded-2xl p-8 md:p-12 text-center overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-4 left-4 w-16 h-16 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-4 right-4 w-12 h-12 border-2 border-white rounded-full"></div>
          <div className="absolute top-1/2 right-8 w-8 h-8 border-2 border-white rounded-full"></div>
        </div>

        {/* Quote icon */}
        <div ref={iconRef} className="flex justify-center mb-6 opacity-0">
          <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm hover:scale-110 transition-transform duration-300">
            <Quote className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Quote text */}
        <blockquote
          ref={textRef}
          className="text-xl md:text-2xl font-semibold text-white leading-relaxed opacity-0"
          style={{ fontFamily: "var(--font-figtree)" }}
        >
          &quot;Give me a chance with your child, you&apos;ll be glad you
          did.&quot;
        </blockquote>

        {/* Author attribution */}
        <div ref={authorRef} className="mt-6 opacity-0">
          <div className="w-16 h-0.5 bg-white/40 mx-auto mb-4"></div>
          <p className="text-white/90 font-medium accent-text">
            Temitope Adeniyi
          </p>
          <p className="text-white/70 text-sm mt-1">Experienced Online Tutor</p>
        </div>
      </div>
    </div>
  );
};

export default CalloutQuote;
