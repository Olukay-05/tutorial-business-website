"use client";

import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ConsultationTestimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      quote:
        "The consultation helped us understand exactly what our son needed. We felt reassured and confident moving forward.",
      parent: "Sarah M.",
      location: "Parent of a Grade 4 student",
      rating: 5,
      highlight: "Consultation Experience",
    },
    {
      quote:
        "Clear, patient, and professional. The session was very insightful and gave us a clear path forward.",
      parent: "David L.",
      location: "Parent of a Year 2 student",
      rating: 5,
      highlight: "Professional Guidance",
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
            stagger: 0.2,
          }, "-=0.4");
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="heading-section text-foreground mb-4"
          >
            What Parents Say About Our Consultations
          </h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            Hear from families who&apos;ve experienced our consultation process
          </p>
        </div>

        {/* Testimonials Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative bg-card backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-primary/80">
                    <Quote className="w-4 h-4 text-primary-foreground" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4 pt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-accent text-accent transition-colors duration-300 hover:fill-accent/80"
                    />
                  ))}
                </div>

                {/* Highlight Badge */}
                <div className="inline-block mb-4">
                  <span className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full accent-text transition-colors duration-300 group-hover:bg-primary/20">
                    {testimonial.highlight}
                  </span>
                </div>

                {/* Quote */}
                <blockquote className="body-regular text-card-foreground leading-relaxed mb-6 accent-text">
                  &quot;{testimonial.quote}&quot;
                </blockquote>

                {/* Attribution */}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center transition-all duration-300 group-hover:from-primary/80 group-hover:to-secondary/80">
                    <span className="text-primary-foreground font-semibold text-sm">
                      {testimonial.parent.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-card-foreground body-regular transition-colors duration-300 group-hover:text-primary">
                      {testimonial.parent}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsultationTestimonials;