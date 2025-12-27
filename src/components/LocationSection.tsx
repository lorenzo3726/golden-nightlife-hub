import { MapPin, Clock, Phone } from 'lucide-react';

const LocationSection = () => {
  return (
    <section id="location" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm uppercase tracking-[0.3em] mb-4 block">
            Vieni a Trovarci
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Dove Siamo
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Info Cards */}
          <div className="space-y-6">
            {/* Address */}
            <div className="card-glass rounded-xl p-6 flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Indirizzo</h3>
                <p className="text-muted-foreground">
                  Centro Storico<br />
                  73013 Galatina (LE)<br />
                  Puglia, Italia
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="card-glass rounded-xl p-6 flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Orari</h3>
                <p className="text-muted-foreground">
                  Martedì – Domenica<br />
                  <span className="text-primary font-medium">20:00 – 02:00</span><br />
                  <span className="text-sm">Lunedì chiuso</span>
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="card-glass rounded-xl p-6 flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Contatti</h3>
                <p className="text-muted-foreground">
                  Seguici sui social o passa a trovarci.<br />
                  <span className="text-sm">La notte migliore è sempre la prossima.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="relative">
            <div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden border-glow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12240.284583982037!2d18.16!3d40.17!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134432e8c8e1b9e9%3A0x4b8b5a8f8f8f8f8f!2s73013%20Galatina%20LE%2C%20Italy!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Golden Bar Location"
              />
              {/* Overlay for styling */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/50 via-transparent to-transparent" />
            </div>

            {/* Location Badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card border border-primary/30 rounded-full px-6 py-2 glow-gold-subtle">
              <span className="text-sm font-medium text-primary">Galatina, Salento</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
