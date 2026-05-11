import { internalAction, internalQuery } from "./_generated/server";
import { v } from "convex/values";
import { Resend } from "resend";
import { internal } from "./_generated/api";

const getResend = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("RESEND_API_KEY is not set. Emails will not be sent.");
    return null;
  }
  return new Resend(apiKey);
};

const FROM_EMAIL = "movement@comfortkiller.app"; 

export const sendProductDeliveryEmail = internalAction({
  args: {
    orderId: v.id("orders"),
  },
  returns: v.null(),
  handler: async (ctx, args) => {
    const resend = getResend();
    if (!resend) return null;

    const order = await ctx.runQuery(internal.emails.getOrderDetails, { orderId: args.orderId });
    if (!order || !order.product) return null;

    const siteUrl = process.env.SITE_URL || "https://comfortkiller.app";
    const downloadUrl = `${siteUrl}/download/${order._id}`;

    try {
      await resend.emails.send({
        from: `Comfort Killer <${FROM_EMAIL}>`,
        to: order.email,
        subject: "YOUR ARMORY HAS ARRIVED.",
        html: `
          <div style="background-color: #050505; color: #ffffff; font-family: sans-serif; padding: 40px; text-align: center;">
            <h1 style="color: #8B0000; font-size: 32px; font-weight: 900; letter-spacing: -1px; text-transform: uppercase;">YOU ARE NO LONGER ASLEEP.</h1>
            <p style="font-size: 18px; color: #cccccc; margin-bottom: 40px;">Most people wait for a sign. You took action. This is the beginning of the end for the average version of you.</p>
            
            <div style="background-color: #121212; border: 1px solid #333; padding: 40px; margin: 40px 0;">
              <h2 style="font-size: 24px; font-weight: 900; margin-bottom: 10px; text-transform: uppercase;">${order.product.title}</h2>
              <p style="color: #666; font-size: 14px; margin-bottom: 30px;">SECURE DIGITAL ACCESS</p>
              <a href="${downloadUrl}" style="background-color: #8B0000; color: #ffffff; padding: 20px 40px; text-decoration: none; font-weight: 900; text-transform: uppercase; letter-spacing: 2px; display: inline-block;">ACCESS YOUR ARMORY</a>
            </div>

            <p style="font-size: 14px; color: #555; line-height: 1.6; max-width: 500px; margin: 0 auto;">
              The manual you've purchased is the blueprint. The execution is entirely on you. If you face issues with the download, contact <a href="mailto:dupie2010@gmail.com" style="color: #8B0000;">dupie2010@gmail.com</a>.
            </p>
            
            <div style="margin-top: 60px; border-top: 1px solid #222; padding-top: 40px;">
              <p style="font-size: 10px; letter-spacing: 4px; color: #333; text-transform: uppercase;">Comfort Killer • Wayne Duplessis</p>
            </div>
          </div>
        `,
      });
    } catch (error) {
      console.error("Failed to send email:", error);
    }

    return null;
  },
});

export const sendChallengeWelcomeEmail = internalAction({
  args: {
    email: v.string(),
  },
  returns: v.null(),
  handler: async (_ctx, args) => {
    const resend = getResend();
    if (!resend) return null;

    const siteUrl = process.env.SITE_URL || "https://comfortkiller.app";

    try {
      await resend.emails.send({
        from: `Comfort Killer <${FROM_EMAIL}>`,
        to: args.email,
        subject: "WELCOME TO THE FIRE.",
        html: `
          <div style="background-color: #050505; color: #ffffff; font-family: sans-serif; padding: 40px; text-align: center;">
            <h1 style="color: #ffffff; font-size: 32px; font-weight: 900; letter-spacing: -1px; text-transform: uppercase;">THE 7-DAY <span style="color: #8B0000;">WAKE UP</span> CALL</h1>
            <p style="font-size: 18px; color: #cccccc; margin-bottom: 40px;">You've committed to 7 days of discomfort. Most will quit by day three. Who are you?</p>
            
            <div style="text-align: left; max-width: 500px; margin: 0 auto; color: #eee; line-height: 1.8;">
              <p>For the next week, your comfort is your enemy. Every morning at 5:00 AM, you will receive your orders. You will execute without question, or you will remain exactly where you are.</p>
              <p style="font-weight: bold; color: #8B0000;">NO EXCUSES. NO NEGOTIATIONS.</p>
            </div>

            <div style="margin: 40px 0;">
              <a href="${siteUrl}" style="border: 1px solid #ffffff; color: #ffffff; padding: 20px 40px; text-decoration: none; font-weight: 900; text-transform: uppercase; letter-spacing: 2px; display: inline-block;">PREPARE FOR DAY 1</a>
            </div>

            <div style="margin-top: 60px; border-top: 1px solid #222; padding-top: 40px;">
              <p style="font-size: 10px; letter-spacing: 4px; color: #333; text-transform: uppercase;">Comfort Killer • Wayne Duplessis</p>
            </div>
          </div>
        `,
      });
    } catch (error) {
      console.error("Failed to send email:", error);
    }

    return null;
  },
});

export const getOrderDetails = internalQuery({
  args: { orderId: v.id("orders") },
  returns: v.any(),
  handler: async (_ctx, args) => {
    const order = await _ctx.db.get(args.orderId);
    if (!order) return null;
    const product = await _ctx.db.get(order.productId);
    return { ...order, product };
  },
});
