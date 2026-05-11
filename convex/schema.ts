import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

export default defineSchema({
  ...authTables,
  leads: defineTable({
    email: v.string(),
    phone: v.optional(v.string()),
    type: v.union(v.literal("challenge"), v.literal("newsletter")),
  }).index("by_email", ["email"]),

  products: defineTable({
    title: v.string(),
    description: v.string(),
    price: v.number(), // in cents
    stripePriceId: v.string(),
    sku: v.string(),
    image: v.optional(v.string()),
    fileUrl: v.optional(v.string()),
    featured: v.optional(v.boolean()),
  }).index("by_sku", ["sku"]).index("by_stripePriceId", ["stripePriceId"]),

  orders: defineTable({
    email: v.string(),
    productId: v.id("products"),
    stripeSessionId: v.string(),
    status: v.union(v.literal("pending"), v.literal("completed"), v.literal("failed")),
    amount: v.number(),
  })
    .index("by_stripeSessionId", ["stripeSessionId"])
    .index("by_email", ["email"])
    .index("by_status", ["status"]),

  testimonials: defineTable({
    name: v.string(),
    role: v.optional(v.string()),
    content: v.string(),
    rating: v.number(),
    visible: v.optional(v.boolean()),
  }).index("by_visible", ["visible"]),

  analytics_clicks: defineTable({
    elementId: v.string(),
    timestamp: v.number(),
    path: v.string(),
  }).index("by_element", ["elementId"]),
});
