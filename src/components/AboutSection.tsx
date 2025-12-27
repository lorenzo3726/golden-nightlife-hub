import { Music, Users, GlassWater } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: GlassWater,
      title: 'Drink d\'Autore',
      description: 'Cocktail classici e creazioni originali. Ogni sorso racconta una storia.',
    },
    {
      icon: Music,
      title: 'Sound Notturno',
      description: 'La playlist giusta per ogni momento. Mai troppo alta, mai troppo bassa.',
    },
    {
      icon: Users,
      title: 'Gente Vera',
      description: 'Un posto dove tornare. Perché qui trovi sempre facce amiche.',
    },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <span className="text-primary text-sm uppercase tracking-[0.3em] mb-4 block">
                Il Nostro Mondo
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                Il Golden Bar
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Non siamo un locale qualsiasi. Siamo il posto dove la notte prende forma, 
                dove ogni drink è un invito e ogni serata un capitolo da ricordare.
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Nel cuore di Galatina, lontano dal caos ma vicino a tutto quello che conta. 
              Un ambiente curato ma mai pretenzioso, dove sentirti a casa anche se è la prima volta.
            </p>

            {/* Features */}
            <div className="space-y-6 pt-4">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto">
              {/* Decorative Border */}
              <div className="absolute inset-0 border-2 border-primary/20 rounded-2xl transform rotate-3" />
              <div className="absolute inset-0 border-2 border-primary/10 rounded-2xl transform -rotate-3" />
              
              {/* Main Box */}
              <div className="relative h-full card-glass rounded-2xl p-8 flex flex-col justify-center items-center text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 glow-gold-subtle">
                  <span className="text-4xl font-serif font-bold text-primary">G</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Dal 2018
                </h3>
                <p className="text-muted-foreground">
                  Anni di serate, storie e drink perfetti. E questo è solo l'inizio.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-border w-full">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">100+</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">Cocktail</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">7</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">Anni</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">∞</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">Notti</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
