import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import WhoWeAreSection from "../components/WhoWeAreSection";
import WhatWeDoSection from "../components/WhatWeDoSection";
import HowWeWorkSection from "../components/HowWeWorkSection";
import FlowOutlineSection from "../components/FlowOutlineSection";
import WhoWeWorkWithSection from "../components/WhoWeWorkWithSection";
import WhyCognitiveSideSection from "../components/WhyCognitiveSideSection";
import FAQSection from "../components/FAQSection";
import ClosingSection from "../components/ClosingSection";
import Footer from "../components/Footer";
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <WhoWeAreSection />
        <WhatWeDoSection />
        <HowWeWorkSection />
        <FlowOutlineSection />
        <WhoWeWorkWithSection />
        <WhyCognitiveSideSection />
        <FAQSection />
        <ClosingSection />
      </main>
      <Footer />
    </div>
  );
};
export default Index;
