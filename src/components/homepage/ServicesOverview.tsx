"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calculator, Heart, TrendingUp } from "lucide-react";

const ServicesOverview = () => {
  const services = [
    {
      icon: Calculator,
      title: "11+ Maths & English",
      description:
        "Comprehensive preparation for 11+ entrance exams with proven strategies and personalized practice materials.",
      color: "text-primary",
      bgColor: "bg-primary/5",
    },
    {
      icon: Heart,
      title: "SEN Support",
      description:
        "Specialized support for children with dyslexia, dyscalculia, and ASD, creating inclusive learning environments.",
      color: "text-secondary",
      bgColor: "bg-secondary/5",
    },
    {
      icon: TrendingUp,
      title: "Confidence Building",
      description:
        "Fostering positive learning experiences that build self-esteem and academic confidence in every student.",
      color: "text-accent",
      bgColor: "bg-accent/5",
    },
  ];

  return (
    <section id="services" className="py-20 bg-primary/5 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-section text-foreground mb-4">Our Services</h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            Tailored educational support designed to unlock every child&apos;s
            potential
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-card backdrop-blur-sm"
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${service.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className={`w-8 h-8 ${service.color} transition-colors duration-300`} />
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
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg">
            <div className="text-left">
              <p className="body-regular text-card-foreground mb-2">
                Ready to get started?
              </p>
              <a
                href="/book-consultation"
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
