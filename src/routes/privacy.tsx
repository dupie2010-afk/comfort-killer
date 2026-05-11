import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-black mb-12 uppercase tracking-tighter">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none space-y-8 text-white/70">
          <section>
            <h2 className="text-xl font-bold text-white uppercase mb-4">1. Information We Collect</h2>
            <p>We collect your email address when you sign up for our challenge or newsletter. We use this to send you the content you requested and occasional updates about the movement.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white uppercase mb-4">2. Data Usage</h2>
            <p>Your data is yours. We do not sell your information to third parties. We use standard industry tools to store and process your email securely.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white uppercase mb-4">3. Cookies</h2>
            <p>We use minimal cookies to understand how visitors interact with our site and to remember your preferences. You can disable these in your browser settings.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white uppercase mb-4">4. Your Rights</h2>
            <p>You can unsubscribe at any time using the link at the bottom of our emails. To have your data fully deleted, contact us at dupie2010@gmail.com.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
