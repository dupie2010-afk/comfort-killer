import { motion, useScroll, useTransform } from "framer-motion";
import { Link, createFileRoute } from "@tanstack/react-router";
import { 
  ChevronRight, 
  ArrowRight,
  Users,
  Zap,
  Skull,
  TrendingUp,
  Target
} from "lucide-react";
import { useRef } from "react";

export const Route = createFileRoute("/")({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        title: "WAKE UP OR STAY WEAK | COMFORT KILLER",
      },
    ],
    links: [
      {
        rel: "preload",
        as: "image",
        href: "https://images.unsplash.com/photo-1550341133-bd99d01ad099?auto=format&fit=crop&q=80&w=1200",
      },
    ],
  }),
});

function RouteComponent() {
  return (
    <div className="bg-black text-white selection:bg-brand-red selection:text-white overflow-x-hidden font-sans antialiased">
      <Hero />
      <ProtocolSection />
      <TestimonialSection />
      <MovementSection />
      <FinalCTA />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden pt-20 bg-black">
      {/* Background Image - Static for instant load */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center grayscale contrast-125 opacity-40 pointer-events-none"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1550341133-bd99d01ad099?auto=format&fit=crop&q=80&w=1200')",
        }}
      />
      
      {/* Cinematic Overlays - Static */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,0,0,0.25)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-noise opacity-[0.08]" />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-5xl mx-auto">
          {/* Main Content - No animations for instant visibility */}
          <div className="flex flex-col items-center text-center -mt-12 md:-mt-8">
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <div className="h-px w-6 md:w-8 bg-brand-red" />
              <span className="text-brand-red font-black tracking-[0.5em] uppercase text-[10px] md:text-xs">
                System Override Active
              </span>
              <div className="h-px w-6 md:w-8 bg-brand-red" />
            </div>
            
            <h1 className="text-[15vw] md:text-[10vw] font-black leading-[0.8] tracking-tighter uppercase mb-8 md:mb-10 italic">
              WAKE <span className="text-brand-red text-glow">UP</span> <br />
              <span className="relative">
                OR STAY <br />
                <span className="bg-brand-red px-3 md:px-4 py-0 not-italic text-black">WEAK.</span>
              </span>
            </h1>
            
            <p className="text-base md:text-2xl text-white/50 mb-10 md:mb-14 max-w-2xl mx-auto font-bold uppercase tracking-tight leading-snug">
              The world is designed to sedate you. <br />
              We are here to <span className="text-white italic">kill the comfort addiction.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full sm:w-auto">
              <Link 
                to="/products"
                className="group relative bg-white text-black px-10 md:px-14 py-5 md:py-7 font-black uppercase tracking-[0.2em] overflow-hidden transition-all hover:bg-brand-red hover:text-white text-sm md:text-base shadow-2xl"
              >
                <span className="relative z-10 flex items-center justify-center gap-4">
                  Enter Movement
                  <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </span>
              </Link>
              
              <button 
                onClick={() => document.getElementById('protocol')?.scrollIntoView({ behavior: 'smooth' })}
                className="group border border-white/10 bg-black/40 backdrop-blur-md text-white px-10 md:px-14 py-5 md:py-7 font-black uppercase tracking-[0.2em] hover:border-brand-red transition-all flex items-center justify-center gap-4 text-sm md:text-base"
              >
                Start Protocol
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProtocolSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);

  return (
    <section id="protocol" ref={containerRef} className="py-24 md:py-32 bg-black relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div style={{ scale }} className="relative group">
            <div className="absolute -inset-10 bg-brand-red/10 blur-[120px] rounded-full group-hover:bg-brand-red/20 transition-all duration-1000" />
            <motion.div 
              style={{ rotateY: rotate }}
              className="relative aspect-[4/5] glass p-1 border-white/5 bg-neutral-950 shadow-2xl overflow-hidden rounded-sm"
            >
              <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                 <Skull size={100} className="text-brand-red mb-12 opacity-80" />
                 <h3 className="text-5xl font-black uppercase tracking-tighter leading-none mb-6">
                    THE WAKE UP <br /> CALL
                 </h3>
                 <div className="h-1 w-16 bg-brand-red mb-8" />
                 <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40">
                    Protocol v1.0 // Operational Data
                 </p>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-10">
                <div className="flex justify-between items-end">
                    <div className="text-left">
                        <p className="text-brand-red font-black text-xs uppercase tracking-widest">Pricing</p>
                        <p className="text-2xl font-black tabular-nums text-white">$6.99</p>
                    </div>
                    <div className="text-right">
                        <p className="text-white/40 font-black text-[10px] uppercase tracking-widest">Type</p>
                        <p className="font-black text-white uppercase text-xs">Digital Asset</p>
                    </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <div className="space-y-12">
            <header>
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-brand-red font-black tracking-[0.6em] uppercase text-xs mb-6 block"
              >
                The Manifesto
              </motion.span>
              <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
                KILL THE <br />
                <span className="text-white/40 italic">AVERAGE</span>
              </h2>
            </header>

            <p className="text-xl md:text-2xl text-white/70 font-medium italic border-l-4 border-brand-red pl-8 py-2">
              "You are addicted to the safety of your own cages. We provide the explosives."
            </p>

            <div className="grid gap-8">
              <ProtocolFeature title="Neural Reprogramming" desc="Destroy the mental pathways that lead to hesitation and excuse." />
              <ProtocolFeature title="Visceral Accountability" desc="A system that doesn't care about your feelings, only your results." />
              <ProtocolFeature title="7-Day Extraction" desc="A brutal week of intentional discomfort to find your baseline." />
            </div>

            <div className="pt-8 flex flex-col sm:flex-row items-center gap-8">
              <a 
                href="https://payhip.com/b/3nePy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-brand-red text-white px-12 py-7 text-lg font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-[0_0_50px_rgba(139,0,0,0.4)] flex items-center justify-center gap-4"
              >
                Claim Access
                <ArrowRight size={24} />
              </a>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">
                Digital Delivery // Instant Sync
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProtocolFeature({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="group space-y-2">
      <h4 className="flex items-center gap-4 font-black uppercase tracking-widest text-lg">
        <div className="w-1 h-6 bg-brand-red transition-all group-hover:w-3" />
        {title}
      </h4>
      <p className="text-white/40 text-sm font-medium pl-10 max-w-md">{desc}</p>
    </div>
  );
}

function TestimonialSection() {
  const displayTestimonials = [
    {
      name: "Marcus T.",
      role: "Entrepreneur",
      content: "I was stuck in a six-figure job I hated, numbing myself with high-end restaurants and vacations. Wayne's protocol burned my safety net and forced me to actually live.",
    },
    {
      name: "Sarah J.",
      role: "Lead Designer",
      content: "The 7-Day Protocol is psychological warfare against your own laziness. I've never felt more exhausted and more alive at the same time.",
    },
    {
      name: "David K.",
      role: "Veteran",
      content: "Nobody is coming to save you. Those seven words changed everything. I stopped waiting for permission and started taking ground.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-charcoal relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8 md:gap-12">
          <div>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-6">
              VOICES OF <br />
              <span className="text-brand-red">THE AWAKENED</span>
            </h2>
            <p className="text-white/30 font-black uppercase tracking-[0.5em] text-[10px] md:text-xs">
              Verified Intel from the Front Lines
            </p>
          </div>
          <Link to="/products" className="group flex items-center gap-4 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] hover:text-brand-red transition-all border-b border-white/10 pb-2">
            See All Records
            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {displayTestimonials.map((t: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-black p-8 md:p-12 border border-white/5 relative group hover:border-brand-red/30 transition-all flex flex-col min-h-[350px] md:min-h-[400px]"
            >
              <div className="absolute top-0 right-0 p-6 md:p-8 text-brand-red/5 text-7xl md:text-8xl font-black select-none pointer-events-none italic">"</div>
              <div className="w-10 md:w-12 h-1 bg-brand-red mb-8 md:mb-10" />
              <p className="text-lg md:text-xl font-medium text-white/80 italic leading-relaxed flex-1">
                "{t.content}"
              </p>
              <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/5">
                <p className="text-white font-black uppercase tracking-widest text-xs md:text-sm mb-1">{t.name}</p>
                <p className="text-brand-red text-[10px] font-black uppercase tracking-widest">{t.role || 'Challenger'}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MovementSection() {
  return (
    <section className="py-24 md:py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,0,0,0.1),transparent_50%)] pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none italic">
              WE ARE <br />
              <span className="text-brand-red">DIFFERENT.</span>
            </h2>
            <p className="text-base md:text-2xl text-white/40 font-bold uppercase tracking-tight max-w-2xl mx-auto">
              Comfort Killer isn't a membership. It's an identification with the rare few who refuse to be tamed.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <StatBox icon={<Users size={28} />} value="15,402" label="OPERATIVES" />
          <StatBox icon={<Zap size={28} />} value="24/7" label="DISCIPLINE" />
          <StatBox icon={<TrendingUp size={28} />} value="82%" label="VELOCITY" />
          <StatBox icon={<Target size={28} />} value="0" label="EXCUSES" />
        </div>

        <div className="mt-20 md:mt-24 p-8 md:p-12 glass border-white/5 bg-neutral-900/40 relative group overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-brand-red group-hover:w-2 transition-all" />
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 text-center md:text-left">
                <div>
                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-2 md:mb-3">Join the Private Comms</h3>
                    <p className="text-white/40 text-[10px] md:text-sm font-medium uppercase tracking-widest leading-relaxed">Deployment orders sent daily via encrypted email.</p>
                </div>
                <Link 
                    to="/products"
                    className="bg-white text-black px-10 md:px-12 py-4 md:py-6 font-black uppercase tracking-widest hover:bg-brand-red hover:text-white transition-all w-full md:w-auto text-center text-sm md:text-base shadow-xl"
                >
                    Enlist Now
                </Link>
            </div>
        </div>
      </div>
    </section>
  );
}

function StatBox({ icon, value, label }: { icon: any, value: string, label: string }) {
  return (
    <div className="p-6 md:p-10 border border-white/5 bg-white/[0.02] flex flex-col items-center text-center group hover:border-brand-red/20 transition-all">
      <div className="text-brand-red mb-4 md:mb-6 group-hover:scale-110 transition-transform">{icon}</div>
      <div className="text-2xl md:text-4xl font-black tracking-tighter mb-1 md:mb-2">{value}</div>
      <div className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] text-white/30">{label}</div>
    </div>
  );
}

function FinalCTA() {
  return (
    <section className="relative py-32 md:py-48 flex flex-col items-center justify-center text-center overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/80 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-10" />
        <motion.div 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 4 }}
          viewport={{ once: true }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center grayscale opacity-30 contrast-125"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-[140px] font-black uppercase leading-[0.8] mb-8 md:mb-12 italic tracking-tighter">
            DIE <span className="text-white/20 italic">COMFORTABLE</span> <br />
            OR LIVE <span className="text-brand-red text-glow">DANGEROUS.</span>
          </h2>
          
          <p className="text-lg md:text-3xl text-white/60 mb-10 md:mb-16 font-black uppercase tracking-widest max-w-2xl mx-auto leading-tight">
            The decision is the only thing standing between you and the man you're supposed to be.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-8 items-center">
            <Link 
                to="/products"
                className="w-full md:w-auto bg-brand-red text-white px-12 md:px-16 py-6 md:py-8 text-xl md:text-2xl font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-[0_0_80px_rgba(139,0,0,0.5)] transform hover:scale-105 active:scale-95"
            >
                Burn the Safety Net
            </Link>
          </div>
          
          <div className="mt-16 md:mt-24 flex flex-wrap justify-center gap-x-8 md:gap-x-16 gap-y-4 md:gap-y-6 text-[8px] md:text-[10px] font-black uppercase tracking-[0.6em] text-white/20">
            <span className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-red" /> No Refunds</span>
            <span className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-red" /> No Excuses</span>
            <span className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-red" /> Total Commitment</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
