"use client";

import React, { useRef, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ConsultationHero from "@/components/consultation/ConsultationHero";
import CalendlyEmbed from "@/components/consultation/CalendlyEmbed";
import BenefitsSection from "@/components/consultation/BenefitsSection";
import ConsultationTestimonials from "@/components/consultation/ConsultationTestimonials";
import ClosingCTA from "@/components/consultation/ClosingCTA";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Register the ScrollToPlugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollToPlugin);
}

const ConsultationPage = () => {
  const calendlyRef = useRef<HTMLDivElement>(null);

  const scrollToCalendly = () => {
    if (calendlyRef.current) {
      gsap.to(window, {
        duration: 1.2,
        scrollTo: {
          y: calendlyRef.current,
          offsetY: 100,
        },
        ease: "power2.inOut",
      });
    }
  };

  // Cleanup GSAP animations on unmount
  useEffect(() => {
    return () => {
      // Kill any ongoing GSAP animations when component unmounts
      gsap.globalTimeline.clear();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <ConsultationHero onBookNowClick={scrollToCalendly} />

        {/* Calendly Booking Section */}
        <section ref={calendlyRef} id="calendly" className="py-20 bg-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="heading-section text-foreground mb-4">
                Book a Consultation
              </h2>
              <p className="body-large text-muted-foreground max-w-2xl mx-auto">
                Choose a time that works best for you to meet with our tutor.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <CalendlyEmbed
                url="https://calendly.com/richblendconsult/30min"
                className="rounded-2xl shadow-xl border border-border/50"
              />
            </div>

            {/* Calendly Features */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto text-center">
              <div className="bg-card/40 backdrop-blur-sm rounded-xl p-6 border border-border/30">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary text-sm font-semibold">🌍</span>
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">
                  Automatic Timezone Detection
                </h3>
                <p className="text-sm text-muted-foreground">
                  No confusion about time zones - the system handles it
                  automatically
                </p>
              </div>

              <div className="bg-card/40 backdrop-blur-sm rounded-xl p-6 border border-border/30">
                <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-secondary text-sm font-semibold">
                    ⏰
                  </span>
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">
                  Buffer Periods
                </h3>
                <p className="text-sm text-muted-foreground">
                  Built-in buffer time between sessions for a relaxed experience
                </p>
              </div>

              <div className="bg-card/40 backdrop-blur-sm rounded-xl p-6 border border-border/30">
                <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-accent text-sm font-semibold">📧</span>
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">
                  Reminder Emails
                </h3>
                <p className="text-sm text-muted-foreground">
                  Automatic reminders so you never miss your appointment
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <BenefitsSection />

        {/* Testimonials Section */}
        <ConsultationTestimonials />

        {/* Closing CTA */}
        <ClosingCTA onBookNowClick={scrollToCalendly} />
      </main>

      <Footer />
    </div>
  );
};

export default ConsultationPage;
