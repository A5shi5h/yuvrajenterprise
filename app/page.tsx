import BestSellers from "@/components/BestSeller";
import FeaturesSection from "@/components/FeaturedSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PromoBanner from "@/components/PromoBanner";


export default function Page() {
   return(
    <>
     <Navbar />
     <Hero />
     <BestSellers />
     <PromoBanner />
     <FeaturesSection />
     <Footer />
    </>
   ); 
}