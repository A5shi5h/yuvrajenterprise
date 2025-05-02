import BestSellers from "@/components/BestSeller";
import FeaturesSection from "@/components/FeaturedSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Navbar from "@/components/Navbar";
import PromoBanner from "@/components/PromoBanner";
import ServicesSection from "@/components/ServiceSection";


export default function Page() {
   return(
    <>
     <Navbar />
     <Hero />
     <BestSellers />
     <Marquee />
     <ServicesSection />
     <FeaturesSection />
     <PromoBanner />
     <Footer />
    </>
   ); 
}