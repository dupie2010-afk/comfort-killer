import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2, Download } from "lucide-react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { convexQuery } from "@convex-dev/react-query";
import { api } from "../../../convex/_generated/api";

export const Route = createFileRoute("/purchase/success")({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      session_id: (search.session_id as string) || undefined,
    };
  },
  component: SuccessPage,
});

function SuccessPage() {
  const { session_id } = Route.useSearch();
  
  const { data: order } = useSuspenseQuery(
    convexQuery(api.orders.getOrderBySessionId, { stripeSessionId: session_id || "" })
  );

  const isFulfilled = order?.status === "completed";

  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-20">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl w-full glass p-12 text-center"
      >
        <div className="flex justify-center mb-8">
          <CheckCircle2 size={80} className="text-brand-red animate-pulse" />
        </div>
        <h1 className="text-4xl font-black mb-6 uppercase">PAYMENT SUCCESSFUL</h1>
        
        {isFulfilled && order ? (
          <div className="mb-10">
            <p className="text-xl font-bold text-white mb-6">YOUR TRANSFORMATION BEGINS NOW.</p>
            <p className="text-white/70 mb-8 leading-relaxed">
              Your digital product is ready. You can download it directly below or via the link sent to your email.
            </p>
            <Link 
              to="/download/$orderId"
              params={{ orderId: order._id }}
              className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 text-lg font-black uppercase tracking-widest hover:bg-brand-red hover:text-white transition-all shadow-2xl"
            >
              <Download size={24} />
              Access Download
            </Link>
          </div>
        ) : (
          <div className="mb-10">
            <p className="text-white/70 mb-6 leading-relaxed font-medium">
              We are processing your order. The wake up call is on its way. Check your inbox in a few minutes.
            </p>
            <div className="flex justify-center">
              <div className="w-12 h-1 border-2 border-brand-red/30 border-t-brand-red animate-spin rounded-full" />
            </div>
          </div>
        )}

        <div className="space-y-4 pt-8 border-t border-white/10">
          <Link 
            to="/"
            className="block w-full bg-brand-red py-4 text-sm font-black uppercase tracking-widest hover:bg-brand-red-light transition-all"
          >
            Back to Movement
          </Link>
          <p className="text-[10px] text-white/30 uppercase tracking-[0.2em]">
            Didn't get the email? Check your spam or contact support.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
