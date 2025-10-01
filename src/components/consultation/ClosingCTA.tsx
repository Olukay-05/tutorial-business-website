"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Calendar } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ClosingCTAProps {
  onBookNowClick: () => void;
}

const ClosingCTA: React.FC<ClosingCTAProps> = ({ onBookNowClick }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Initial state
      gsap.set(contentRef.current, {
        opacity: 0,
        y: 40,
        scale: 0.95,
      });

      // Create scroll-triggered animation
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.to(contentRef.current, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
          });
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={contentRef} className="max-w-3xl mx-auto text-center">
          {/* Main CTA Content */}
          <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-border/50 hover:shadow-2xl transition-all duration-300 hover:scale-105">
            {/* Decorative elements */}
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-primary rounded-full opacity-60"></div>
            <div className="absolute -top-1 -right-3 w-3 h-3 bg-secondary rounded-full opacity-40"></div>
            <div className="absolute -bottom-2 -right-2 w-5 h-5 bg-accent rounded-full opacity-50"></div>

            <div className="relative z-10">
              <h2 className="heading-section text-foreground mb-6">
                Take the First Step Toward Your Child&apos;s Success Today
              </h2>

              <p className="body-large text-muted-foreground mb-8 max-w-2xl mx-auto">
                Ready to discover how we can help your child thrive? Book your
                free consultation now and let&apos;s create a personalized
                learning plan together.
              </p>

              {/* CTA Button */}
              <Button
                size="lg"
                onClick={onBookNowClick}
                className="gradient-primary text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300 px-12 py-6 text-xl font-semibold mb-6 group font-inter"
              >
                <Calendar className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                Book Your Free Consultation
                <ArrowDown className="ml-3 h-6 w-6 group-hover:translate-y-1 transition-transform duration-300" />
              </Button>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center justify-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>100% Free</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>No Commitment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>30 Minutes</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional encouragement */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground italic">
              &quot;Every successful learning journey begins with a single
              conversation&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosingCTA;
