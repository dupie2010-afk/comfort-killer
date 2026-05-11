import { query } from "./_generated/server";
import { v } from "convex/values";

export const getOrderBySessionId = query({
  args: { stripeSessionId: v.string() },
  returns: v.union(
    v.null(),
    v.object({
      _id: v.id("orders"),
      _creationTime: v.number(),
      status: v.string(),
      email: v.string(),
    })
  ),
  handler: async (ctx, args) => {
    if (!args.stripeSessionId) return null;
    return await ctx.db
      .query("orders")
      .withIndex("by_stripeSessionId", (q) => q.eq("stripeSessionId", args.stripeSessionId))
      .unique();
  },
});

export const getOrderWithProduct = query({
  args: { orderId: v.id("orders") },
  returns: v.union(
    v.null(),
    v.object({
      _id: v.id("orders"),
      _creationTime: v.number(),
      email: v.string(),
      productId: v.id("products"),
      stripeSessionId: v.string(),
      status: v.union(v.literal("pending"), v.literal("completed"), v.literal("failed")),
      amount: v.number(),
      product: v.object({
        title: v.string(),
        fileUrl: v.optional(v.string()),
      }),
    })
  ),
  handler: async (ctx, args) => {
    const order = await ctx.db.get(args.orderId);
    if (!order) return null;

    const product = await ctx.db.get(order.productId);
    if (!product) return null;

    return {
      ...order,
      product: {
        title: product.title,
        fileUrl: product.fileUrl,
      },
    };
  },
});
