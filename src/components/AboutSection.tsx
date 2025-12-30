import { useState, useEffect, useRef } from 'react';
import { Music, Users, GlassWater } from 'lucide-react';

const AnimatedCounter = ({ end, duration = 2000, suffix = '' }: { end: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const animating = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animating.current) {
          animating.current = true;
          let startTime: number | null = null;

          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            setCount(Math.floor(progress * end));

            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };

          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={elementRef}>{count}{suffix}</span>;
};

const AboutSection = () => {
  const features = [
    {
      icon: GlassWater,
      title: 'Drink Buoni',
      description: 'Dai classici alle nostre invenzioni, qui non resti mai a secco.',
    },
    {
      icon: Music,
      title: 'Buona Musica',
      description: 'Sempre il sottofondo giusto, perfetto per parlare e rilassarsi.',
    },
    {
      icon: Users,
      title: 'Facce Amiche',
      description: 'Torni perché qui ti senti tra amici, ogni volta.',
    },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <span className="text-primary text-sm uppercase tracking-wider mb-4 block">
                Chi Siamo
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Passa al Golden
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Non siamo il solito bar. Siamo il posto giusto per bersi una cosa in tranquillità,
                fare due chiacchiere e godersi la serata.
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Siamo nel cuore di Galatina. Un ambiente alla mano dove ti senti a casa fin dal primo momento.
              Semplice, accogliente, vero.
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
                  <span className="text-4xl font-bold text-primary">G</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Sempre Qui
                </h3>
                <p className="text-muted-foreground">
                  Anni passati insieme, tra un drink e una risata. E non ci fermiamo mica!
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-border w-full">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">
                      <AnimatedCounter end={100} suffix="+" />
                    </div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">Cocktail</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">
                      <AnimatedCounter end={7} />
                    </div>
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
