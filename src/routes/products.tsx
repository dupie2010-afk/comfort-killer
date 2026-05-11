import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";

export const Route = createFileRoute("/products")({
  component: ProductsPage,
});

function ProductsPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // Static handling
    setSubmitted(true);
    console.log("Subscription attempt (static):", email);
  };

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none">
            THE <span className="text-brand-red">ARMORY</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/50 font-bold uppercase tracking-widest">
            Tools for the uncomfortable.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-white">
          <ProductCard 
            title="THE WAKE UP CALL"
            price="$6.99"
            description="The definitive digital manual for mindset transformation and discipline building. A brick through the window of your comfort zone."
            type="Ebook / Manual"
            href="https://payhip.com/b/3nePy"
            featured
          />
          
          <ProductCard 
            title="7-DAY PROTOCOL"
            price="$9.99"
            description="The hardcore discomfort challenge designed to kill your autopilot. 7 days of execution. No excuses."
            type="Challenge"
            href="https://payhip.com/b/xQFv4"
            ctaText="Join Protocol — $9.99"
          />
          
          <ProductCard 
            title="COMFORT KILLER APPAREL"
            price="COMING SOON"
            description="Forged for those escaping the average. First drop approaching."
            type="Apparel Teaser"
            disabled
          />
        </div>

        <div className="mt-32 p-12 bg-neutral-900 border border-white/5 text-center">
          <h2 className="text-3xl font-black mb-4 uppercase">Want the full experience?</h2>
          {submitted ? (
            <p className="text-brand-red font-black text-xl uppercase italic">The call is coming. Watch your inbox.</p>
          ) : (
            <>
              <p className="text-white/50 mb-8 max-w-2xl mx-auto font-medium">
                The inner circle membership is currently closed. Enter your email to be notified when we open new slots for the next cohort.
              </p>
              <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
                <input 
                  type="email" 
                  placeholder="YOUR EMAIL" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-black border border-white/10 px-6 py-4 font-bold uppercase tracking-widest focus:border-brand-red outline-none transition-colors text-white"
                />
                <button type="submit" className="bg-brand-red px-10 py-4 font-black uppercase tracking-widest hover:bg-brand-red-light transition-all text-white shadow-xl">
                  Notify Me
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function ProductCard({ 
  title, 
  price, 
  description, 
  type, 
  featured, 
  disabled, 
  href,
  ctaText = "Access Now"
}: { 
  title: string, 
  price: string, 
  description: string, 
  type: string, 
  featured?: boolean, 
  disabled?: boolean,
  href?: string,
  ctaText?: string
}) {
  return (
    <motion.div 
      whileHover={!disabled ? { y: -10 } : {}}
      className={`p-1 flex flex-col h-full ${featured ? 'bg-gradient-to-b from-brand-red to-transparent shadow-[0_0_30px_rgba(139,0,0,0.2)]' : 'bg-white/5 border border-white/10'}`}
    >
      <div className="bg-black p-8 flex-1 flex flex-col relative overflow-hidden group">
        {featured && (
           <div className="absolute top-0 right-0 bg-brand-red text-white text-[10px] font-black px-3 py-1 uppercase tracking-widest z-20">
             Most Essential
           </div>
        )}
        
        {title === "THE WAKE UP CALL" && (
          <div className="mb-6 relative aspect-[3/4] overflow-hidden rounded shadow-2xl group-hover:scale-105 transition-transform duration-500 bg-neutral-950 border border-white/5">
            <div className="absolute inset-0 bg-noise opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-br from-brand-red/20 via-transparent to-black" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <span className="text-brand-red font-black text-[10px] tracking-[0.3em] uppercase mb-4">Manual</span>
              <h4 className="text-2xl font-black leading-none tracking-tighter">
                THE<br />
                WAKE UP<br />
                CALL
              </h4>
              <div className="w-8 h-0.5 bg-brand-red mt-4" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-white/5" />
          </div>
        )}

        {title === "7-DAY PROTOCOL" && (
          <div className="mb-6 relative aspect-[3/4] overflow-hidden rounded shadow-2xl group-hover:scale-105 transition-transform duration-500 bg-neutral-950 border border-white/5">
            <div className="absolute inset-0 bg-noise opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-br from-brand-red/20 via-transparent to-black" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <div className="w-16 h-16 border-2 border-brand-red flex items-center justify-center mb-6 rotate-45 group-hover:rotate-90 transition-transform duration-700">
                <span className="text-white font-black text-2xl -rotate-45 group-hover:-rotate-90 transition-transform duration-700">7</span>
              </div>
              <h4 className="text-2xl font-black leading-none tracking-tighter uppercase">
                THE<br />
                PROTOCOL
              </h4>
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-white/5" />
          </div>
        )}

        {title === "COMFORT KILLER APPAREL" && (
          <div className="mb-6 relative aspect-[3/4] overflow-hidden rounded shadow-2xl group-hover:scale-105 transition-transform duration-500 bg-neutral-950 border border-white/5">
            <div className="absolute inset-0 bg-noise opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <div className="relative">
                <div className="w-20 h-20 border-2 border-brand-red/20 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-brand-red font-black text-2xl tracking-tighter">CK</span>
                </div>
              </div>
              <div className="mt-8 space-y-1">
                <span className="block text-white/20 font-black text-[10px] tracking-[0.5em] uppercase">Status</span>
                <span className="block text-brand-red font-black text-[10px] tracking-[0.2em] uppercase animate-pulse">Forging...</span>
              </div>
            </div>
          </div>
        )}

        <span className="text-xs font-black text-brand-red uppercase tracking-[0.2em] mb-2">{type}</span>
        <h3 className="text-2xl font-black mb-4 group-hover:text-brand-red transition-colors">{title}</h3>
        <p className="text-white/50 mb-8 leading-relaxed flex-1 italic font-medium">"{description}"</p>
        <div className="flex justify-between items-center pt-6 border-t border-white/10 mt-auto">
          <span className="text-2xl font-black">{price}</span>
          {disabled ? (
            <span className="px-6 py-3 font-black uppercase tracking-widest text-xs bg-white/5 text-white/20">
              Waitlisted
            </span>
          ) : (
            <a 
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 font-black uppercase tracking-widest text-xs bg-white text-black hover:bg-brand-red hover:text-white transition-all shadow-lg"
            >
              {ctaText}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
