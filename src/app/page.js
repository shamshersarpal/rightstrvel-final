 

import AppDownload from "@/components/AppDownload";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TourSlider from "@/components/TourSlider"; 

export const metadata = {
  title: "Right travel | Home",
  description: "Affordable Custom Tours, Private Trips and Vacation Packages",
};

export default function Home() {
  return (
    <>
    
    <Header/>
    <HeroSection/>
    <TourSlider/> 
   <AppDownload/>
    <Footer/>
    
    </>
  );
}
