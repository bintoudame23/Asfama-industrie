import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import field from "@/assets/field.jpg";
import brand from "@/assets/brand.jpg";
import { Sprout, ShieldCheck, Lightbulb, Leaf, Smile, Tractor, Package, Truck, Utensils } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ASFAMA Industrie — Cultiver la terre, nourrir l'avenir" },
      { name: "description", content: "Production agricole (pomme de terre, oignon, maraîchage) et marque agroalimentaire (riz, tomate, sucre). De la terre à votre table." },
      { property: "og:title", content: "ASFAMA Industrie — Cultiver la terre, nourrir l'avenir" },
      { property: "og:description", content: "De la terre à votre table : production agricole et produits essentiels du quotidien." },
    ],
  }),
  component: Index,
});

const values = [
  { icon: ShieldCheck, t: "Qualité", d: "Des produits sains et contrôlés, du champ à l'emballage." },
  { icon: Lightbulb, t: "Innovation", d: "Modernisation des pratiques et techniques agricoles." },
  { icon: Leaf, t: "Durabilité", d: "Respect de la terre et des ressources pour demain." },
  { icon: Smile, t: "Satisfaction", d: "Le consommateur au cœur de chacune de nos décisions." },
];

const steps = [
  { icon: Sprout, t: "Cultiver", d: "Nos champs de Dealy produisent pomme de terre, oignon et maraîchage." },
  { icon: Tractor, t: "Récolter", d: "Des récoltes au bon moment, avec soin et savoir-faire." },
  { icon: Package, t: "Transformer", d: "Riz, tomate, sucre : conditionnés sous notre propre marque." },
  { icon: Truck, t: "Livrer", d: "Vers les marchés, commerçants et grossistes." },
  { icon: Utensils, t: "Nourrir", d: "Jusqu'à votre table, chaque jour." },
];

function Index() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img src={hero} alt="Récolte dans les champs ASFAMA" width={1600} height={912} className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-hero-overlay" />
        <div className="mx-auto max-w-6xl px-4 py-28 text-deep-foreground md:py-40">
          <p className="text-sm font-bold uppercase tracking-widest text-accent">ASFAMA Industrie · Sénégal</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-bold leading-tight md:text-7xl">Cultiver la terre, nourrir l'avenir.</h1>
          <p className="mt-6 max-w-xl text-lg opacity-90">
            Nourrir durablement les populations, valoriser les richesses de la terre et bâtir un avenir agricole prospère.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/produits" className="rounded-full bg-accent px-6 py-3 font-bold text-accent-foreground transition hover:opacity-90">Découvrir nos produits</Link>
            <Link to="/contact" className="rounded-full border border-deep-foreground/60 px-6 py-3 font-bold transition hover:bg-deep-foreground/10">Devenir partenaire</Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 text-center md:grid-cols-4">
          {[["2", "activités complémentaires"], ["100%", "engagés pour le local"], ["Dealy", "nos champs"], ["3", "noms, une vision"]].map(([n, l]) => (
            <div key={l}>
              <p className="font-display text-3xl font-bold text-primary md:text-4xl">{n}</p>
              <p className="mt-1 text-sm text-muted-foreground">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-primary">Nos activités</p>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">Deux métiers, une même mission</h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Link to="/recoltes" className="group overflow-hidden rounded-3xl bg-card shadow-sm transition hover:shadow-xl">
            <img src={field} alt="Pommes de terre et oignons récoltés" loading="lazy" width={1200} height={912} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
            <div className="p-8">
              <h3 className="text-2xl font-bold">Production agricole</h3>
              <p className="mt-2 text-muted-foreground">Pomme de terre, oignon et autres produits maraîchers cultivés dans nos champs.</p>
              <p className="mt-4 font-bold text-primary">En savoir plus →</p>
            </div>
          </Link>
          <Link to="/produits" className="group overflow-hidden rounded-3xl bg-card shadow-sm transition hover:shadow-xl">
            <img src={brand} alt="Produits de la marque ASFAMA" loading="lazy" width={1200} height={912} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
            <div className="p-8">
              <h3 className="text-2xl font-bold">Notre marque agroalimentaire</h3>
              <p className="mt-2 text-muted-foreground">Riz, tomate, sucre et autres produits essentiels du quotidien.</p>
              <p className="mt-4 font-bold text-primary">Voir la gamme →</p>
            </div>
          </Link>
        </div>
      </section>

      <section className="bg-deep py-20 text-deep-foreground">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-4xl font-bold md:text-5xl">De la terre à votre table</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <div key={s.t} className="rounded-2xl border border-deep-foreground/15 p-6">
                <p className="text-sm font-bold text-accent">0{i + 1}</p>
                <s.icon className="mt-3 h-9 w-9 text-accent" />
                <h3 className="mt-3 text-xl font-bold">{s.t}</h3>
                <p className="mt-2 text-sm opacity-80">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-4xl font-bold">Nos valeurs</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.t} className="rounded-2xl bg-secondary p-6">
                <v.icon className="h-10 w-10 text-primary" />
                <h3 className="mt-4 text-xl font-bold">{v.t}</h3>
                <p className="mt-2 text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-20 text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-primary">Plus qu'un nom</p>
        <h2 className="mt-3 text-4xl font-bold">ASTA · FAA · MAME DIARRA</h2>
        <p className="mt-4 text-lg text-muted-foreground">Trois noms qui portent une vision : devenir un acteur de référence de l'agriculture et de l'agroalimentaire, en alliant savoir-faire, modernisation et engagement envers les communautés.</p>
        <Link to="/histoire" className="mt-6 inline-block font-bold text-primary hover:underline">Lire notre histoire →</Link>
      </section>

      <section className="bg-accent">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-14 text-accent-foreground md:flex-row">
          <div>
            <h2 className="text-3xl font-bold">Commerçant, grossiste ou distributeur ?</h2>
            <p className="mt-2 opacity-80">Approvisionnez-vous directement auprès d'ASFAMA Industrie.</p>
          </div>
          <Link to="/contact" className="rounded-full bg-deep px-8 py-4 font-bold text-deep-foreground transition hover:opacity-90">Demander un devis</Link>
        </div>
      </section>
    </>
  );
}
