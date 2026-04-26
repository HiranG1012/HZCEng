type PrimaryButtonProps = {
  children: string;
  type?: "button" | "submit";
  className?: string;
  onClick?: () => void;
};

export function PrimaryButton({ children, type = "button", className = "", onClick }: PrimaryButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`group inline-flex min-h-11 max-w-full items-center gap-2 rounded-full border border-transparent bg-hz-primary py-2.5 pl-5 pr-2 text-left text-[15px] font-semibold text-white transition-transform duration-200 ease-out hover:border-hz-primary-hover hover:bg-hz-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hz-primary ${className}`}
    >
      <span className="min-w-0 flex-1 pl-0.5">{children}</span>
      <span
        aria-hidden
        className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-sm transition duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      >
        →
      </span>
    </button>
  );
}

type SecondaryButtonProps = {
  children: string;
  className?: string;
  onClick?: () => void;
  href?: string;
};

export function SecondaryButton({ children, className = "", onClick, href }: SecondaryButtonProps) {
  const classNames = `inline-flex min-h-11 max-w-full items-center justify-center rounded-full border-2 border-hz-mist bg-white/80 px-5 py-2.5 text-[15px] font-semibold text-hz-navy transition duration-200 ease-out hover:border-hz-primary/50 hover:bg-hz-mist/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hz-primary ${className}`;

  if (href) {
    return (
      <a href={href} className={classNames}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classNames}>
      {children}
    </button>
  );
}
