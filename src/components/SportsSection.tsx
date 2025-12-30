import { Tv, Beer, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SportsSection = () => {
    return (
        <section id="sports" className="relative py-24 md:py-32 overflow-hidden bg-secondary/5">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="space-y-8">
                        <div>
                            <span className="text-primary text-sm uppercase tracking-wider mb-4 block">
                                Live Match Day
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                                Le Partite più Belle <br />
                                <span className="text-primary">in Diretta</span>
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                                Vieni a tifare con noi! Serie A, Champions e i grandi eventi sportivi in diretta sui nostri schermi.
                                Birra in mano e buona compagnia, non serve altro.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="card-glass p-6 rounded-xl space-y-3 group hover:border-primary/50 transition-colors">
                                <Tv className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                                <h3 className="font-bold text-xl text-foreground">Ti vedi tutto bene</h3>
                                <p className="text-sm text-muted-foreground">
                                    Alta definizione per non perdere nessun dettaglio dell'azione.
                                </p>
                            </div>

                            <div className="card-glass p-6 rounded-xl space-y-3 group hover:border-primary/50 transition-colors">
                                <Beer className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                                <h3 className="font-bold text-xl text-foreground">Birra e Tifo</h3>
                                <p className="text-sm text-muted-foreground">
                                    La birra perfetta per tifare la tua squadra del cuore.
                                </p>
                            </div>
                        </div>

                        <div className="pt-4">
                            <Button
                                variant="golden"
                                size="lg"
                                onClick={() => document.querySelector('#location')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Prenota un Tavolo
                            </Button>
                        </div>
                    </div>

                    {/* Graphical Element / "Poster" */}
                    <div className="relative">
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden card-glass border-glow flex items-center justify-center p-8 group">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-50" />

                            {/* Center Icon */}
                            <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                                <div className="w-24 h-24 rounded-full bg-background/50 border border-primary/30 flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(234,179,8,0.2)]">
                                    <Trophy className="w-10 h-10 text-primary animate-pulse" />
                                </div>

                                <div className="space-y-2">
                                    <h3 className="text-2xl font-bold text-foreground">
                                        Il Gioco Continua
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Seguici sui social per il calendario settimanale
                                    </p>
                                </div>
                            </div>

                            {/* Decorative lines */}
                            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                            <div className="absolute left-1/2 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SportsSection;
