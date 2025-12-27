import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const scrollToGoldenHour = () => {
    const element = document.querySelector('#golden-hour');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-px h-32 bg-gradient-to-b from-transparent via-primary/50 to-transparent hidden md:block" />
      <div className="absolute top-1/3 right-10 w-px h-48 bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden md:block" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Pre-title */}
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="inline-block text-primary/80 text-sm md:text-base uppercase tracking-[0.3em] font-medium">
              Galatina • Lecce
            </span>
          </div>

          {/* Main Title */}
          <h1 
            className="opacity-0 animate-fade-in text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight"
            style={{ animationDelay: '0.4s' }}
          >
            <span className="text-foreground">La Notte Inizia al</span>
            <br />
            <span className="text-primary">Golden Bar</span>
          </h1>

          {/* Subtitle */}
          <p 
            className="opacity-0 animate-fade-in text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            style={{ animationDelay: '0.6s' }}
          >
            Dove ogni sera diventa un ricordo. 
            Drink, musica e la compagnia giusta sotto le luci dorate.
          </p>

          {/* CTA */}
          <div 
            className="opacity-0 animate-fade-in flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            style={{ animationDelay: '0.8s' }}
          >
            <Button 
              variant="golden" 
              size="xl"
              onClick={scrollToGoldenHour}
              className="min-w-[200px]"
            >
              Scopri la Golden Hour
            </Button>
            <Button 
              variant="golden-outline" 
              size="xl"
              onClick={() => document.querySelector('#drinks')?.scrollIntoView({ behavior: 'smooth' })}
              className="min-w-[200px]"
            >
              I Nostri Drink
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '1.2s' }}>
        <button 
          onClick={scrollToGoldenHour}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-widest">Scorri</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
