"use client";

import React, { useEffect, useRef } from "react";
import { GraduationCap, Users, BookOpen } from "lucide-react";

const CurriculumHero: React.FC = () => {
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate elements on mount
    const elements = [badgeRef.current, headingRef.current, subheadingRef.current, statsRef.current];
    
    elements.forEach((element, index) => {
      if (element) {
        setTimeout(() => {
          element.classList.add("animate-fade-in-up");
        }, index * 100);
      }
    });
  }, []);

  return (
    <section className="relative py-16 md:py-24 bg-gradient-hero border-b border-border overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl float-animation"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl float-animation-delayed"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/20 rounded-full blur-lg float-animation"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div
            ref={badgeRef}
            className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 opacity-0 hover:bg-primary/20 transition-all duration-300"
          >
            <GraduationCap className="w-4 h-4" />
            <span>Comprehensive Learning Program</span>
          </div>

          {/* Main heading */}
          <h1
            ref={headingRef}
            className="heading-hero text-primary mb-6 opacity-0"
          >
            Our Curriculum
          </h1>

          {/* Subheading */}
          <p
            ref={subheadingRef}
            className="body-large text-foreground/80 mb-8 max-w-3xl mx-auto opacity-0"
          >
            Tailored learning experiences designed to build confidence, nurture curiosity, 
            and help every child reach their full potential across all key subjects.
          </p>

          {/* Stats */}
          <div
            ref={statsRef}
            className="flex flex-wrap items-center justify-center gap-8 text-sm text-foreground/70 opacity-0"
          >
            <div className="flex items-center space-x-2 group hover:scale-105 transition-transform duration-300">
              <BookOpen className="w-5 h-5 text-primary group-hover:text-primary/80 transition-colors" />
              <span className="group-hover:text-foreground transition-colors">
                Core Subject Areas
              </span>
            </div>
            <div className="flex items-center space-x-2 group hover:scale-105 transition-transform duration-300">
              <Users className="w-5 h-5 text-secondary group-hover:text-secondary/80 transition-colors" />
              <span className="group-hover:text-foreground transition-colors">
                Early Years to Middle School
              </span>
            </div>
            <div className="flex items-center space-x-2 group hover:scale-105 transition-transform duration-300">
              <GraduationCap className="w-5 h-5 text-accent group-hover:text-accent/80 transition-colors" />
              <span className="group-hover:text-foreground transition-colors">
                SEN Support Included
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumHero;