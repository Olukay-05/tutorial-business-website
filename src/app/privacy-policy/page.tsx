"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-8">
              <h1 className="heading-hero text-primary mb-8 text-center">Privacy Policy</h1>
              
              <div className="prose prose-invert max-w-none">
                <p className="body-large text-foreground mb-6">
                  At Bloomwise Tutoring, we value your privacy and are committed to protecting your personal information.
                </p>
                
                <h2 className="heading-section text-primary mb-4 mt-8">Information We Collect</h2>
                <p className="body-regular text-foreground mb-4">
                  We collect information you provide directly to us, such as when you contact us, register for services, 
                  or communicate with us. This may include your name, email address, phone number, and information 
                  about your child&apos;s educational needs.
                </p>
                
                <h2 className="heading-section text-primary mb-4 mt-8">How We Use Your Information</h2>
                <p className="body-regular text-foreground mb-4">
                  We use the information we collect to provide and improve our tutoring services, communicate with you, 
                  and personalize your child&apos;s learning experience. We do not share your information with third parties 
                  except as necessary to provide our services.
                </p>
                
                <h2 className="heading-section text-primary mb-4 mt-8">Data Security</h2>
                <p className="body-regular text-foreground mb-4">
                  We implement appropriate security measures to protect your information against unauthorized access, 
                  alteration, disclosure, or destruction.
                </p>
                
                <h2 className="heading-section text-primary mb-4 mt-8">Contact Us</h2>
                <p className="body-regular text-foreground mb-4">
                  If you have any questions about this privacy policy, please contact us at info@bloomwisetutoring.com.
                </p>
                
                <p className="body-regular text-foreground mt-8 text-muted-foreground">
                  This policy is effective as of November 28, 2025.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-8 text-center">
            <Link href="/" className="text-primary hover:underline text-sm">
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}