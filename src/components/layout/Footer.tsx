"use client";

import React from "react";
import { Separator } from "@/components/ui/separator";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

const Footer = () => {
  const contactInfo = [
    {
      icon: Mail,
      text: "info@bloomwisetutoring.com",
      href: "mailto:info@bloomwisetutoring.com",
    },
    { icon: Phone, text: "+234 803 827 7651", href: "tel:+2348038277651" },
    { icon: MapPin, text: "Lagos, Nigeria", href: "#" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  ];

  const legalLinks = [
    { href: "/privacy-policy", text: "Privacy Policy" },
    { href: "/terms-of-service", text: "Terms of Service" },
  ];

  return (
    <footer className="bg-bloomwise-dark text-bloomwise-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3
                className="text-2xl font-bold text-[#f59e0b] mb-4"
                style={{ fontFamily: "var(--font-figtree)" }}
              >
                Bloomwise Tutoring
              </h3>
              <p className="body-regular text-footer-text leading-relaxed max-w-md">
                Expert 11+ and SEN tutoring by Temitope Adeniyi. Personalized
                learning plans for confident, successful students.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center space-x-3 text-footer-text hover:text-bloomwise-cream transition-colors duration-200 group"
                  >
                    <IconComponent className="w-4 h-4 text-bloomwise-primary group-hover:text-bloomwise-success transition-colors duration-200" />
                    <span className="body-regular text-footer-text">
                      {contact.text}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4
              className="text-lg font-semibold text-bloomwise-cream"
              style={{ fontFamily: "var(--font-figtree)" }}
            >
              Quick Links
            </h4>
            <nav className="space-y-3">
              <a
                href="/services"
                className="block text-footer-text hover:text-bloomwise-cream transition-colors duration-200 body-regular"
              >
                Our Services
              </a>
              <a
                href="/about"
                className="block text-footer-text  hover:text-bloomwise-cream  transition-colors duration-200 body-regular"
              >
                About Temitope
              </a>
              <a
                href="/book-consultation"
                className="block text-footer-text  hover:text-bloomwise-cream transition-colors duration-200 body-regular"
              >
                Book Consultation
              </a>
              <a
                href="/testimonials"
                className="block text-footer-text hover:text-bloomwise-cream transition-colors duration-200 body-regular"
              >
                Testimonials
              </a>
              <a
                href="/contact"
                className="block text-footer-text hover:text-bloomwise-cream transition-colors duration-200 body-regular"
              >
                Contact Us
              </a>
            </nav>
          </div>

          {/* Social & Legal */}
          <div className="space-y-6">
            <h4
              className="text-lg font-semibold text-bloomwise-cream"
              style={{ fontFamily: "var(--font-figtree)" }}
            >
              Connect With Us
            </h4>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-bloomwise-cream/10 hover:bg-bloomwise-primary rounded-full flex items-center justify-center transition-colors duration-200 group"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-4 h-4 text-bloomwise-cream group-hover:text-bloomwise-cream" />
                  </a>
                );
              })}
            </div>

            {/* Legal Links */}
            <div className="space-y-3">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-footer-text hover:text-bloomwise-cream transition-colors duration-200 body-regular"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12">
          <Separator className="bg-border mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-footer-text body-regular text-center md:text-left">
              © 2025 Bloomwise Tutoring. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-footer-text">
              <span>Made with ❤️ for educational excellence</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
