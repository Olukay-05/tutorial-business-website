"use client";

import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCheck } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const BenefitsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const benefits = [
    {
      title: "Understand Your Child's Strengths",
      description: "Learn about your child's unique learning style, strengths, and areas for growth through our comprehensive assessment.",
      icon: CheckCheck,
    },
    {
      title: "Receive a Tailored Learning Plan",
      description: "Get a personalized roadmap designed specifically for your child's needs, goals, and learning preferences.",
      icon: CheckCheck,
    },
    {
      title: "Ask Questions & Get Expert Advice",
      description: "Discuss tutoring methods, support strategies, and get answers to all your questions about your child's education.",
      icon: CheckCheck,
    },
    {
      title: "Free, No Obligation",
      description: "This consultation is completely free with no strings attached. Take your time to decide what's best for your child.",
      icon: CheckCheck,
    },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Initial states
      gsap.set([titleRef.current], {
        opacity: 0,
        y: 30,
      });

      gsap.set(cardsRef.current?.children || [], {
        opacity: 0,
        y: 40,
        scale: 0.95,
      });

      // Create scroll-triggered animation
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        onEnter: () => {
          const tl = gsap.timeline();
          
          tl.to(titleRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          })
          .to(cardsRef.current?.children || [], {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.7)",
            stagger: 0.15,
          }, "-=0.4");
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="heading-section text-foreground mb-4"
          >
            Why Book a Consultation?
          </h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            Discover how we can help your child succeed with a personalized approach to learning
          </p>
        </div>

        {/* Benefits Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card
                key={index}
                className="relative bg-card/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 group"
              >
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-primary group-hover:text-primary/80 transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <h3 className="heading-card text-card-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="body-regular text-muted-foreground leading-relaxed group-hover:text-card-foreground transition-colors duration-300">
                    {benefit.description}
                  </p>

                  {/* Decorative element */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-accent rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center space-y-4 bg-card/40 backdrop-blur-sm rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
            <p className="body-large text-card-foreground font-medium">
              Ready to get started?
            </p>
            <p className="text-sm text-muted-foreground">
              Book your free consultation below and take the first step toward your child&apos;s success
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;