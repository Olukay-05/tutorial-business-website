"use client";

import React, { useEffect, useRef } from "react";

interface CalendlyEmbedProps {
  url?: string;
  className?: string;
}

const CalendlyEmbed: React.FC<CalendlyEmbedProps> = ({
  url = "https://calendly.com/richblendconsult",
  className = "",
}) => {
  // const calendlyRef = useRef<HTMLDivElement>(null);

  // <!-- Calendly inline widget begin -->
  // <div class="calendly-inline-widget" data-url="https://calendly.com/richblendconsult" style="min-width:320px;height:700px;"></div>
  // <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
  // <!-- Calendly inline widget end -->

  useEffect(() => {
    // Dynamically load Calendly script for performance
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;

    // The script will automatically initialize widgets with data-url attributes
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      );
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div
      className={`calendly-inline-widget ${className}`}
      data-url={url}
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    Calendly: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
        prefill: Record<string, any>;
        utm: Record<string, any>;
      }) => void;
    };
  }
}

export default CalendlyEmbed;
