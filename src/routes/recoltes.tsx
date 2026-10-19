import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro } from "@/components/site-layout";
import field from "@/assets/field.jpg";

export const Route = createFileRoute("/recoltes")({
  head: () => ({
    meta: [
      { title: "Production agricole — ASFAMA Industrie" },
      { name: "description", content: "Pomme de terre, oignon et produits maraîchers cultivés par ASFAMA Industrie dans les champs de Dealy." },
      { property: "og:title", content: "Production agricole — ASFAMA Industrie" },
      { property: "og:description", content: "Pomme de terre, oignon et maraîchage : nos cultures." },
    ],
  }),
  component: Recoltes,
});

const crops = [
  { e: "🥔", n: "Pomme de terre", d: "Une culture phare, récoltée avec soin pour les marchés." },
  { e: "🧅", n: "Oignon", d: "Un incontournable de la cuisine, produit localement." },
  { e: "🥕", n: "Carotte", d: "Fraîche et croquante, issue du maraîchage." },
  { e: "🥬", n: "Chou", d: "Légume du quotidien, cultivé dans nos champs." },
  { e: "🌶️", n: "Piment", d: "Pour relever tous les plats." },
  { e: "🍆", n: "Aubergine", d: "Et d'autres produits maraîchers selon les saisons." },
  { e: "🥒", n: "Concombre", d: "Produit frais et croquant, cultivé dans nos champs." },
  { e: "🍅", n: "Tomate", d: "Riche en vitamines, cultivée dans nos champs." },

];

function Recoltes() {
  return (
    <>
      <PageIntro kicker="Production agricole" title="Nos champs, nos récoltes" text="Dans nos champs de Dealy, nous cultivons la pomme de terre, l'oignon et d'autres produits maraîchers." />
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2">
        <img src={field} alt="Récolte de pommes de terre et d'oignons" loading="lazy" width={1200} height={912} className="rounded-3xl shadow-xl" />
        <div className="space-y-4 text-lg">
          <h2 className="text-3xl font-bold">Savoir-faire et modernisation</h2>
          <p className="text-muted-foreground">Nous allions les pratiques agricoles traditionnelles à des techniques modernes pour produire davantage, mieux, et dans le respect de l'environnement.</p>
          <p className="text-muted-foreground">Notre production soutient l'agriculture locale et crée des opportunités économiques pour les communautés.</p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {crops.map((c) => (
            <div key={c.n} className="rounded-3xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:shadow-lg">
              <span className="text-5xl" aria-hidden>{c.e}</span>
              <h3 className="mt-4 text-2xl font-bold">{c.n}</h3>
              <p className="mt-2 text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 rounded-3xl bg-deep p-10 text-center text-deep-foreground">
          <h2 className="text-3xl font-bold">Besoin de produits frais en quantité ?</h2>
          <p className="mt-2 opacity-80">Grossistes, commerçants, restaurants : parlons de vos besoins.</p>
          <Link to="/contact" className="mt-6 inline-block rounded-full bg-accent px-6 py-3 font-bold text-accent-foreground">Demander un devis</Link>
        </div>
      </section>
    </>
  );
}
