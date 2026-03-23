interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  description,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      {label && (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.2em] ${
            light ? "text-sand" : "text-olive"
          }`}
        >
          {label}
        </p>
      )}
      <h2
        className={`mt-2 font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl ${
          light ? "text-cream" : "text-bark"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            light ? "text-cream/70" : "text-warm-gray"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
