"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Calendar } from "lucide-react";
import gsap from "gsap";

interface ConsultationHeroProps {
  onBookNowClick: () => void;
}

const ConsultationHero: React.FC<ConsultationHeroProps> = ({ onBookNowClick }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const trustElementsRef = useRef<HTMLDivElement>(null);
  const floatingCard1Ref = useRef<HTMLDivElement>(null);
  const floatingCard2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Initial states
      gsap.set(
        [
          headlineRef.current,
          subheadlineRef.current,
          ctaRef.current,
          trustElementsRef.current,
        ],
        {
          opacity: 0,
          y: 20,
        }
      );

      gsap.set([floatingCard1Ref.current, floatingCard2Ref.current], {
        opacity: 0,
        y: 30,
        rotation: 5,
      });

      // Animation timeline
      const tl = gsap.timeline();

      // Staggered entrance animations
      tl.to(headlineRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      })
        .to(
          subheadlineRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .to(
          ctaRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .to(
          trustElementsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .to(
          [floatingCard1Ref.current, floatingCard2Ref.current],
          {
            opacity: 1,
            y: 0,
            rotation: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
            stagger: 0.2,
          },
          "-=0.6"
        );
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden border-b border-border"
    >
      {/* Background with modern gradient */}
      <div className="absolute inset-0 bg-background"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl transition-all duration-300 hover:bg-primary/20"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-secondary/10 rounded-full blur-2xl transition-all duration-300 hover:bg-secondary/20"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-accent/20 rounded-full blur-lg transition-all duration-300 hover:bg-accent/30"></div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main headline */}
          <h1
            ref={headlineRef}
            className="heading-hero text-primary mb-6 transition-colors duration-300 hover:text-primary/80"
          >
            Book a Free Consultation
          </h1>

          {/* Subheadline */}
          <p
            ref={subheadlineRef}
            className="body-large text-foreground/80 mb-8 max-w-2xl mx-auto transition-colors duration-300 hover:text-foreground"
          >
            Let&apos;s discuss your child&apos;s learning needs and create a personalized plan to help them succeed.
            <br />
            <span className="text-primary font-medium">Simple, obligation-free, and tailored to your child.</span>
          </p>

          {/* CTA Buttons */}
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Button
              size="lg"
              onClick={onBookNowClick}
              className="gradient-success text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Now - It&apos;s Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <div className="flex items-center space-x-2 text-sm text-foreground/70">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent text-accent transition-colors duration-300"
                  />
                ))}
              </div>
              <span className="accent-text">
                Trusted by 200+ families
              </span>
            </div>
          </div>

          {/* Additional trust elements */}
          <div
            ref={trustElementsRef}
            className="mt-12 flex flex-wrap items-center justify-center space-x-8 text-sm text-foreground/70"
          >
            <div className="flex items-center space-x-2 group">
              <div className="w-2 h-2 bg-secondary rounded-full transition-all duration-300 group-hover:bg-secondary/80"></div>
              <span className="transition-colors duration-300 group-hover:text-foreground">
                No Obligation
              </span>
            </div>
            <div className="flex items-center space-x-2 group">
              <div className="w-2 h-2 bg-primary rounded-full transition-all duration-300 group-hover:bg-primary/80"></div>
              <span className="transition-colors duration-300 group-hover:text-foreground">
                30 Minutes
              </span>
            </div>
            <div className="flex items-center space-x-2 group">
              <div className="w-2 h-2 bg-accent rounded-full transition-all duration-300 group-hover:bg-accent/80"></div>
              <span className="transition-colors duration-300 group-hover:text-foreground">
                Personalized Plan
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating cards for visual interest */}
      <div
        ref={floatingCard1Ref}
        className="absolute top-1/4 left-8 bg-primary/5 backdrop-blur-sm border border-border p-4 rounded-xl transform rotate-3 hidden lg:block transition-all duration-300 hover:shadow-lg hover:-translate-y-2 float-animation shimmer-light dark:shimmer-dark"
      >
        <div className="relative z-10 text-sm font-semibold text-primary transition-colors duration-300 hover:text-primary/80">
          Free
        </div>
        <div className="relative z-10 text-xs text-muted-foreground">
          Consultation
        </div>
      </div>

      <div
        ref={floatingCard2Ref}
        className="absolute bottom-1/4 right-8 bg-card/80 backdrop-blur-sm border border-border p-4 rounded-xl transform -rotate-2 hidden lg:block transition-all duration-300 hover:shadow-lg hover:-translate-y-2 float-animation-delayed shimmer-light dark:shimmer-dark"
      >
        <div className="relative z-10 text-sm font-semibold text-secondary transition-colors duration-300 hover:text-secondary/80">
          30min
        </div>
        <div className="relative z-10 text-xs text-muted-foreground">
          Duration
        </div>
      </div>
    </section>
  );
};

export default ConsultationHero;