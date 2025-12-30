import { motion } from 'framer-motion';
import drinkTropical from '@/assets/drink-tropical.jpg';

const drink1 = "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80";
const drink2 = "https://images.unsplash.com/photo-1575037614876-c38a4d44f5b8?auto=format&fit=crop&w=800&q=80";

const DrinksSection = () => {
  const drinks = [
    {
      image: drink1,
      name: 'Golden Nights',
      mood: 'Per chi ama il classico',
      description: 'Whiskey, storia e carattere. Un drink che parla da solo.',
    },
    {
      image: drink2,
      name: 'Birre Artigianali',
      mood: 'Per chi cerca l\'autenticità',
      description: 'Selezione curata di birre speciali. Ogni sorso, un viaggio.',
    },
    {
      image: drinkTropical,
      name: 'Tropical Mood',
      mood: 'Per chi vuole osare',
      description: 'Colore, freschezza e un tocco di follia. Estate tutto l\'anno.',
    },
  ];

  return (
    <section id="drinks" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm uppercase tracking-wider mb-4 block">
            Per chi ha sete
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            La nostra selezione
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Dalla birra artigianale ai cocktail classici, scegli il tuo preferito.
          </p>
        </div>

        {/* Drinks Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {drinks.map((drink, index) => (
            <motion.div
              key={drink.name}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -10,
                rotateX: 5,
                rotateY: 5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              style={{ perspective: 1000 }}
            >
              <div className="card-glass rounded-2xl overflow-hidden transition-all duration-500 hover:glow-gold-subtle">
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={drink.image}
                    alt={drink.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 relative -mt-16">
                  <span className="text-primary/80 text-xs uppercase tracking-widest">
                    {drink.mood}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mt-2 mb-3">
                    {drink.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {drink.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground">
            Passa a trovarci al bancone!
          </p>
        </div>
      </div>
    </section>
  );
};

export default DrinksSection;
