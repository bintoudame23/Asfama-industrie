import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro } from "@/components/site-layout";
import brand from "@/assets/brand.jpg";

export const Route = createFileRoute("/produits")({
  head: () => ({
    meta: [
      { title: "Notre marque — Riz, tomate, sucre | ASFAMA Industrie" },
      { name: "description", content: "La marque agroalimentaire ASFAMA : riz, tomate, sucre et produits essentiels du quotidien." },
      { property: "og:title", content: "Notre marque — ASFAMA Industrie" },
      { property: "og:description", content: "Riz, tomate, sucre : les essentiels du quotidien sous la marque ASFAMA." },
    ],
  }),
  component: Produits,
});

const products = [
  { e: "🍚", n: "Riz", d: "Un riz de qualité pour les repas de toute la famille." },
  { e: "🍅", n: "Tomate", d: "Concentré de tomate pour sublimer vos sauces." },
  { e: "🧂", n: "Sucre", d: "Un sucre fin, indispensable au quotidien." },
  { e: "🛒", n: "Et bientôt…", d: "D'autres produits essentiels rejoignent la gamme." },
];

function Produits() {
  return (
    <>
      <PageIntro kicker="Notre marque" title="Les essentiels du quotidien" text="En parallèle de notre production agricole, nous développons notre propre marque de produits agroalimentaires." />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <img src={brand} alt="Gamme de produits ASFAMA : riz, tomate, sucre" loading="lazy" width={1200} height={912} className="mx-auto max-h-[520px] w-full rounded-3xl object-cover shadow-xl" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <div key={p.n} className="rounded-3xl bg-secondary p-8 text-center">
              <span className="text-5xl" aria-hidden>{p.e}</span>
              <h2 className="mt-4 text-2xl font-bold">{p.n}</h2>
              <p className="mt-2 text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 rounded-3xl bg-deep p-10 text-center text-deep-foreground">
          <h2 className="text-3xl font-bold">Distribuez la marque ASFAMA</h2>
          <p className="mt-2 opacity-80">Boutiques, supermarchés, grossistes : rejoignez notre réseau.</p>
          <Link to="/contact" className="mt-6 inline-block rounded-full bg-accent px-6 py-3 font-bold text-accent-foreground">Devenir distributeur</Link>
        </div>
      </section>
    </>
  );
}
