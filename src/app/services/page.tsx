"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Boxes,
  BookOpen,
  ArrowUpToLine,
  HandHeart,
  FileCheck2,
  CalendarClock,
  FileCog,
  MonitorDot,
  ChartColumnIncreasing,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { BackgroundPattern } from "@/components/ui/background-pattern";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import gsap from "gsap";

const ServicesPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const serviceCategoriesRef = useRef<HTMLDivElement>(null);
  const howItWorksRef = useRef<HTMLDivElement>(null);
  const whyChooseRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Set initial states
      gsap.set(
        [
          heroRef.current,
          serviceCategoriesRef.current,
          howItWorksRef.current,
          whyChooseRef.current,
          ctaRef.current,
        ],
        {
          opacity: 0,
          y: 30,
        }
      );

      // Create timeline
      const tl = gsap.timeline();

      // Animate sections in sequence
      tl.to(heroRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      })
        .to(
          serviceCategoriesRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .to(
          howItWorksRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .to(
          whyChooseRef.current,
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
        );

      // Animate service cards with stagger
      gsap.fromTo(
        ".service-card",
        {
          opacity: 0,
          y: 40,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.1,
          delay: 1.2,
        }
      );

      // Animate process steps
      gsap.fromTo(
        ".process-step",
        {
          opacity: 0,
          x: -30,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.2,
          delay: 2,
        }
      );

      // Animate benefits
      gsap.fromTo(
        ".benefit-item",
        {
          opacity: 0,
          x: 30,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.15,
          delay: 2.5,
        }
      );
    }
  }, []);

  const serviceCategories = [
    {
      icon: Boxes,
      title: "Early Years Support",
      description:
        "EYFS/Montessori foundations, handwriting development, and age-appropriate lessons for curiosity and confidence.",
      color: "text-primary",
      bgColor: "bg-primary/5",
      borderColor: "border-primary/20",
    },
    {
      icon: BookOpen,
      title: "Elementary Tutoring",
      description:
        "Numeracy, Literacy, English, and Science. Build strong foundations in reading, writing, and problem solving.",
      color: "text-secondary",
      bgColor: "bg-secondary/5",
      borderColor: "border-secondary/20",
    },
    {
      icon: ArrowUpToLine,
      title: "Middle School Prep",
      description:
        "Advanced literacy and mathematics, study skills and exam preparation, support for transition into higher learning.",
      color: "text-accent",
      bgColor: "bg-accent/5",
      borderColor: "border-accent/20",
    },
    {
      icon: HandHeart,
      title: "SEN Support",
      description:
        "Specialized strategies for learners with dyslexia, autism, or other SEN needs. Patient, individualized teaching that nurtures strengths.",
      color: "text-primary",
      bgColor: "bg-primary/5",
      borderColor: "border-primary/20",
    },
    {
      icon: FileCheck2,
      title: "Exam & Assessment Prep",
      description:
        "Entrance exams and standardized test support, confidence-building practice sessions, structured learning plans for measurable results.",
      color: "text-secondary",
      bgColor: "bg-secondary/5",
      borderColor: "border-secondary/20",
    },
  ];

  const processSteps = [
    {
      icon: CalendarClock,
      title: "Book a Consultation",
      description: "Schedule an introductory meeting via Calendly.",
      color: "text-primary",
    },
    {
      icon: FileCog,
      title: "Personalized Learning Plan",
      description: "Receive a tailored plan based on your child's needs.",
      color: "text-secondary",
    },
    {
      icon: MonitorDot,
      title: "Interactive Virtual Lessons",
      description: "Live Zoom/Meet sessions with engaging resources.",
      color: "text-accent",
    },
    {
      icon: ChartColumnIncreasing,
      title: "Progress Tracking",
      description: "Automated reports and ongoing feedback for parents.",
      color: "text-primary",
    },
  ];

  const benefits = [
    "Years of preschool leadership and online tutoring experience",
    "Patient, personalized support for diverse learners",
    "Proven success with early readers and SEN pupils",
    "Build long-term confidence and curiosity in learning",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative py-20 lg:py-32 overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <BackgroundPattern variant="hero" seed="services-hero" intensity="medium" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="heading-hero text-primary mb-6">Our Services</h1>
            <p className="body-large text-foreground/80 mb-8 max-w-3xl mx-auto">
              Personalized tutoring designed to help every child succeed, grow
              in confidence, and enjoy learning. I provide tailored support for
              early years, elementary, and middle school students, including
              children with special educational needs (SEN).
            </p>
            <Button
              size="lg"
              className="gradient-primary text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300 px-8 py-4"
              asChild
            >
              <Link href="/consultation">
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section ref={serviceCategoriesRef} className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-section text-foreground mb-4">
              Service Categories
            </h2>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              Comprehensive educational support tailored to each child&apos;s
              unique learning journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {serviceCategories.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={index}
                  className={`service-card group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 ${service.borderColor} border-2 bg-card/80 backdrop-blur-sm hover:bg-card/90`}
                >
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`w-20 h-20 mx-auto mb-6 rounded-3xl ${service.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <IconComponent
                        className={`w-10 h-10 ${service.color} transition-colors duration-300`}
                      />
                    </div>
                    <CardTitle className="heading-card text-card-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="body-regular text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section ref={howItWorksRef} className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-section text-foreground mb-4">
              How It Works
            </h2>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              A simple, proven process to get your child started on their
              learning journey
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div
                    key={index}
                    className="process-step flex items-start space-x-4 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <span className="text-lg font-bold text-primary">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <IconComponent className={`w-6 h-6 ${step.color}`} />
                        <h3 className="heading-card text-card-foreground">
                          {step.title}
                        </h3>
                      </div>
                      <p className="body-regular text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose My Services */}
      <section ref={whyChooseRef} className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-section text-foreground mb-4">
              Why Choose My Services?
            </h2>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              Proven expertise and personalized approach that makes a real
              difference
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="benefit-item flex items-start space-x-4 p-6 rounded-xl bg-card/80 backdrop-blur-sm border border-border hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-secondary" />
                  </div>
                  <p className="body-regular text-card-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section ref={ctaRef} className="py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <BackgroundPattern variant="section" seed="services-cta" intensity="light" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-section text-foreground mb-6">
              Ready to help your child succeed?
            </h2>
            <p className="body-large text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book a free consultation today and take the first step toward your
              child&apos;s academic growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button
                size="lg"
                className="gradient-success text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold"
                asChild
              >
                <Link href="/consultation">
                  Book a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-4"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
