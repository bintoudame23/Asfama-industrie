import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site-layout";

export const Route = createFileRoute("/histoire")({
  head: () => ({
    meta: [
      { title: "Notre histoire — ASFAMA Industrie" },
      { name: "description", content: "ASFAMA : Asta, Faa et Mame Diarra. L'histoire et la mission d'ASFAMA Industrie." },
      { property: "og:title", content: "Notre histoire — ASFAMA Industrie" },
      { property: "og:description", content: "Asta, Faa et Mame Diarra : trois noms, une vision agricole." },
    ],
  }),
  component: Histoire,
});

const names = [
  { l: "AS", n: "Asta" },
  { l: "FA", n: "Faa" },
  { l: "MA", n: "Mame Diarra" },
];

function Histoire() {
  return (
    <>
      <PageIntro kicker="Notre histoire" title="Plus qu'un simple nom" text="ASFAMA incarne une vision : nourrir durablement les populations tout en valorisant la terre." />
      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-3">
          {names.map((x) => (
            <div key={x.n} className="rounded-3xl border border-border bg-card p-8 text-center">
              <p className="font-display text-6xl font-bold text-primary">{x.l}</p>
              <p className="mt-2 text-xl font-bold">{x.n}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-14 max-w-3xl space-y-6 text-lg leading-relaxed">
          <h2 className="text-3xl font-bold">Cultiver la terre, nourrir l'avenir</h2>
          <p>Plus qu'un simple nom, ASFAMA INDUSTRIE incarne une vision : nourrir durablement les populations, valoriser les richesses de la terre et bâtir un avenir agricole prospère.</p>
          <p>Notre entreprise intervient dans la production agricole, avec la culture de denrées telles que la pomme de terre, l'oignon et d'autres produits maraîchers. En parallèle, nous développons notre propre marque de produits agroalimentaires, comprenant notamment le riz, la tomate, le sucre et d'autres produits essentiels du quotidien.</p>
          <p>À travers ces deux activités complémentaires, ASFAMA INDUSTRIE ambitionne de contribuer à la sécurité alimentaire, au développement de l'agriculture locale et à la création d'opportunités économiques. Nous plaçons <strong>la qualité, l'innovation, la durabilité et la satisfaction des consommateurs</strong> au cœur de notre démarche.</p>
          <p>Guidés par une vision tournée vers l'avenir, nous aspirons à devenir un acteur de référence dans le secteur agricole et agroalimentaire, en alliant savoir-faire agricole, modernisation des pratiques et engagement envers les communautés.</p>
          <blockquote className="border-l-4 border-accent pl-6 font-display text-2xl italic text-primary">ASFAMA INDUSTRIE, de la terre à votre table, nous cultivons aujourd'hui les solutions alimentaires de demain.</blockquote>
          <div className="rounded-2xl bg-secondary p-6">
            <p className="font-bold text-primary">Nos champs : Dealy</p>
            <p className="mt-1 text-muted-foreground">C'est à Dealy que poussent nos cultures et que se construit l'avenir d'ASFAMA.</p>
          </div>
        </div>
      </section>
    </>
  );
}
