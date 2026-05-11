import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-black mb-12 uppercase tracking-tighter">Terms of Service</h1>
        <div className="prose prose-invert max-w-none space-y-8 text-white/70">
          <section>
            <h2 className="text-xl font-bold text-white uppercase mb-4">1. Acceptance of Terms</h2>
            <p>By entering this site, you acknowledge that the content is for educational and motivational purposes only. You are responsible for your own actions and results.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white uppercase mb-4">2. Digital Products</h2>
            <p>All sales of digital products (ebooks, manuals, trackers) are final. No refunds will be issued once the download link has been provided.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white uppercase mb-4">3. Intellectual Property</h2>
            <p>The "Comfort Killer" brand, logo, and philosophy are the property of Wayne Duplessis. You may not reproduce or distribute our content without explicit permission.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white uppercase mb-4">4. Disclaimers</h2>
            <p>We do not guarantee specific results. Transformation depends entirely on your effort, discipline, and execution. We are not medical or psychological professionals.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
