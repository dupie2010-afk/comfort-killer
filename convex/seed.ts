import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const seed = mutation({
  args: {},
  returns: v.null(),
  handler: async (ctx) => {
    const existing = await ctx.db.query("products").first();
    if (existing) return null;

    await ctx.db.insert("products", {
      title: "THE WAKE UP CALL",
      description: "The definitive digital manual for mindset transformation and discipline building.",
      price: 699,
      stripePriceId: "price_placeholder",
      sku: "wakeupcall",
      fileUrl: "https://example.com/download/wakeupcall.pdf",
    });
    return null;
  },
});
