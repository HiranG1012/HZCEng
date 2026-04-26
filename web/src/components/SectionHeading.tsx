type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export function SectionHeading({ eyebrow, title, subtitle, align = "left", dark = false }: SectionHeadingProps) {
  return (
    <div className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${align === "center" ? "text-center" : "text-left"}`}>
      <p
        className={`text-[12px] font-semibold uppercase tracking-[0.2em] ${dark ? "text-hz-mist" : "text-hz-primary"}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-2 text-[1.75rem] font-semibold leading-tight sm:text-4xl lg:text-[2.5rem] ${dark ? "text-white" : "text-hz-navy"}`}
        style={{ fontFamily: "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif" }}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-3 max-w-2xl text-base leading-relaxed sm:text-lg ${align === "center" ? "mx-auto" : ""} ${dark ? "text-hz-mist" : "text-hz-slate"}`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
