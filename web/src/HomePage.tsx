import { PrimaryButton, SecondaryButton } from "./components/PrimaryButton";
import { SectionHeading } from "./components/SectionHeading";

const blueprintGrid = {
  backgroundImage: `linear-gradient(to right, rgba(8, 39, 58, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(8, 39, 58, 0.05) 1px, transparent 1px)`,
  backgroundSize: "32px 32px",
};

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop&q=80";

const services = [
  {
    k: "01",
    title: "Structural Design",
    body: "Framing, beams, columns, foundations, load paths, and permit-ready design packages.",
  },
  {
    k: "02",
    title: "Renovations & Additions",
    body: "Open layouts, bearing wall removal, vertical additions, rear extensions, and major interior changes.",
  },
  {
    k: "03",
    title: "Special Inspections",
    body: "Code compliance, construction verification, and documentation for inspection workflows.",
  },
  {
    k: "04",
    title: "Engineering Assessments",
    body: "Cracks, settlement, sagging floors, storm damage, foundations, and pre-purchase due diligence.",
  },
  {
    k: "05",
    title: "Construction Engineering",
    body: "Temporary support, sequencing, underpinning, shoring, and field-driven coordination.",
  },
  {
    k: "06",
    title: "Drafting / CAD",
    body: "Drawings, details, and documentation for review, permitting, and construction teams.",
  },
  {
    k: "07",
    title: "Value Engineering",
    body: "Practical options for cost, constructability, and schedule, without compromising safety.",
  },
];

const proof = ["Tri-state licensed", "Engineer-led communication", "Permit & code focused", "Buildable field details"];

const why = [
  {
    title: "Code expertise",
    text: "Structural requirements, permitting expectations, and local construction constraints—interpreted for real projects.",
  },
  {
    title: "Clear communication",
    text: "Direct engineer-to-client and team support so decisions are understood early and often.",
  },
  {
    title: "Fast turnaround",
    text: "Workflows that keep design, review, and construction moving on tight schedules.",
  },
  {
    title: "Licensed in NY, NJ & CT",
    text: "Residential and commercial support across the tri-state area with responsive engineering coverage.",
  },
  {
    title: "Buildable solutions",
    text: "Details that work with contractors, field conditions, and cost-sensitive project realities.",
  },
];

const projects = [
  {
    place: "Englishtown, New Jersey",
    type: "Church / place of assembly",
    img: "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=900&auto=format&fit=crop&q=80",
    alt: "Exterior of a public assembly building with modern rooflines",
    challenge: "Complex geometry, irregular load paths, and a roof/framing system that required independent verification.",
    scope: "Independent structural peer review and FEM-driven analysis of sanctuary and roof framing.",
  },
  {
    place: "Ditmas Park, Brooklyn",
    type: "Passive home renovation and expansion",
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&auto=format&fit=crop&q=80",
    alt: "Contemporary two-story home with large windows and wood deck",
    challenge: "Coordinating old and new structure while supporting a major addition and new foundation work.",
    scope: "Reframing, rear horizontal addition, reinforced concrete foundation, underpinning, and SOE design.",
  },
  {
    place: "Garfield Place, Brooklyn",
    type: "Roof and bulkhead construction",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&auto=format&fit=crop&q=80",
    alt: "Construction site with high-rise and crane against sky",
    challenge: "Active rooftop conditions, sequencing risk, and coordination with ongoing construction work.",
    scope: "Structural review and field-aware coordination for rooftop work in progress.",
  },
  {
    place: "Staten Island, NY",
    type: "Open-concept home transformation",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&auto=format&fit=crop&q=80",
    alt: "Modern open interior living and dining area with large windows",
    challenge: "Removing a primary first-floor bearing wall while keeping the upper level stable and code-compliant.",
    scope: "Structural framing analysis, modification, and buildable details for a seamless new layout.",
  },
];

const process = [
  { title: "Project intake", text: "Share the property, scope, drawings, photos, and the problem you are solving." },
  { title: "Engineering review", text: "Evaluate structure, code requirements, load paths, and site constraints." },
  { title: "Design & documentation", text: "Deliver clear drawings, calculations, details, or inspection documentation." },
  { title: "Permit & construction support", text: "Coordinate questions, revisions, and field changes so the job keeps moving." },
];

