"use client";

import { useEffect, useState } from "react";
import BestSellers from "@/components/BestSeller";
import FeaturesSection from "@/components/FeaturedSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import PromoBanner from "@/components/PromoBanner";
import ServicesSection from "@/components/ServiceSection";

export default function Page() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setIsLoaded(true);
      document.body.style.overflow = "auto";
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={`${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}>
      <Hero isLoaded={isLoaded} />
      <BestSellers />
      <Marquee />
      <ServicesSection />
      <FeaturesSection />
      <PromoBanner />
      <Footer />
    </main>
  );
}
