import { mutation } from "./_generated/server";
import { v } from "convex/values";
import { internal } from "./_generated/api";

export const joinChallenge = mutation({
  args: {
    email: v.string(),
    phone: v.optional(v.string()),
  },
  returns: v.null(),
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("leads")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();

    if (!existing) {
      await ctx.db.insert("leads", {
        email: args.email,
        phone: args.phone,
        type: "challenge",
      });
    }

    // Schedule welcome email
    await ctx.scheduler.runAfter(0, internal.emails.sendChallengeWelcomeEmail, {
      email: args.email,
    });

    return null;
  },
});

export const subscribe = mutation({
  args: {
    email: v.string(),
  },
  returns: v.null(),
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("leads")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();

    if (!existing) {
      await ctx.db.insert("leads", {
        email: args.email,
        type: "newsletter",
      });
    }
    return null;
  },
});
