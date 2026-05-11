import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-black mb-12 leading-none">
            THE <span className="text-brand-red">PHILOSOPHY</span>
          </h1>
          
          <div className="space-y-12 text-xl md:text-2xl text-white/80 leading-relaxed font-medium">
            <p>
              Comfort Killer isn't a brand. It's a refusal. A refusal to accept the baseline. A refusal to let potential rot in the name of safety.
            </p>
            
            <p>
              Wayne Duplessis founded this movement on a simple, brutal observation: <span className="text-white font-black underline decoration-brand-red">Modern life is designed to keep you sedated.</span>
            </p>
            
            <div className="py-12 border-y border-white/10">
              <h2 className="text-3xl font-black mb-6 text-brand-red">THE COMFORT TRAP</h2>
              <p>
                Most people believe they are waiting for the "right moment" to start. They aren't. They are waiting for the moment to feel comfortable. That moment never comes. Life is either an uncomfortable ascent or a comfortable decline.
              </p>
            </div>

            <p>
              We believe in <span className="text-white font-black">extreme accountability</span>. No excuses. No "trying." Only doing. We build tools, community, and frameworks to help you kill the version of yourself that is holding you back.
            </p>

            <div className="grid md:grid-cols-2 gap-12 pt-12">
              <PhilosophyPillar 
                title="Discipline"
                description="The bridge between goals and accomplishment. It is not a feeling, it is a choice made repeatedly."
              />
              <PhilosophyPillar 
                title="Transformation"
                description="The process of shedding the old to make room for the new. It requires fire, and fire is hot."
              />
            </div>
          </div>

          <div className="mt-24 pt-24 border-t border-white/10 text-center">
            <h2 className="text-4xl font-black mb-8">ARE YOU READY TO KILL YOUR COMFORT?</h2>
            <a 
              href="https://payhip.com/b/xQFv4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-red text-white px-12 py-6 text-xl font-black uppercase tracking-widest rounded-sm hover:bg-brand-red-light transition-all shadow-2xl"
            >
              Enter The Movement
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function PhilosophyPillar({ title, description }: { title: string, description: string }) {
  return (
    <div className="p-8 bg-white/5 border border-white/10">
      <h3 className="text-2xl font-black text-brand-red mb-4 uppercase">{title}</h3>
      <p className="text-lg text-white/60 leading-relaxed">{description}</p>
    </div>
  );
}
