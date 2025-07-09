import React from "react";
import { NavigationHeader } from "./sections/NavigationHeader";
import { HeroSection } from "./sections/HeroSection";
import { FeaturedProductsSection } from "./sections/FeaturedProductsSection";
import { WhyChooseSection } from "./sections/WhyChooseSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { NewsletterSection } from "./sections/NewsletterSection";
import { QuickActionsSection } from "./sections/QuickActionsSection";
import { Footer } from "./sections/Footer";
import { FloatingWhatsApp } from "./sections/FloatingWhatsApp";

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white relative z-0">
      <NavigationHeader />
      <HeroSection />
      <FeaturedProductsSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <NewsletterSection />
      <QuickActionsSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Home;
