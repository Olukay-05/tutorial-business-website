"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Award, Users, Heart } from "lucide-react";
import Image from "next/image";

import { BackgroundPattern } from "@/components/ui/background-pattern";

export default function AboutPage() {
  const qualifications = [
    { icon: Award, text: "B.Sc. in Science Education" },
    { icon: BookOpen, text: "Specialist in SEN" },
    { icon: Users, text: "20+ Years Teaching Experience" },
    { icon: Heart, text: "Passionate About Student Success" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="relative py-20">
        <BackgroundPattern variant="section" seed="about-page" intensity="light" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <Card className="bg-card/80 backdrop-blur-sm border-0 shadow-lg overflow-hidden">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Image Section */}
                  <div className="relative">
                    <Image
                      src="/temitope.JPG"
                      alt="Temitope Adeniyi - Professional educator and tutor specializing in 11+ exams and SEN support"
                      className="w-full max-w-md mx-auto rounded-2xl shadow-2xl object-cover aspect-[3/4]"
                      width={400}
                      height={533}
                    />
                  </div>

                  {/* Content Section */}
                  <div className="space-y-6">
                    <h1 className="heading-hero text-primary">About Temitope Adeniyi</h1>

                    <p className="body-large text-foreground leading-relaxed">
                      I hold a B.Sc. Ed in Biology Education with over 20 years of experience teaching early years,
                      primary, and secondary students. I have hands-on expertise in EYFS, Montessori, British,
                      and Nigerian curricula.
                    </p>

                    <p className="body-regular text-foreground leading-relaxed">
                      I specialize in teaching children with special education needs and learning disabilities,
                      providing patient, personalized support. I have helped children learn to read with ease,
                      develop strong number sense leading to multiple academic awards, and supported SEND learners
                      in achieving outstanding growth in comprehension, communication, math, and social skills.
                    </p>

                    {/* Qualifications */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                      {qualifications.map((qual, index) => {
                        const IconComponent = qual.icon;
                        return (
                          <div
                            key={index}
                            className="flex items-center space-x-3 p-3 rounded-lg bg-primary/5 shadow-sm hover:shadow-md transition-all duration-300"
                          >
                            <div className="flex-shrink-0">
                              <IconComponent className="w-5 h-5 text-primary" />
                            </div>
                            <span className="body-regular text-foreground font-medium">
                              {qual.text}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div className="space-y-2 group">
                    <div className="text-3xl font-bold text-primary font-figtree">
                      200+
                    </div>
                    <p className="text-foreground body-regular">
                      Students Taught
                    </p>
                  </div>
                  <div className="space-y-2 group">
                    <div className="text-3xl font-bold text-secondary font-figtree">
                      98%
                    </div>
                    <p className="text-foreground body-regular">
                      Success Rate
                    </p>
                  </div>
                  <div className="space-y-2 group">
                    <div className="text-3xl font-bold text-accent font-figtree">
                      20+
                    </div>
                    <p className="text-foreground body-regular">
                      Years Experience
                    </p>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="mt-16 bg-primary/5 rounded-2xl p-8 border border-primary/10">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">“</span>
                    </div>
                    <div>
                      <p className="body-regular text-foreground italic mb-4">
                        Mrs. Adeniyi has taught all three of my children, and each one has thrived under her care.
                        Her dedication, kindness, and teaching skills bring out the best in every child.
                        More than a teacher, she is truly a blessing to our family!
                      </p>
                      <p className="text-primary font-semibold">- Josephine U., Lagos</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <Link href="/" className="text-primary hover:underline text-sm">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}