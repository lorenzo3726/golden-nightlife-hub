import { Clock, Calendar, Sparkles } from 'lucide-react';

const GoldenHourSection = () => {
  return (
    <section id="golden-hour" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-primary text-sm uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4" />
            L'Ora più Attesa
            <Sparkles className="w-4 h-4" />
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Golden Hour
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Il momento perfetto per rilassarsi tra amici e iniziare bene la serata.
          </p>
        </div>

        {/* Main Card */}
        <div className="max-w-3xl mx-auto">
          <div className="card-glass rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Corner Decorations */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/30 rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary/30 rounded-br-2xl" />

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* When */}
              <div className="text-center md:text-left space-y-4">
                <div className="inline-flex items-center gap-3 text-primary">
                  <Calendar className="w-6 h-6" />
                  <span className="text-sm uppercase tracking-widest font-semibold">Quando</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                  Martedì & Giovedì
                </h3>
                <p className="text-muted-foreground">
                  Le serate giuste per staccare un po'.
                </p>
              </div>

              {/* Time */}
              <div className="text-center md:text-left space-y-4">
                <div className="inline-flex items-center gap-3 text-primary">
                  <Clock className="w-6 h-6" />
                  <span className="text-sm uppercase tracking-widest font-semibold">Orario</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                  23:00 – 00:00
                </h3>
                <p className="text-muted-foreground">
                  Un'ora per goderci la serata insieme.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="my-8 md:my-12 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            {/* Tagline */}
            <div className="text-center">
              <p className="text-xl md:text-2xl font-medium text-primary/90">
                "Niente di meglio di una buona compagnia e del drink giusto."
              </p>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="hidden md:block">
          <div className="absolute left-[10%] top-1/3 w-2 h-2 bg-primary rounded-full animate-pulse" />
          <div className="absolute right-[15%] top-1/2 w-3 h-3 bg-primary/50 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute left-[20%] bottom-1/4 w-2 h-2 bg-primary/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>
    </section>
  );
};

export default GoldenHourSection;
