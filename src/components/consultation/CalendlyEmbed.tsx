"use client";

import { InlineWidget } from "react-calendly";
import { useEffect, useState } from "react";

interface CalendlyEmbedProps {
  url: string;
  className?: string;
}

// Create a loading component to match the expected LoadingSpinner type
const LoadingComponent = () => (
  <div className="flex items-center justify-center h-full">Loading...</div>
);

const CalendlyEmbed = ({ url, className = "" }: CalendlyEmbedProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div
        className={`w-full h-[700px] rounded-lg overflow-hidden ${className}`}
      >
        <div className="flex items-center justify-center h-full bg-gray-50 dark:bg-gray-900">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full h-[900px] rounded-lg overflow-hidden ${className}`}>
      <InlineWidget
        url={url}
        styles={{ height: "100%", width: "100%" }}
        LoadingSpinner={LoadingComponent}
      />
    </div>
  );
};

export default CalendlyEmbed;