const social = [
  {
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop&q=80",
    alt: "Construction crew reviewing plans on a job site",
    cap: "Field coordination and documentation that keeps projects aligned with design intent.",
  },
  {
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&auto=format&fit=crop&q=80",
    alt: "Structural steel frame under construction",
    cap: "Structural judgment for complex load paths, sequencing, and safety-critical details.",
  },
  {
    img: "https://images.unsplash.com/photo-1454165205744-3b78555e5572?w=600&auto=format&fit=crop&q=80",
    alt: "Blueprints and laptop on a desk in an office",
    cap: "Permit-friendly documentation with clarity for review and construction teams.",
  },
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function HomePage() {
  return (
    <div className="pb-24 sm:pb-0">
      <section id="hero" className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pb-24" style={blueprintGrid}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-6">
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-hz-primary">Licensed in NY, NJ & CT</p>
              <h1
                className="mt-2 text-3xl font-semibold leading-[1.1] text-hz-navy sm:text-4xl lg:text-5xl xl:text-6xl"
                style={{ fontFamily: "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif" }}
              >
                Structural engineering for renovations, new developments, and special inspections
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-hz-slate sm:text-lg">
                H&Z Consulting Engineering helps homeowners, architects, contractors, and developers move from concept to
                construction with code-compliant structural design, clear communication, and buildable solutions across NY,
                NJ, and CT.
              </p>
              <div className="mt-6 flex max-w-xl flex-col gap-3 sm:flex-row sm:items-center">
                <PrimaryButton onClick={() => scrollToId("contact")}>Request a Free Consultation</PrimaryButton>
                <SecondaryButton onClick={() => scrollToId("projects")}>View Recent Projects</SecondaryButton>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Licensed in NY, NJ & CT", "10+ years structural experience", "Residential & commercial", "Engineer-led communication"].map(
                  (t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full border border-hz-steel bg-white/90 px-3 py-1.5 text-xs font-medium text-hz-slate"
                    >
                      {t}
                </span>
                  ),
                )}
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="relative">
                <div className="absolute -right-2 -top-2 h-24 w-24 rounded-3xl border border-hz-steel/60 bg-hz-mist/30 sm:h-32 sm:w-32" />
                <div className="relative overflow-hidden rounded-[1.5rem] border border-hz-steel/80 ring-1 ring-hz-navy/5">
                  <img src={HERO_IMAGE} width={1200} height={800} className="h-full w-full object-cover" alt="Urban skyline and modern architecture representing structural engineering" />
                </div>
                <p className="mt-2 text-right text-xs text-hz-slate">Image: demonstration asset for preview; replace with H&Z project photography.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-hz-steel/40 py-16 sm:py-20">
        <SectionHeading
          eyebrow="Services"
          title="Engineering support for the moments that matter"
          subtitle="Whether you are removing a bearing wall, expanding a building, preparing permit drawings, reviewing field conditions, or coordinating inspections, H&Z provides practical guidance from an experienced engineering team."
        />
        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
          {services.map((s) => (
            <article
              key={s.k}
              className="group rounded-2xl border border-hz-steel/80 bg-hz-warm/90 p-5 transition duration-200 ease-out hover:-translate-y-0.5 hover:border-hz-primary/30"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-hz-slate/80">Service {s.k}</p>
              <h3
                className="mt-1 text-lg font-semibold text-hz-navy"
                style={{ fontFamily: "'Plus Jakarta Sans', ui-sans-serif, sans-serif" }}
              >
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-hz-slate">{s.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-10 sm:py-12" aria-label="Firm attributes">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-3 rounded-2xl border border-hz-steel bg-white/80 p-4 sm:grid-cols-2 sm:p-6 lg:grid-cols-4">
            {proof.map((p) => (
              <div key={p} className="border-b border-hz-steel/60 pb-3 last:border-b-0 sm:border-b-0 sm:pb-0 sm:pr-4 sm:last:pr-0">
                <p className="text-sm font-semibold text-hz-navy">{p}</p>
                <p className="mt-1 text-xs text-hz-slate">Engineering-first decisions, documented clearly.</p>
              </div>
            ))}
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-hz-slate sm:text-base">
            Clients come to H&Z when a project needs more than drawings. They need judgment, clear answers, and structural
            solutions that work in the field.
          </p>
        </div>
      </section>

      <section id="about" className="bg-hz-warm py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Why H&Z"
                title="Practical structural engineering with the detail your project deserves"
                subtitle="Clients choose H&Z for responsive communication, strong technical judgment, and a deep understanding of local building requirements. Our work is designed to be clear for clients, useful for contractors, and reliable for permitting and construction."
                align="left"
              />
              <div className="mt-6">
                <PrimaryButton onClick={() => scrollToId("contact")}>Talk With an Engineer</PrimaryButton>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {why.map((w) => (
                <div key={w.title} className="rounded-2xl border border-hz-steel bg-white/90 p-4">
                  <h3
                    className="text-sm font-semibold text-hz-navy"
                    style={{ fontFamily: "'Plus Jakarta Sans', ui-sans-serif, sans-serif" }}
                  >
                    {w.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-hz-slate">{w.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-6">
        <div className="mx-auto max-w-6xl rounded-2xl border border-hz-mist/80 bg-hz-mist/40 px-4 py-8 sm:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="max-w-2xl text-sm font-medium text-hz-navy sm:text-base" style={{ fontFamily: "'Plus Jakarta Sans', ui-sans-serif, sans-serif" }}>
              Have drawings or a site issue? Get a direct engineering review and a clear next step.
            </p>
            <PrimaryButton onClick={() => scrollToId("contact")}>Request a Free Consultation</PrimaryButton>
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 sm:py-20" style={blueprintGrid}>
        <SectionHeading
          eyebrow="Recent projects"
          title="Explore recent work with scope and engineering intent"
          subtitle="Every project tells a story of collaboration, problem-solving, and engineering judgment. Replace demonstration imagery with H&Z photography when available."
        />
        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {projects.map((p) => (
            <article key={p.place} className="overflow-hidden rounded-2xl border border-hz-steel/80 bg-white/95">
              <div className="relative aspect-[16/10]">
                <img src={p.img} width={900} height={560} className="h-full w-full object-cover" alt={p.alt} />
                <div className="absolute bottom-0 left-0 right-0 bg-hz-navy/65 p-3">
                  <p className="text-sm font-semibold text-white">{p.place}</p>
                  <p className="text-xs text-hz-mist">{p.type}</p>
                </div>
              </div>
              <div className="space-y-2 p-4 sm:p-5">
                <p className="text-sm font-medium text-hz-primary">Engineering focus</p>
                <p className="text-sm text-hz-slate">
                  <span className="font-semibold text-hz-navy">Challenge: </span>
                  {p.challenge}
                </p>
                <p className="text-sm text-hz-slate">
                  <span className="font-semibold text-hz-navy">H&Z scope: </span>
                  {p.scope}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 flex justify-center px-4">
          <SecondaryButton onClick={() => scrollToId("contact")}>Discuss a similar project</SecondaryButton>
        </div>
      </section>

      <section className="bg-hz-steel/30 py-16 sm:py-20" style={blueprintGrid}>
        <SectionHeading
          eyebrow="Process"
          title="A clear path from question to buildable solution"
        />
        <ol className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {process.map((step, i) => (
            <li key={step.title} className="relative rounded-2xl border border-hz-steel bg-white/90 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-hz-gold">Step {i + 1}</p>
              <h3
                className="mt-1 text-base font-semibold text-hz-navy"
                style={{ fontFamily: "'Plus Jakarta Sans', ui-sans-serif, sans-serif" }}
              >
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-hz-slate">{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8 flex justify-center">
          <PrimaryButton onClick={() => scrollToId("contact")}>Start With a Consultation</PrimaryButton>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-label="Project updates">
        <SectionHeading
          eyebrow="Updates"
          title="See how H&Z projects take shape"
          subtitle="A curated snapshot of field work, design intent, and documentation quality—replace with live Instagram or LinkedIn embeds if preferred."
        />
        <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-4 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
          {social.map((s) => (
            <article key={s.cap} className="overflow-hidden rounded-2xl border border-hz-steel bg-white/90">
              <div className="relative aspect-[4/3]">
                <img src={s.img} width={600} height={450} className="h-full w-full object-cover" alt={s.alt} />
              </div>
              <p className="p-4 text-sm leading-relaxed text-hz-slate">{s.cap}</p>
            </article>
          ))}
        </div>
        <p className="mt-4 text-center text-sm text-hz-slate">
          Follow for site updates:{" "}
          <a className="font-semibold text-hz-primary hover:underline" href="https://www.instagram.com/">
            Instagram
          </a>{" "}
          (link your firm profile in production)
        </p>
      </section>

      <section id="contact" className="bg-hz-navy py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2
              className="text-2xl font-semibold text-white sm:text-3xl"
              style={{ fontFamily: "'Plus Jakarta Sans', ui-sans-serif, sans-serif" }}
            >
              Let’s discuss what your project needs structurally
            </h2>
            <p className="mt-3 text-base leading-relaxed text-hz-mist">
              Send your plans, photos, or project goals. H&Z will help you understand the structural path forward and the
              documentation needed to move with confidence.
            </p>
            <p className="mt-2 text-sm text-hz-mist/90">
              <span className="font-semibold text-hz-gold">Service area: </span>
              New York, New Jersey, Connecticut
            </p>
            <ul className="mt-4 space-y-1 text-hz-mist">
              <li>
                <a className="text-lg font-semibold text-white hover:underline" href="tel:7185698677">
                  (718) 569-8677
                </a>
              </li>
              <li>
                <a className="font-medium hover:underline" href="mailto:info@hzceng.com">
                  info@hzceng.com
                </a>
              </li>
              <li className="text-sm">Monday to Friday, 9am to 5pm; Saturday, 10am to 2pm</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-hz-mist">Preview only—connect your contact form in production.</p>
            <form
              className="mt-4 space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <label className="block text-xs font-medium text-hz-mist" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                className="w-full rounded-xl border border-white/15 bg-hz-navy/40 px-3 py-2.5 text-sm text-white placeholder:text-hz-mist/60"
                placeholder="Your name"
                autoComplete="name"
              />
              <label className="block text-xs font-medium text-hz-mist" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full rounded-xl border border-white/15 bg-hz-navy/40 px-3 py-2.5 text-sm text-white placeholder:text-hz-mist/60"
                placeholder="you@example.com"
                autoComplete="email"
              />
              <label className="block text-xs font-medium text-hz-mist" htmlFor="message">
                Project summary
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-xl border border-white/15 bg-hz-navy/40 px-3 py-2.5 text-sm text-white placeholder:text-hz-mist/60"
                placeholder="Location, project type, timeline, and what you need from engineering."
              />
              <PrimaryButton type="submit" className="w-full">
                Request a Free Consultation
              </PrimaryButton>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-hz-steel bg-white/90 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p className="text-sm text-hz-slate" style={{ fontFamily: "'Plus Jakarta Sans', ui-sans-serif, sans-serif" }}>
            <span className="font-semibold text-hz-navy">H&Z Consulting Engineering, PLLC</span>
            <span className="block text-xs">Visualization preview. Not the live hzceng.com site.</span>
          </p>
          <a className="text-sm font-semibold text-hz-primary hover:underline" href="https://www.hzceng.com/">
            Live site: hzceng.com
          </a>
        </div>
      </footer>

      <div
        className="fixed bottom-0 left-0 right-0 z-40 border-t border-hz-steel/80 bg-white/95 p-2 backdrop-blur sm:hidden print:hidden"
        style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-2">
          <a
            className="inline-flex h-12 flex-1 items-center justify-center rounded-full border-2 border-hz-steel text-sm font-semibold text-hz-navy"
            href="tel:7185698677"
          >
            Call
          </a>
          <button
            type="button"
            className="inline-flex h-12 flex-1 items-center justify-center rounded-full border-0 bg-hz-primary text-sm font-semibold text-white"
            onClick={() => scrollToId("contact")}
          >
            Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
