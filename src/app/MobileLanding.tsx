"use client";
import React from "react";
import "./MobileLanding.css";
import { useRouter } from "next/navigation";
import Hero from "@/components/sections/Hero/Hero";
import Features from "@/components/sections/Features/Features";
import HowItWorks from "@/components/sections/How-it-works/HowItWorks";
import Testimonials from "@/components/sections/Testimonials/Testimonials";
import Waitlist from "@/components/sections/Waitlist/Waitlist";
import Footer from "@/components/sections/Footer/Footer";
import Navbar from "@/components/sections/Navbar/Navbar";

const MobileLanding: React.FC = () => {
  const router = useRouter();
  return (
    <div className="mobile-container">
      <Navbar />

      <div className="body-container">
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Waitlist />
        <Footer />
      </div>
    </div>
  );
};

export default MobileLanding;
