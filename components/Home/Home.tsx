import React from "react";
import Navbar from "../Shared/Navigations/Navbar";
import Hero from "./Hero";
import Image from "next/image";
import Reviews from "./Reviews/Reviews";
import WhatYouGet from "./WhatYouGet";
import ExpertSupport from "./ExpertSupport";
import YourBussniessInsights from "./YourBussniessInsights";
import OurPartners from "./OurPartners";
import Resources from "./Resources";
import PricingPlans from "../PricingPlans/PricingPlans";
import Faq from "./Faq";
import Footer from "../Shared/Navigations/Footer";

const Home = () => {
  return (
    <main className="size-full bg-white-main">
      <div className="w-full relative h-[100dvh] bg-[url('/Assets/HeroBg.png')] bg-cover bg-center bg-no-repeat">
        <Navbar />
        <Hero />
        <div className="absolute bottom-0 left-0 w-full lg:inline-block hidden h-[150px]">
          <div className="relative size-full">
            <Image
              fill
              alt=""
              className="z-10 object-cover"
              src={"/Assets/wave.svg"}
            />
          </div>
        </div>
      </div>
      <Reviews />
      <WhatYouGet />
      <ExpertSupport />
      <YourBussniessInsights />
      <OurPartners />
      <Resources />
      <PricingPlans />
      <Faq />
      <Footer />
    </main>
  );
};

export default Home;
