"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Mail,
  User,
  Calendar,
  MessageSquare,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  contactSchema,
  type ContactFormValues,
  SUBJECTS,
} from "@/lib/validations/contactSchema";

interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      child_age: undefined,
      subjects: [],
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setSubmitStatus("success");
        form.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleSubject = (subject: string) => {
    const currentSubjects = form.getValues("subjects");
    const newSubjects = currentSubjects.includes(subject)
      ? currentSubjects.filter((s) => s !== subject)
      : [...currentSubjects, subject];

    form.setValue("subjects", newSubjects);
    form.trigger("subjects");
  };

  const selectedSubjects = form.watch("subjects");
  const messageLength = form.watch("message")?.length || 0;

  return (
    <Card className={`glass-card border-0 shadow-2xl hover-lift ${className}`}>
      <CardHeader className="text-center pb-6">
        <CardTitle className="heading-card text-primary mb-2">
          Get in Touch
        </CardTitle>
        <CardDescription className="body-regular text-muted-foreground max-w-md mx-auto">
          Ready to help your child succeed? Send us a message and we&apos;ll get
          back to you within 24 hours.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Field */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="animate-fade-in-up">
                  <FormLabel className="flex items-center gap-2 accent-text">
                    <User className="w-4 h-4 text-primary" />
                    Parent/Guardian Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your full name"
                      className="hover-lift transition-all duration-300 focus:scale-[1.02]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="animate-slide-in-left" />
                </FormItem>
              )}
            />

            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem
                  className="animate-fade-in-up"
                  style={{ animationDelay: "0.1s" }}
                >
                  <FormLabel className="flex items-center gap-2 accent-text">
                    <Mail className="w-4 h-4 text-primary" />
                    Email Address
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      className="hover-lift transition-all duration-300 focus:scale-[1.02]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="animate-slide-in-left" />
                </FormItem>
              )}
            />

            {/* Child Age Field */}
            <FormField
              control={form.control}
              name="child_age"
              render={({ field }) => (
                <FormItem
                  className="animate-fade-in-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  <FormLabel className="flex items-center gap-2 accent-text">
                    <Calendar className="w-4 h-4 text-primary" />
                    Child&apos;s Age
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min="3"
                      max="18"
                      placeholder="Enter child's age"
                      className="hover-lift transition-all duration-300 focus:scale-[1.02]"
                      {...field}
                      onChange={(e) =>
                        field.onChange(
                          e.target.value ? parseInt(e.target.value) : undefined
                        )
                      }
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormDescription className="text-xs text-muted-foreground">
                    Age range: 3-18 years
                  </FormDescription>
                  <FormMessage className="animate-slide-in-left" />
                </FormItem>
              )}
            />

            {/* Subjects Field */}
            <FormField
              control={form.control}
              name="subjects"
              render={() => (
                <FormItem
                  className="animate-fade-in-up"
                  style={{ animationDelay: "0.3s" }}
                >
                  <FormLabel className="accent-text">
                    Subjects of Interest
                  </FormLabel>
                  <FormDescription className="text-sm text-muted-foreground mb-3">
                    Select all subjects you&apos;re interested in for your child
                  </FormDescription>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {SUBJECTS.map((subject) => (
                      <Button
                        key={subject}
                        type="button"
                        variant={
                          selectedSubjects.includes(subject)
                            ? "default"
                            : "outline"
                        }
                        size="sm"
                        onClick={() => toggleSubject(subject)}
                        className={`transition-all duration-300 hover-scale ${
                          selectedSubjects.includes(subject)
                            ? "bg-primary text-primary-foreground shadow-lg"
                            : "hover:bg-primary/10 hover:text-primary hover:border-primary"
                        }`}
                      >
                        {subject}
                      </Button>
                    ))}
                  </div>
                  <FormMessage className="animate-slide-in-left" />
                </FormItem>
              )}
            />

            {/* Message Field */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem
                  className="animate-fade-in-up"
                  style={{ animationDelay: "0.4s" }}
                >
                  <FormLabel className="flex items-center gap-2 accent-text">
                    <MessageSquare className="w-4 h-4 text-primary" />
                    Message
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your child's learning goals, any specific challenges, or questions you have about our tutoring services..."
                      className="min-h-32 hover-lift transition-all duration-300 focus:scale-[1.01] resize-none"
                      {...field}
                    />
                  </FormControl>
                  <div className="flex justify-between items-center">
                    <FormDescription className="text-xs text-muted-foreground">
                      Share any specific learning goals or challenges
                    </FormDescription>
                    <span
                      className={`text-xs transition-colors duration-300 ${
                        messageLength > 900
                          ? "text-destructive"
                          : messageLength > 800
                          ? "text-accent"
                          : "text-muted-foreground"
                      }`}
                    >
                      {messageLength}/1000
                    </span>
                  </div>
                  <FormMessage className="animate-slide-in-left" />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <div
              className="pt-4 animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full gradient-primary text-white hover:shadow-xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </div>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="flex items-center gap-2 p-4 bg-secondary/10 border border-secondary/20 rounded-lg text-secondary animate-bounce-in">
                <CheckCircle className="w-5 h-5" />
                <span className="body-regular">
                  Thank you! Your message has been sent successfully. We&apos;ll
                  get back to you within 24 hours.
                </span>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="flex items-center gap-2 p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive animate-bounce-in">
                <AlertCircle className="w-5 h-5" />
                <span className="body-regular">
                  Sorry, there was an error sending your message. Please try
                  again or contact us directly.
                </span>
              </div>
            )}
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
