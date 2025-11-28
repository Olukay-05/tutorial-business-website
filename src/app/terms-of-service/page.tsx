"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-8">
              <h1 className="heading-hero text-primary mb-8 text-center">Terms of Service</h1>
              
              <div className="prose prose-invert max-w-none">
                <p className="body-large text-foreground mb-6">
                  These terms of service govern your use of the Bloomwise Tutoring website and services.
                </p>
                
                <h2 className="heading-section text-primary mb-4 mt-8">Use of Service</h2>
                <p className="body-regular text-foreground mb-4">
                  The tutoring services are provided for educational purposes. You agree to use these services in a 
                  manner that complies with all applicable laws and regulations.
                </p>
                
                <h2 className="heading-section text-primary mb-4 mt-8">Tutoring Services</h2>
                <p className="body-regular text-foreground mb-4">
                  Our tutoring services are designed to supplement your child&apos;s education. Results may vary based on 
                  individual student needs, commitment, and other factors outside our control.
                </p>
                
                <h2 className="heading-section text-primary mb-4 mt-8">Payment and Cancellation</h2>
                <p className="body-regular text-foreground mb-4">
                  Payment for tutoring services is due in advance. Cancellation policies will be communicated at the 
                  time of booking. Late cancellations or no-shows may incur fees.
                </p>
                
                <h2 className="heading-section text-primary mb-4 mt-8">Limitation of Liability</h2>
                <p className="body-regular text-foreground mb-4">
                  Bloomwise Tutoring shall not be liable for any indirect, incidental, or consequential damages arising 
                  from the use of our services. Our liability is limited to the amount paid for the services.
                </p>
                
                <h2 className="heading-section text-primary mb-4 mt-8">Changes to Terms</h2>
                <p className="body-regular text-foreground mb-4">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon 
                  posting to our website.
                </p>
                
                <p className="body-regular text-foreground mt-8 text-muted-foreground">
                  Last updated: November 28, 2025.
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