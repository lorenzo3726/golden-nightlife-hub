import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import GoldenHourSection from '@/components/GoldenHourSection';
import AboutSection from '@/components/AboutSection';
import DrinksSection from '@/components/DrinksSection';
import LocationSection from '@/components/LocationSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <GoldenHourSection />
      <AboutSection />
      <DrinksSection />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Index;
