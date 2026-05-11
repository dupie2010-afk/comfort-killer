import { query } from "./_generated/server";
import { v } from "convex/values";

export const listVisible = query({
  args: {},
  returns: v.array(v.object({
    _id: v.id("testimonials"),
    _creationTime: v.number(),
    name: v.string(),
    role: v.optional(v.string()),
    content: v.string(),
    rating: v.number(),
    visible: v.optional(v.boolean()),
  })),
  handler: async (ctx) => {
    return await ctx.db
      .query("testimonials")
      .withIndex("by_visible", (q) => q.eq("visible", true))
      .collect();
  },
});
