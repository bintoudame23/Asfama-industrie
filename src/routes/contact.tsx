import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageIntro } from "@/components/site-layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ASFAMA Industrie" },
      { name: "description", content: "Contactez ASFAMA Industrie pour vos commandes de récoltes ou un partenariat." },
      { property: "og:title", content: "Contact — ASFAMA Industrie" },
      { property: "og:description", content: "Commandes, partenariats, emplois : écrivez-nous." },
    ],
  }),
  component: Contact,
});

const field = "w-full rounded-xl border border-input bg-card px-4 py-3 outline-none focus:ring-2 focus:ring-ring";

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageIntro kicker="Contact" title="Parlons ensemble" text="Commandes, partenariats ou candidatures : nous vous répondons rapidement." />
      <section className="mx-auto max-w-2xl px-4 py-16">
        {sent ? (
          <p className="rounded-2xl bg-secondary p-8 text-center text-lg font-bold text-primary">Merci ! Votre message a bien été préparé.</p>
        ) : (
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const f = new FormData(e.currentTarget);
              window.location.href = `mailto:contact@asfama.com?subject=${encodeURIComponent("Demande de " + f.get("nom"))}&body=${encodeURIComponent(String(f.get("message")) + "\n\nTél : " + f.get("tel"))}`;
              setSent(true);
            }}
          >
            <input name="nom" required placeholder="Votre nom" className={field} />
            <input name="tel" placeholder="Téléphone" className={field} />
            <textarea name="message" required rows={5} placeholder="Votre message (produits, quantités…)" className={field} />
            <button className="w-full rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground transition hover:opacity-90">Envoyer</button>
          </form>
        )}
      </section>
    </>
  );
}
