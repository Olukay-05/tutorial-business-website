"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export default function TestimonialsPage() {
  const testimonials = [
    {
      quote:
        "Mrs. Adeniyi has taught all three of my children, and each one has thrived under her care. Her dedication, kindness, and teaching skills bring out the best in every child. More than a teacher, she's truly a blessing to our family!",
      parent: "Josephine U.",
      location: "Lagos",
      rating: 5,
      highlight: "11+ Success Story",
    },
    {
      quote:
        "The personalized support for my child with dyslexia has been life-changing. Her understanding and patience are second to none. My daughter now loves learning!",
      parent: "Michael R.",
      location: "Birmingham",
      rating: 5,
      highlight: "SEN Support",
    },
    {
      quote:
        "My son was struggling with math, but after working with Temitope, his confidence has soared. His grades have improved significantly, and he actually enjoys math now!",
      parent: "Sarah T.",
      location: "London",
      rating: 5,
      highlight: "Math Confidence",
    },
    {
      quote:
        "The reading intervention support was exactly what my daughter needed. She went from being behind her peers to excelling in comprehension. I'm so grateful!",
      parent: "David L.",
      location: "Manchester",
      rating: 5,
      highlight: "Reading Progress",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="heading-hero text-primary mb-4">Success Stories</h1>
            <p className="body-large text-foreground max-w-2xl mx-auto">
              Hear from families who have experienced the Bloomwise difference
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="relative bg-card/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  {/* Quote Icon */}
                  <div className="absolute -top-4 left-8">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Quote className="w-4 h-4 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4 pt-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-accent text-accent"
                      />
                    ))}
                  </div>

                  {/* Highlight Badge */}
                  <div className="inline-block mb-4">
                    <span className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full">
                      {testimonial.highlight}
                    </span>
                  </div>

                  {/* Quote */}
                  <blockquote className="body-regular text-foreground leading-relaxed mb-6">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>

                  {/* Attribution */}
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-semibold text-sm">
                        {testimonial.parent.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground body-regular">
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

          {/* CTA Section */}
          <div className="text-center mt-16 bg-primary/5 rounded-2xl p-8">
            <h2 className="heading-section text-primary mb-4">Join Our Success Stories</h2>
            <p className="body-large text-foreground max-w-2xl mx-auto mb-6">
              Ready to see your child thrive academically? Book a consultation today.
            </p>
            <a
              href="/consultation"
              className="inline-block gradient-primary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Schedule Free Consultation
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}