import { query } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: {},
  returns: v.array(
    v.object({
      _id: v.id("products"),
      _creationTime: v.number(),
      title: v.string(),
      description: v.string(),
      price: v.number(),
      sku: v.string(),
      stripePriceId: v.string(),
      image: v.optional(v.string()),
    })
  ),
  handler: async (ctx) => {
    return await ctx.db.query("products").collect();
  },
});
