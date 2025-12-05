"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationLinks = [
    { href: "/services", label: "Services" },
    { href: "/curriculum", label: "Curriculum" },
    { href: "/consultation", label: "Consultation" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    // { href: "/login", label: "Login" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "glassmorphic-header border-b border-white/10"
          : "border-b header-footer-theme"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link
            href="/"
            className={`text-2xl font-bold transition-all duration-300 hover:scale-105 font-figtree ${
              isScrolled
                ? "text-primary hover:text-accent dark:text-header-footer-text dark:hover:text-accent"
                : "text-primary hover:text-accent"
            }`}
          >
            RichBlend Consult
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded-sm px-2 py-1 font-inter ${
                isScrolled
                  ? "text-bloomwise-dark hover:text-accent dark:text-header-footer-text dark:hover:text-accent"
                  : "text-header-footer-text hover:text-accent"
              }`}
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
              className={`h-10 w-10 focus:ring-2 focus:ring-primary ${
                isScrolled
                  ? "text-bloomwise-dark hover:text-accent dark:text-header-footer-text dark:hover:text-accent"
                  : "text-header-footer-text hover:text-accent"
              }`}
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col space-y-4 mt-8">
              <div className="text-lg font-semibold text-primary mb-4 font-figtree">
                Navigation
              </div>
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-foreground hover:text-primary transition-colors duration-200 py-3 px-4 rounded-lg font-inter"
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
