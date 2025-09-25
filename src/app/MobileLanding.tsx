"use client";
import React from "react";
import "./MobileLanding.css";
import Hero from "@/components/sections/Hero/Hero";
import Features from "@/components/sections/Features/Features";
import HowItWorks from "@/components/sections/How-it-works/HowItWorks";
import Testimonials from "@/components/sections/Testimonials/Testimonials";
import Waitlist from "@/components/sections/Waitlist/Waitlist";
import Footer from "@/components/sections/Footer/Footer";
import Navbar from "@/components/sections/Navbar/Navbar";

const MobileLanding: React.FC = () => {
  return (
    <div className="mobile-container">
      <Navbar />
      <main className="body-container" role="main">
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
};

export default MobileLanding;
