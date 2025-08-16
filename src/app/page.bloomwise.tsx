'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/homepage/Hero';
import ServicesOverview from '@/components/homepage/ServicesOverview';
import TutorProfile from '@/components/homepage/TutorProfile';
import Testimonials from '@/components/homepage/Testimonials';

export default function BloomwiseHomepage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ServicesOverview />
        <TutorProfile />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}