import { Instagram, Facebook, Music2 } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Music2, href: '#', label: 'Spotify' },
  ];

  return (
    <footer className="relative py-16 border-t border-border">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/5 blur-3xl" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Logo */}
          <h2 className="text-3xl font-serif font-bold text-primary">
            GOLDEN BAR
          </h2>

          {/* Tagline */}
          <p className="text-lg md:text-xl font-serif italic text-muted-foreground max-w-md">
            "Perché la notte migliore è sempre quella che stai per vivere."
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

          {/* Bottom Info */}
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>Galatina (LE) • Salento • Puglia</p>
            <p>© {new Date().getFullYear()} Golden Bar. Tutti i diritti riservati.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
