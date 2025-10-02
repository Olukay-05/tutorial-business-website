"use client";

import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Star,
  Award,
  Users,
  TrendingUp,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ContactForm } from "@/components/forms/ContactForm";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "info@bloomwisetutoring.com",
      href: "mailto:info@bloomwisetutoring.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+234 803 827 7651",
      href: "tel:+2348038277651",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lagos, Nigeria",
      href: "#",
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 hours",
      href: "#",
    },
  ];

  const trustStats = [
    {
      icon: Star,
      value: "98%",
      label: "Success Rate",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Users,
      value: "200+",
      label: "Happy Families",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Award,
      value: "20+",
      label: "Years Experience",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: TrendingUp,
      value: "95%",
      label: "Improvement Rate",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-40 right-20 w-40 h-40 bg-secondary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/5 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>

        {/* Hero Section */}
        <section className="relative py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="flex items-center justify-center space-x-1 mb-6 animate-fade-in-up">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent transition-colors duration-300 hover:scale-110"
                  />
                ))}
                <span className="text-sm text-muted-foreground ml-3 accent-text">
                  Trusted by 200+ families
                </span>
              </div>

              <h1
                className="heading-hero text-primary mb-6 animate-fade-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                Let&apos;s Start Your Child&apos;s
                <br />
                <span className="text-secondary">Learning Journey</span>
              </h1>

              <p
                className="body-large text-muted-foreground max-w-2xl mx-auto animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Ready to unlock your child&apos;s potential? Get in touch with
                Temitope Adeniyi, your trusted 11+ and SEN specialist with over
                20 years of experience.
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-3 gap-12 items-start">
              {/* Contact Form - Takes up 2 columns */}
              <div
                className="lg:col-span-2 animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                <ContactForm />
              </div>

              {/* Contact Info Sidebar */}
              <div
                className="space-y-8 animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                {/* Contact Information */}
                <Card className="glass-card border-0 shadow-xl hover-lift">
                  <CardContent className="p-6">
                    <h3 className="heading-card text-primary mb-6">
                      Contact Information
                    </h3>
                    <div className="space-y-4">
                      {contactInfo.map((info, index) => {
                        const IconComponent = info.icon;
                        return (
                          <a
                            key={index}
                            href={info.href}
                            className="flex items-center space-x-4 p-3 rounded-lg hover:bg-primary/5 transition-all duration-300 group hover-lift"
                          >
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                              <IconComponent className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-muted-foreground accent-text">
                                {info.label}
                              </p>
                              <p className="body-regular text-foreground group-hover:text-primary transition-colors duration-300">
                                {info.value}
                              </p>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* Trust Statistics */}
                <Card className="glass-card border-0 shadow-xl hover-lift">
                  <CardContent className="p-6">
                    <h3 className="heading-card text-primary mb-6">
                      Why Choose Us
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {trustStats.map((stat, index) => {
                        const IconComponent = stat.icon;
                        return (
                          <div
                            key={index}
                            className="text-center p-4 rounded-lg hover:bg-card/50 transition-all duration-300 group hover-scale shimmer-light dark:shimmer-dark"
                          >
                            <div
                              className={`w-12 h-12 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}
                            >
                              <IconComponent
                                className={`w-6 h-6 ${stat.color}`}
                              />
                            </div>
                            <div
                              className={`text-2xl font-bold ${stat.color} mb-1 group-hover:scale-105 transition-transform duration-300`}
                            >
                              {stat.value}
                            </div>
                            <div className="text-xs text-muted-foreground accent-text">
                              {stat.label}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Response Promise */}
                <Card className="glass-card border-0 shadow-xl hover-lift bg-gradient-to-br from-primary/5 to-secondary/5">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="heading-card text-primary mb-2">
                      Quick Response
                    </h4>
                    <p className="body-regular text-muted-foreground">
                      We respond to all inquiries within 24 hours, usually much
                      sooner!
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Floating Trust Elements */}
        <div className="absolute top-1/4 -left-4 hidden xl:block">
          <Card className="glass-card border-0 shadow-xl p-4 rotate-3 hover-lift float-animation shimmer-light dark:shimmer-dark">
            <div className="text-center">
              <div className="text-lg font-bold text-secondary mb-1">
                11+ Expert
              </div>
              <div className="text-xs text-muted-foreground">
                Specialist Tutor
              </div>
            </div>
          </Card>
        </div>

        <div className="absolute bottom-1/4 -right-4 hidden xl:block">
          <Card className="glass-card border-0 shadow-xl p-4 -rotate-2 hover-lift float-animation-delayed shimmer-light dark:shimmer-dark">
            <div className="text-center">
              <div className="text-lg font-bold text-primary mb-1">
                SEN Support
              </div>
              <div className="text-xs text-muted-foreground">
                Inclusive Learning
              </div>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
