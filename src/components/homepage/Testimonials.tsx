'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Sister Tope's tutoring gave my child the confidence boost they needed for their 11+ exams. We saw a remarkable improvement in both their academic performance and self-belief!",
      parent: "Sarah M.",
      location: "London",
      rating: 5,
      highlight: "11+ Success Story"
    },
    {
      quote: "The personalized support for my child with dyslexia has been life-changing. Her understanding and patience are second to none. My daughter now loves learning!",
      parent: "Michael R.",
      location: "Birmingham",
      rating: 5,
      highlight: "SEN Support"
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="heading-section text-foreground mb-4">
            What Parents Say
          </h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            Real stories from families who've experienced the Bloomwise difference
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="relative bg-card backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:bg-primary/80">
                    <Quote className="w-4 h-4 text-primary-foreground" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4 pt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent transition-colors duration-300 hover:fill-accent/80" />
                  ))}
                </div>

                {/* Highlight Badge */}
                <div className="inline-block mb-4">
                  <span className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full accent-text transition-colors duration-300 hover:bg-primary/20">
                    {testimonial.highlight}
                  </span>
                </div>

                {/* Quote */}
                <blockquote className="body-regular text-card-foreground leading-relaxed mb-6 accent-text">
                  "{testimonial.quote}"
                </blockquote>

                {/* Attribution */}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center transition-all duration-300 hover:from-primary/80 hover:to-secondary/80">
                    <span className="text-primary-foreground font-semibold text-sm">
                      {testimonial.parent.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-card-foreground body-regular transition-colors duration-300 hover:text-primary">
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

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="inline-flex flex-col items-center space-y-4 bg-card/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
            <p className="body-large text-card-foreground font-medium">
              Join our community of successful families
            </p>
            <a 
              href="/testimonials" 
              className="text-primary hover:text-primary/80 font-semibold underline underline-offset-4 hover:underline-offset-8 transition-all duration-200 accent-text"
            >
              Read more success stories →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;