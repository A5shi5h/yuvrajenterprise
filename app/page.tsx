"use client";

import BestSellers from "@/components/BestSeller";
import FeaturesSection from "@/components/FeaturedSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Navbar from "@/components/Navbar";
import PromoBanner from "@/components/PromoBanner";
import ServicesSection from "@/components/ServiceSection";
import { useEffect, useState } from "react";


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

   return(
    <>
     <Navbar isLoaded={isLoaded} />
     <Hero isLoaded={isLoaded} />
     <BestSellers />
     <Marquee />
     <ServicesSection />
     <FeaturesSection />
     <PromoBanner />
     <Footer />
    </>
   ); 
}