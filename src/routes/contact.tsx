import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none">
            CONTACT <span className="text-brand-red">US</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/50 font-bold uppercase tracking-widest mb-16">
            No small talk. No excuses.
          </p>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-black mb-6 uppercase">Inquiries</h2>
              <div className="space-y-8">
                <div>
                  <p className="text-xs font-black text-brand-red uppercase tracking-widest mb-1">General / Support</p>
                  <p className="text-xl font-bold">dupie2010@gmail.com</p>
                </div>
                <div>
                  <p className="text-xs font-black text-brand-red uppercase tracking-widest mb-1">Speaking / Press</p>
                  <p className="text-xl font-bold text-white/50">Wayne Duplessis</p>
                </div>
              </div>

              <h2 className="text-2xl font-black mt-16 mb-6 uppercase">Social</h2>
              <div className="flex flex-wrap gap-4">
                <SocialLink name="YouTube" href="https://www.youtube.com/@ParaXInc" />
                <SocialLink name="TikTok" href="https://www.tiktok.com/@parax_inc" />
                <SocialLink name="Facebook" href="https://www.facebook.com/paraxinc" />
              </div>
            </div>

            <form className="space-y-6 bg-white/5 p-8 border border-white/10">
              <div>
                <label className="block text-xs font-black uppercase tracking-widest mb-2">Your Name</label>
                <input type="text" className="w-full bg-black border border-white/10 p-4 focus:border-brand-red outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest mb-2">Your Email</label>
                <input type="email" className="w-full bg-black border border-white/10 p-4 focus:border-brand-red outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest mb-2">Message</label>
                <textarea rows={5} className="w-full bg-black border border-white/10 p-4 focus:border-brand-red outline-none transition-colors resize-none"></textarea>
              </div>
              <button className="w-full bg-brand-red py-5 text-lg font-black uppercase tracking-widest hover:bg-brand-red-light transition-all shadow-xl">
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function SocialLink({ name, href }: { name: string, href: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="px-6 py-3 border border-white/10 font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all"
    >
      {name}
    </a>
  );
}
