"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { BackgroundPattern } from "@/components/ui/background-pattern";
import gsap from "gsap";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const trustIndicatorsRef = useRef<HTMLDivElement>(null);
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
          trustIndicatorsRef.current,
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
      tl.to(trustIndicatorsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      })
        .to(
          headlineRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.3"
        )
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
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-border"
    >
      {/* Background with modern gradient */}
      <div className="absolute inset-0 bg-background"></div>

      {/* Decorative elements */}
      <BackgroundPattern variant="hero" seed="hero-page" intensity="strong" />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Trust indicators */}
          <div
            ref={trustIndicatorsRef}
            className="flex items-center justify-center space-x-1 mb-6"
          >
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-accent text-accent transition-colors duration-300 hover:fill-accent/80"
                />
              ))}
            </div>
            <span className="text-sm text-foreground/70 ml-2 accent-text transition-colors duration-300 hover:text-foreground">
              Trusted by 200+ families
            </span>
          </div>

          {/* Main headline */}
          <h1
            ref={headlineRef}
            className="heading-hero text-primary mb-6 transition-colors duration-300 hover:text-primary/80"
          >
            Expert Academic & SEN Tutoring
            <br />
            <span className="text-foreground transition-colors duration-300 hover:text-primary">
              by Temitope Adeniyi
            </span>
          </h1>

          {/* Subheadline */}
          <p
            ref={subheadlineRef}
            className="body-large text-foreground/80 mb-8 max-w-2xl mx-auto transition-colors duration-300 hover:text-foreground"
          >
            Personalized learning plans for confident, successful students.
            <br />
            Specializing in academic excellence and supporting children with
            SEN.
          </p>

          {/* CTA Buttons */}
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Button
              size="lg"
              className="gradient-primary text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold font-inter"
              asChild
            >
              <Link href="/consultation">
                Book a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <a
              href="#services"
              className="text-primary hover:text-primary/80 font-medium text-lg underline underline-offset-4 hover:underline-offset-8 transition-all duration-300 accent-text focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-2 py-1"
            >
              Learn More About Our Services
            </a>
          </div>

          {/* Additional trust elements */}
          <div
            ref={trustElementsRef}
            className="mt-12 flex flex-wrap items-center justify-center space-x-8 text-sm text-foreground/70"
          >
            <div className="flex items-center space-x-2 group">
              <div className="w-2 h-2 bg-secondary rounded-full transition-all duration-300 group-hover:bg-secondary/80"></div>
              <span className="transition-colors duration-300 group-hover:text-foreground">
                20+ Years Experience
              </span>
            </div>
            <div className="flex items-center space-x-2 group">
              <div className="w-2 h-2 bg-primary rounded-full transition-all duration-300 group-hover:bg-primary/80"></div>
              <span className="transition-colors duration-300 group-hover:text-foreground">
                SEN Specialist
              </span>
            </div>
            <div className="flex items-center space-x-2 group">
              <div className="w-2 h-2 bg-accent rounded-full transition-all duration-300 group-hover:bg-accent/80"></div>
              <span className="transition-colors duration-300 group-hover:text-foreground">
                Academic Expert
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating cards for visual interest with shimmer animation */}
      <div
        ref={floatingCard1Ref}
        className="absolute top-1/4 left-8  bg-primary/5 backdrop-blur-sm border border-border p-4 rounded-xl transform rotate-3 hidden lg:block transition-all duration-300 hover:shadow-lg hover:-translate-y-2 float-animation shimmer-light dark:shimmer-dark"
      >
        <div className="relative z-10 text-sm font-semibold text-primary transition-colors duration-300 hover:text-primary/80">
          98%
        </div>
        <div className="relative z-10 text-xs text-muted-foreground">
          Success Rate
        </div>
      </div>

      <div
        ref={floatingCard2Ref}
        className="absolute bottom-1/4 right-8 bg-card/80 backdrop-blur-sm border border-border p-4 rounded-xl transform -rotate-2 hidden lg:block transition-all duration-300 hover:shadow-lg hover:-translate-y-2 float-animation-delayed shimmer-light dark:shimmer-dark"
      >
        <div className="relative z-10 text-sm font-semibold text-secondary transition-colors duration-300 hover:text-secondary/80">
          200+
        </div>
        <div className="relative z-10 text-xs text-muted-foreground">
          Happy Students
        </div>
      </div>
    </section>
  );
};

export default Hero;
