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

              <div className="prose prose-invert max-w-none space-y-6">
                <section>
                  <p className="body-large text-foreground mb-4">
                    <strong>Last updated:</strong> December 5, 2025
                  </p>
                  <p className="body-large text-foreground mb-4">
                    RichBlend Consult ("we", "us", or "our") operates the RichBlend Consult website and provides educational tutoring services.
                    We are committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use,
                    disclose, and safeguard your information when you visit our website and use our services.
                  </p>
                </section>

                <section>
                  <h2 className="heading-section text-primary mb-4">Information We Collect</h2>
                  <p className="body-regular text-foreground mb-4">
                    We collect information you provide directly to us when you:
                  </p>
                  <ul className="list-disc pl-6 mb-4 body-regular text-foreground space-y-2">
                    <li>Contact us through our website's contact form</li>
                    <li>Book a consultation or tutoring session</li>
                    <li>Subscribe to our newsletters or communications</li>
                    <li>Communicate with us via email or other means</li>
                  </ul>
                  
                  <h3 className="heading-card text-primary mt-4 mb-2">Types of Information Collected:</h3>
                  <ul className="list-disc pl-6 mb-4 body-regular text-foreground space-y-2">
                    <li><strong>Personal Information:</strong> Your name, email address, phone number</li>
                    <li><strong>Student Information:</strong> Your child's age, subjects of interest, educational needs</li>
                    <li><strong>Communication Information:</strong> Messages you send through our contact forms</li>
                    <li><strong>Technical Information:</strong> IP address, browser type, device information (collected automatically)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="heading-section text-primary mb-4">How We Use Your Information</h2>
                  <p className="body-regular text-foreground mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc pl-6 mb-4 body-regular text-foreground space-y-2">
                    <li>Provide and improve our tutoring services</li>
                    <li>Respond to your inquiries and requests</li>
                    <li>Communicate with you about our services</li>
                    <li>Personalize your child's learning experience</li>
                    <li>Process consultations and tutoring sessions</li>
                    <li>Send educational materials and updates (with your consent)</li>
                    <li>Improve our website and services</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="heading-section text-primary mb-4">How We Share Your Information</h2>
                  <p className="body-regular text-foreground mb-4">
                    We do not sell, trade, or rent your personal information to third parties. We may share your 
                    information with:
                  </p>
                  <ul className="list-disc pl-6 mb-4 body-regular text-foreground space-y-2">
                    <li><strong>Service Providers:</strong> Third-party vendors who help us operate our website and provide services 
                      (e.g., email service providers like Resend for sending confirmations)</li>
                    <li><strong>Legal Compliance:</strong> When required by law, court order, or to exercise our legal rights</li>
                    <li><strong>Protection of Rights:</strong> To protect our rights, property, or safety, and that of our users</li>
                  </ul>
                </section>

                <section>
                  <h2 className="heading-section text-primary mb-4">Data Security</h2>
                  <p className="body-regular text-foreground mb-4">
                    We implement appropriate security measures to protect your information against unauthorized access, 
                    alteration, disclosure, or destruction. These measures include:
                  </p>
                  <ul className="list-disc pl-6 mb-4 body-regular text-foreground space-y-2">
                    <li>Secure transmission protocols (HTTPS)</li>
                    <li>Restricted access to personal information</li>
                    <li>Regular security assessments</li>
                    <li>Secure data storage practices</li>
                  </ul>
                </section>

                <section>
                  <h2 className="heading-section text-primary mb-4">Data Retention</h2>
                  <p className="body-regular text-foreground mb-4">
                    We retain your personal information for as long as necessary to provide our services and comply with legal 
                    obligations. Generally, we retain:
                  </p>
                  <ul className="list-disc pl-6 mb-4 body-regular text-foreground space-y-2">
                    <li>Contact information for the duration of our relationship</li>
                    <li>Records of communication for up to 3 years after the relationship ends</li>
                    <li>Information required by law for the applicable retention period</li>
                  </ul>
                </section>

                <section>
                  <h2 className="heading-section text-primary mb-4">Your Rights</h2>
                  <p className="body-regular text-foreground mb-4">
                    Depending on your location, you may have the following rights regarding your personal information:
                  </p>
                  <ul className="list-disc pl-6 mb-4 body-regular text-foreground space-y-2">
                    <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate personal information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                    <li><strong>Restriction:</strong> Request restriction of processing of your personal information</li>
                    <li><strong>Portability:</strong> Request transfer of your personal information to another service</li>
                    <li><strong>Objection:</strong> Object to processing of your personal information</li>
                  </ul>
                  <p className="body-regular text-foreground mb-4">
                    To exercise these rights, please contact us using the information provided below.
                  </p>
                </section>

                <section>
                  <h2 className="heading-section text-primary mb-4">Children's Privacy</h2>
                  <p className="body-regular text-foreground mb-4">
                    Our services are not intended for children under the age of 13. We do not knowingly collect personal 
                    information from children under 13. When we collect information about children, it is provided by 
                    parents or guardians and we rely on parental consent for the collection and use of such information.
                  </p>
                  <p className="body-regular text-foreground mb-4">
                    If you believe we have collected information from a child under 13 without parental consent, 
                    please contact us immediately so we can take appropriate steps to delete the information.
                  </p>
                </section>

                <section>
                  <h2 className="heading-section text-primary mb-4">Cookies and Tracking Technologies</h2>
                  <p className="body-regular text-foreground mb-4">
                    Our website may use cookies and similar tracking technologies to enhance your experience. Cookies 
                    are small data files stored on your device. We use cookies to:
                  </p>
                  <ul className="list-disc pl-6 mb-4 body-regular text-foreground space-y-2">
                    <li>Remember your preferences</li>
                    <li>Analyze website performance</li>
                    <li>Provide personalized content</li>
                  </ul>
                  <p className="body-regular text-foreground mb-4">
                    You can control cookie settings through your browser preferences. However, disabling cookies may 
                    affect the functionality of our website.
                  </p>
                </section>

                <section>
                  <h2 className="heading-section text-primary mb-4">Third-Party Services</h2>
                  <p className="body-regular text-foreground mb-4">
                    We may use third-party services for specific functions, including:
                  </p>
                  <ul className="list-disc pl-6 mb-4 body-regular text-foreground space-y-2">
                    <li>Email delivery services (Resend API)</li>
                    <li>Video conferencing platforms for tutoring sessions</li>
                    <li>Payment processing services (if applicable)</li>
                  </ul>
                  <p className="body-regular text-foreground mb-4">
                    These third-party services may have their own privacy policies. We encourage you to review 
                    their privacy practices when using their services.
                  </p>
                </section>

                <section>
                  <h2 className="heading-section text-primary mb-4">International Data Transfers</h2>
                  <p className="body-regular text-foreground mb-4">
                    Your information may be transferred to and processed in countries other than your home country. 
                    We ensure that appropriate safeguards are in place to protect your personal information in 
                    accordance with applicable privacy laws.
                  </p>
                </section>

                <section>
                  <h2 className="heading-section text-primary mb-4">Changes to This Privacy Policy</h2>
                  <p className="body-regular text-foreground mb-4">
                    We may update this Privacy Policy periodically. When we make changes, we will update the "Last updated" 
                    date at the top of this policy. We encourage you to review this Privacy Policy regularly to stay 
                    informed about how we are protecting your information.
                  </p>
                  <p className="body-regular text-foreground mb-4">
                    Significant changes will be communicated through our website or other appropriate channels.
                  </p>
                </section>

                <section>
                  <h2 className="heading-section text-primary mb-4">Contact Us</h2>
                  <p className="body-regular text-foreground mb-4">
                    If you have questions about this Privacy Policy or concerns about how we handle your personal 
                    information, please contact us at:
                  </p>
                  <div className="bg-muted/20 p-4 rounded-lg border border-border">
                    <p className="body-regular text-foreground">
                      Email: richblendconsult@gmail.com<br />
                      Website: www.richblendconsult.com<br />
                      Attn: Privacy Officer
                    </p>
                  </div>
                  <p className="body-regular text-foreground mt-4">
                    We will respond to your request within a reasonable timeframe and in accordance with applicable privacy laws.
                  </p>
                </section>

                <section className="pt-4 border-t border-border">
                  <p className="body-regular text-muted-foreground italic">
                    This Privacy Policy was last updated on December 5, 2025. 
                    By continuing to use our services, you acknowledge that you have read, understood, 
                    and agree to be bound by this Privacy Policy.
                  </p>
                </section>
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