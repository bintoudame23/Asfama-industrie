import { Link } from "@tanstack/react-router";
import logo from "@/assets/asfama-logo.png";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/histoire", label: "Notre histoire" },
  { to: "/recoltes", label: "Production agricole" },
  { to: "/produits", label: "Notre marque" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="ASFAMA Industrie" className="h-14 w-14 object-cover" />
          <span className="hidden font-display text-xl font-bold text-primary sm:block">ASFAMA industrie</span>
        </Link>
        <nav className="flex flex-wrap gap-1 text-sm font-medium">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-full px-3 py-2 text-foreground transition-colors hover:bg-secondary"
              activeProps={{ className: "bg-primary text-primary-foreground hover:bg-primary" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-deep text-deep-foreground">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-bold">ASFAMA Industrie</p>
          <p className="mt-2 text-sm opacity-80">Cultiver la terre, nourrir l'avenir. De la terre à votre table.</p>
        </div>
        <div className="text-sm opacity-90">
          <p className="font-bold">Nos champs</p>
          <p className="mt-2">Dealy,Sénégal</p>
        </div>
        <div className="text-sm opacity-90">
          <p className="font-bold">Nos valeurs</p>
          <p className="mt-2">Qualité · Innovation · Durabilité · Satisfaction des consommateurs</p>
        </div>
      </div>
      <p className="border-t border-deep-foreground/20 py-4 text-center text-xs opacity-70">
        © {new Date().getFullYear()} ASFAMA Industrie
      </p>
    </footer>
  );
}

export function PageIntro({ kicker, title, text }: { kicker: string; title: string; text: string }) {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-primary">{kicker}</p>
        <h1 className="mt-3 text-4xl font-bold md:text-5xl">{title}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">{text}</p>
      </div>
    </section>
  );
}
