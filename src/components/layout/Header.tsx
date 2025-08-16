"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationLinks = [
    { href: "/services", label: "Services" },
    { href: "/book-consultation", label: "Book a Consultation" },
    { href: "/contact", label: "Contact" },
    { href: "/login", label: "Login" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link
            href="/"
            className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity"
            style={{ fontFamily: "var(--font-figtree)" }}
          >
            Bloomwise Tutoring
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-2 py-1"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {link.label}
            </Link>
          ))}
          {/* Theme Toggle for Desktop */}
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 focus:ring-2 focus:ring-primary"
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col space-y-4 mt-8">
              <div
                className="text-lg font-semibold text-primary mb-4"
                style={{ fontFamily: "var(--font-figtree)" }}
              >
                Navigation
              </div>
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-foreground hover:text-primary transition-colors duration-200 py-3 px-4 rounded-lg hover:bg-card focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  style={{ fontFamily: "var(--font-inter)" }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              {/* Theme Toggle for Mobile */}
              <div className="pt-4">
                <ThemeToggle />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
