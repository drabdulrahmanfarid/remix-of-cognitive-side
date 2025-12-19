import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import WhoWeAreSection from '../components/WhoWeAreSection';
import WhatWeDoSection from '../components/WhatWeDoSection';
import HowWeWorkSection from '../components/HowWeWorkSection';
import FlowOutlineSection from '../components/FlowOutlineSection';
import WhoWeWorkWithSection from '../components/WhoWeWorkWithSection';
import WhyGoldenfieldSection from '../components/WhyGoldenfieldSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ClosingSection from '../components/ClosingSection';
import Footer from '../components/Footer';

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
        <WhyGoldenfieldSection />
        <TestimonialsSection />
        <ClosingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
