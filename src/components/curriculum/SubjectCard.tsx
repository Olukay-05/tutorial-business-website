"use client";

import React, { useEffect, useRef } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface SubjectCardProps {
  title: string;
  description: string;
  points: string[];
  index: number;
  icon?: React.ReactNode;
}

const SubjectCard: React.FC<SubjectCardProps> = ({
  title,
  description,
  points,
  index,
  icon,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            entry.target.style.animationDelay = `${index * 0.1}s`;
          }
        });
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div ref={cardRef} className="h-full opacity-0">
      <Card className="h-full hover-lift glass-card border-border/50 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:-translate-y-1">
        <CardHeader className="pb-4">
          <div className="flex items-center space-x-3 mb-2">
            {icon && (
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                {icon}
              </div>
            )}
            <CardTitle className="heading-card text-primary">
              {title}
            </CardTitle>
          </div>
          {description && (
            <p className="body-regular text-muted-foreground">{description}</p>
          )}
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {points.map((point, pointIndex) => (
              <li
                key={pointIndex}
                className="flex items-start space-x-3 group animate-slide-in-left"
                style={{ animationDelay: `${(index * 0.1) + (pointIndex * 0.05)}s` }}
              >
                <div className="w-2 h-2 rounded-full bg-secondary mt-2 transition-all duration-300 group-hover:bg-primary"></div>
                <span className="body-regular text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default SubjectCard;