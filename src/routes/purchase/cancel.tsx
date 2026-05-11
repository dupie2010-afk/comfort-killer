import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { XCircle } from "lucide-react";

export const Route = createFileRoute("/purchase/cancel")({
  component: CancelPage,
});

function CancelPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full glass p-12 text-center"
      >
        <div className="flex justify-center mb-8">
          <XCircle size={80} className="text-white/20" />
        </div>
        <h1 className="text-4xl font-black mb-6 uppercase">PURCHASE CANCELLED</h1>
        <p className="text-white/70 mb-10 leading-relaxed font-medium">
          The comfort trap is strong, but you can always try again. The version of you that you want to become is waiting.
        </p>
        <Link 
          to="/products"
          className="block w-full border border-white/20 py-4 text-sm font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all"
        >
          Return to Armory
        </Link>
      </motion.div>
    </div>
  );
}
