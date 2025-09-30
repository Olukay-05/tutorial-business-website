"use client";

import React, { useEffect, useRef } from "react";
import { 
  Calculator, 
  BookOpen, 
  Microscope, 
  PenTool, 
  Heart,
  Target,
  Award,
  Users
} from "lucide-react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CurriculumHero from "@/components/curriculum/CurriculumHero";
import SubjectCard from "@/components/curriculum/SubjectCard";
import CalloutQuote from "@/components/curriculum/CalloutQuote";
import { Separator } from "@/components/ui/separator";

const CurriculumPage: React.FC = () => {
  const introRef = useRef<HTMLDivElement>(null);
  const coreSubjectsRef = useRef<HTMLDivElement>(null);
  const senSupportRef = useRef<HTMLDivElement>(null);
  const philosophyRef = useRef<HTMLDivElement>(null);
  const whyChooseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    const refs = [introRef, coreSubjectsRef, senSupportRef, philosophyRef, whyChooseRef];
    refs.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);
  const coreSubjects = [
    {
      title: "Numeracy & Math",
      description: "Building strong mathematical foundations with confidence",
      icon: <Calculator className="w-6 h-6" />,
      points: [
        "Build strong foundations in numeracy and problem solving",
        "Simplify complex concepts into clear, practical steps",
        "Boost confidence in mathematical thinking",
        "Tailored support for learners at all levels"
      ]
    },
    {
      title: "Literacy & English",
      description: "Comprehensive language skills development",
      icon: <BookOpen className="w-6 h-6" />,
      points: [
        "Guided practice in reading, writing, and comprehension",
        "Teach pupils to speak and write correctly using proper tenses",
        "Build word, sentence, and text-level understanding",
        "Address confusing words and improve comprehension skills",
        "Use worksheets and varied texts to boost creativity and lasting results"
      ]
    },
    {
      title: "Science",
      description: "Engaging, age-appropriate scientific exploration",
      icon: <Microscope className="w-6 h-6" />,
      points: [
        "Engaging, age-appropriate lessons that nurture curiosity",
        "Hands-on activities and explanations for elementary and middle school learners",
        "Focus on building a deep understanding of core concepts"
      ]
    },
    {
      title: "Handwriting",
      description: "Patient guidance for confident writing skills",
      icon: <PenTool className="w-6 h-6" />,
      points: [
        "Patient guidance to improve penmanship and writing confidence",
        "Strategies for early writers and pupils needing extra support",
        "Build fluency for effective written communication"
      ]
    }
  ];

  const specialSupport = {
    title: "Special Educational Needs (SEN) Support",
    description: "Personalized strategies for diverse learning needs",
    icon: <Heart className="w-6 h-6" />,
    points: [
      "Personalized teaching strategies for learners with dyslexia, autism, or other SEN needs",
      "Reading intervention support for early readers and struggling pupils",
      "Focus on confidence, curiosity, and individual strengths",
      "Proven methods to help learners read fluently, spell confidently, and excel in comprehension"
    ]
  };

  const teachingPhilosophy = [
    {
      title: "Tailored Approach",
      description: "Lessons are tailored, interactive, and focused on long-term academic growth",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Patient Support",
      description: "Patient, personalized support for every child",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Confidence Building",
      description: "Build confidence, curiosity, and essential skills for academic success",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Experience",
      description: "Experienced in leading and teaching early years education",
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <CurriculumHero />

        {/* Introduction */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div
              ref={introRef}
              className="max-w-3xl mx-auto text-center mb-16 opacity-0"
            >
              <p className="body-large text-foreground/80 leading-relaxed">
                I'm an experienced online tutor passionate about helping children succeed and build confidence in their learning. 
                I work with <strong className="text-primary">early years, elementary, and middle school students</strong>, 
                offering tailored lessons in a variety of subjects.
              </p>
            </div>

            {/* Core Subjects Grid */}
            <div className="mb-20">
              <div
                ref={coreSubjectsRef}
                className="text-center mb-12 opacity-0"
              >
                <h2 className="heading-section text-primary mb-4">Core Subjects</h2>
                <p className="body-regular text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive learning across essential academic areas
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {coreSubjects.map((subject, index) => (
                  <SubjectCard
                    key={subject.title}
                    title={subject.title}
                    description={subject.description}
                    points={subject.points}
                    index={index}
                    icon={subject.icon}
                  />
                ))}
              </div>
            </div>

            <Separator className="my-16" />

            {/* SEN Support Section */}
            <div className="mb-20">
              <div
                ref={senSupportRef}
                className="text-center mb-12 opacity-0"
              >
                <h2 className="heading-section text-primary mb-4">Specialized Support</h2>
                <p className="body-regular text-muted-foreground max-w-2xl mx-auto">
                  Dedicated support for children with special educational needs
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <SubjectCard
                  title={specialSupport.title}
                  description={specialSupport.description}
                  points={specialSupport.points}
                  index={0}
                  icon={specialSupport.icon}
                />
              </div>
            </div>

            <Separator className="my-16" />

            {/* Teaching Philosophy */}
            <div className="mb-20">
              <div
                ref={philosophyRef}
                className="text-center mb-12 opacity-0"
              >
                <h2 className="heading-section text-primary mb-4">Teaching Philosophy</h2>
                <p className="body-regular text-muted-foreground max-w-2xl mx-auto">
                  My approach to nurturing young minds and fostering academic success
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {teachingPhilosophy.map((item, index) => (
                  <div
                    key={item.title}
                    className="flex items-start space-x-4 p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-md hover:-translate-y-1 animate-slide-in-left"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="heading-card text-primary mb-2">{item.title}</h3>
                      <p className="body-regular text-foreground/80">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Me Section */}
            <div className="mb-20">
              <div
                ref={whyChooseRef}
                className="text-center mb-12 opacity-0"
              >
                <h2 className="heading-section text-primary mb-4">Why Choose Me?</h2>
              </div>

              <div className="max-w-3xl mx-auto bg-card/30 rounded-2xl p-8 border border-border/50 animate-bounce-in">
                <ul className="space-y-4">
                  {[
                    "Years of hands-on experience in both online tutoring and preschool leadership",
                    "Strong record of helping children make measurable progress",
                    "Support for early years through middle school learners",
                    "Individualized approach that meets diverse learning needs"
                  ].map((point, index) => (
                    <li
                      key={index}
                      className="flex items-start space-x-3 group animate-slide-in-left"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-2 h-2 rounded-full bg-secondary mt-2 transition-all duration-300 group-hover:bg-primary"></div>
                      <span className="body-regular text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Call to Action Quote */}
            <CalloutQuote />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CurriculumPage;