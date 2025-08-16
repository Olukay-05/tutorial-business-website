"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Check if we're in the browser
    if (typeof window !== "undefined") {
      // Check for saved theme in localStorage
      const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
      // Check for system preference
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      
      // Use saved theme, or system preference, or default to light
      const initialTheme = savedTheme || systemTheme;
      
      setTheme(initialTheme);
      
      // Apply theme to document
      if (initialTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    
    // Apply theme to document
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    // Save to localStorage
    localStorage.setItem("theme", newTheme);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="rounded-full hover:bg-accent/10 transition-all duration-300 hover:scale-110"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 transition-all duration-300 hover:text-accent hover:rotate-180" />
      ) : (
        <Moon className="h-5 w-5 transition-all duration-300 hover:text-accent hover:-rotate-12" />
      )}
    </Button>
  );
}