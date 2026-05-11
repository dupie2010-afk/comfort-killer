import { action, internalMutation, internalQuery } from "./_generated/server";
import { v } from "convex/values";
import Stripe from "stripe";
import { internal } from "./_generated/api";

const getStripe = () => {
  const apiKey = process.env.STRIPE_SECRET_KEY;
  if (!apiKey) {
    console.warn("STRIPE_SECRET_KEY is not set.");
    return null;
  }
  return new Stripe(apiKey);
};

export const createCheckoutSession = action({
  args: {
    productId: v.id("products"),
    successUrl: v.string(),
    cancelUrl: v.string(),
  },
  returns: v.string(),
  handler: async (ctx, args) => {
    const stripe = getStripe();
    if (!stripe) throw new Error("Stripe is not configured");

    const product = await ctx.runQuery(internal.stripe.getProduct, { productId: args.productId });
    if (!product) throw new Error("Product not found");

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: product.title,
              description: product.description,
            },
            unit_amount: product.price,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${args.successUrl}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: args.cancelUrl,
      metadata: {
        productId: args.productId,
      },
    });

    if (!session.url) throw new Error("Failed to create checkout session");

    await ctx.runMutation(internal.stripe.createOrder, {
      productId: args.productId,
      stripeSessionId: session.id,
      amount: product.price,
    });

    return session.url;
  },
});

export const getProduct = internalQuery({
  args: { productId: v.id("products") },
  returns: v.any(),
  handler: async (ctx, args) => {
    return await ctx.db.get(args.productId);
  },
});

export const createOrder = internalMutation({
  args: {
    productId: v.id("products"),
    stripeSessionId: v.string(),
    amount: v.number(),
  },
  returns: v.id("orders"),
  handler: async (ctx, args) => {
    return await ctx.db.insert("orders", {
      productId: args.productId,
      stripeSessionId: args.stripeSessionId,
      amount: args.amount,
      status: "pending",
      email: "pending@example.com",
    });
  },
});

export const fulfillOrder = internalMutation({
  args: {
    stripeSessionId: v.string(),
    customerEmail: v.string(),
  },
  returns: v.null(),
  handler: async (ctx, args) => {
    const order = await ctx.db
      .query("orders")
      .withIndex("by_stripeSessionId", (q) => q.eq("stripeSessionId", args.stripeSessionId))
      .unique();

    if (!order) throw new Error("Order not found");

    await ctx.db.patch(order._id, {
      status: "completed",
      email: args.customerEmail,
    });

    // Schedule email delivery
    await ctx.scheduler.runAfter(0, internal.emails.sendProductDeliveryEmail, {
      orderId: order._id,
    });

    return null;
  },
});
