import Image from "next/image";

type SectionHeadingProps = {
  children: React.ReactNode;
  variant?: "dark" | "light";
  className?: string;
  wrapperClassName?: string;
  align?: "left" | "center";
  /** When true, `className` fully replaces the default heading classes instead of extending them. */
  overrideClassName?: boolean;
};

/**
 * Standard h2 section title with the brand underline beneath it.
 * `variant="light"` is for headings on dark/gradient backgrounds (e.g. CTA banners).
 */
export default function SectionHeading({
  children,
  variant = "dark",
  className = "",
  wrapperClassName = "",
  align = "left",
  overrideClassName = false,
}: SectionHeadingProps) {
  const baseClasses =
    variant === "light"
      ? "font-display text-3xl sm:text-5xl text-white font-normal leading-tight"
      : "font-display text-3xl sm:text-5xl font-normal text-brand-neutral tracking-tight";

  return (
    <div className={`${align === "center" ? "flex flex-col items-center" : ""} ${wrapperClassName}`}>
      <h2 className={overrideClassName ? className : `${baseClasses} ${className}`}>{children}</h2>
      <Image
        src="/underline.svg"
        alt=""
        width={200}
        height={17}
        aria-hidden="true"
        className="mt-2 h-auto w-[140px] sm:w-[180px]"
      />
    </div>
  );
}
