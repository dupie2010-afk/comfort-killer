import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { convexQuery } from "@convex-dev/react-query";
import { api } from "../../../convex/_generated/api";
import type { Id } from "../../../convex/_generated/dataModel";
import { motion } from "framer-motion";
import { Download, AlertTriangle } from "lucide-react";

export const Route = createFileRoute("/download/$orderId")({
  component: DownloadPage,
});

function DownloadPage() {
  const { orderId } = Route.useParams();
  const { data: order } = useSuspenseQuery(
    convexQuery(api.orders.getOrderWithProduct, { orderId: orderId as Id<"orders"> })
  );

  if (!order || order.status !== "completed") {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-md w-full glass p-12 text-center border-brand-red">
          <AlertTriangle size={64} className="text-brand-red mx-auto mb-6" />
          <h1 className="text-3xl font-black mb-4">ACCESS DENIED</h1>
          <p className="text-white/70">
            This order is not completed or does not exist. If you just paid, please wait a few seconds for the process to complete.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl w-full glass p-12 text-center"
      >
        <h1 className="text-5xl font-black mb-4 uppercase leading-none">YOUR ARMORY IS READY</h1>
        <p className="text-white/50 font-bold uppercase tracking-widest mb-12">
          {order.product.title}
        </p>
        
        <div className="bg-black/40 p-8 border border-white/5 mb-12">
          <p className="text-sm text-white/70 mb-6 italic">
            "Comfort is a slow death. This manual is your resurrection."
          </p>
          <a 
            href={order.product.fileUrl} 
            download
            className="inline-flex items-center gap-4 bg-brand-red text-white px-10 py-5 text-xl font-black uppercase tracking-widest hover:bg-brand-red-light transition-all shadow-2xl"
          >
            <Download size={24} />
            Download Now
          </a>
        </div>

        <p className="text-[10px] text-white/20 uppercase tracking-[0.4em]">
          Secure Download Link • Order ID: {order._id}
        </p>
      </motion.div>
    </div>
  );
}
