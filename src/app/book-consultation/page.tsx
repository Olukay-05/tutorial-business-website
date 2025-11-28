"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function BookConsultationPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the main consultation page
    router.push("/consultation");
  }, [router]);

  return null; // This component won't render anything since it redirects
}