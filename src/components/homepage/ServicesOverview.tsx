"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, Brain, Heart, MessageCircle } from "lucide-react";

const ServicesOverview = () => {
  const services = [
    {
      icon: Brain,
      title: "Personalized Strategies",
      description:
        "Customized learning plans tailored to each student's unique learning style and academic goals.",
      color: "text-primary",
      bgColor: "bg-primary/5",
    },
    {
      icon: BookOpen,
      title: "Academic Tutoring",
      description:
        "Comprehensive academic tutoring and dedicated homework support to boost grades and understanding.",
      color: "text-secondary",
      bgColor: "bg-secondary/5",
    },
    {
      icon: Heart,
      title: "SEN Support",
      description:
        "Specialized support for children with dyscalculia, dyslexia, and moderate ASD in an inclusive environment.",
      color: "text-accent",
      bgColor: "bg-accent/5",
    },
    {
      icon: MessageCircle,
      title: "Feedback & Support",
      description:
        "Continuous progress monitoring with ongoing communication and detailed feedback for parents.",
      color: "text-bloomwise-success", // Assuming this color exists or use another
      bgColor: "bg-green-500/5",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-primary/5 border-b border-border"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="heading-section text-foreground mb-4">Our Services</h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            Tailored educational support designed to unlock every child&apos;s
            potential
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;

            return (
              <Card
                key={index}
                className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-card backdrop-blur-sm animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${service.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent
                      className={`w-8 h-8 ${service.color} transition-colors duration-300`}
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

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:scale-105">
            <div className="text-left">
              <p className="body-regular text-card-foreground mb-2">
                Ready to get started?
              </p>
              <a
                href="/consultation"
                className="text-primary hover:text-primary/80 font-semibold text-lg underline underline-offset-4 hover:underline-offset-8 transition-all duration-200 accent-text"
              >
                Schedule your free consultation today →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
