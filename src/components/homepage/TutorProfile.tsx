"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Award, BookOpen, Users } from "lucide-react";
import Image from "next/image";

const TutorProfile = () => {
  const credentials = [
    { icon: Award, text: "BA in Education" },
    { icon: BookOpen, text: "Specialist in SEN" },
    { icon: Users, text: "20+ Years Teaching Experience" },
    { icon: CheckCircle, text: "11+ Exam Specialist" },
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="heading-section text-foreground mb-4">
              Meet Temitope Adeniyi
            </h2>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              Your dedicated partner in educational excellence
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/temitope.JPG"
                  alt="Temitope Adeniyi - Professional educator and tutor specializing in 11+ exams and SEN support"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl object-cover aspect-[3/4] transition-all duration-300 hover:shadow-3xl"
                  width={400}
                  height={533}
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-bloomwise-primary/10 rounded-full blur-xl transition-all duration-300 hover:bg-bloomwise-primary/20"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-bloomwise-success/10 rounded-full blur-2xl transition-all duration-300 hover:bg-bloomwise-success/20"></div>
            </div>

            {/* Content Section */}
            <div className="space-y-8">
              {/* Bio */}
              <div className="space-y-6">
                <p className="body-large text-foreground leading-relaxed">
                  With over 20 years of experience in education, Temitope
                  specializes in preparing students for 11+ exams and providing
                  tailored support for children with Special Educational Needs.
                </p>
                <p className="body-regular text-muted-foreground leading-relaxed">
                  Her patient, encouraging approach helps students flourish,
                  building not just academic skills but also the confidence
                  needed for lifelong learning success.
                </p>
              </div>

              {/* Credentials */}
              <div className="space-y-4">
                <h3 className="heading-card text-foreground mb-6">
                  Qualifications & Expertise
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {credentials.map((credential, index) => {
                    const IconComponent = credential.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-3 rounded-lg bg-card shadow-sm hover:shadow-md transition-all duration-300 hover:bg-accent/5"
                      >
                        <div className="flex-shrink-0">
                          <IconComponent className="w-5 h-5 text-bloomwise-primary transition-colors duration-300 hover:text-bloomwise-primary/80" />
                        </div>
                        <span className="body-regular text-foreground font-medium">
                          {credential.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-6">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-lg"
                >
                  Read More About My Approach
                </Button>
              </div>
            </div>
          </div>

          {/* Additional Trust Elements */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2 group">
              <div
                className="text-3xl font-bold text-bloomwise-primary transition-colors duration-300 group-hover:text-bloomwise-primary/80"
                style={{ fontFamily: "var(--font-figtree)" }}
              >
                200+
              </div>
              <p className="text-muted-foreground body-regular transition-colors duration-300 group-hover:text-foreground">
                Students Taught
              </p>
            </div>
            <div className="space-y-2 group">
              <div
                className="text-3xl font-bold text-bloomwise-success transition-colors duration-300 group-hover:text-bloomwise-success/80"
                style={{ fontFamily: "var(--font-figtree)" }}
              >
                98%
              </div>
              <p className="text-muted-foreground body-regular transition-colors duration-300 group-hover:text-foreground">
                Success Rate
              </p>
            </div>
            <div className="space-y-2 group">
              <div
                className="text-3xl font-bold text-bloomwise-warning transition-colors duration-300 group-hover:text-bloomwise-warning/80"
                style={{ fontFamily: "var(--font-figtree)" }}
              >
                20+
              </div>
              <p className="text-muted-foreground body-regular transition-colors duration-300 group-hover:text-foreground">
                Years Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TutorProfile;
