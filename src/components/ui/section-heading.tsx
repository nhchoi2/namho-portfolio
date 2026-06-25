import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
  tone = "light"
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      <p
        className={cn(
          "mb-3 text-sm font-semibold uppercase",
          tone === "dark" ? "text-blue-200" : "text-brand-blue"
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl",
          tone === "dark" ? "text-white" : "text-ink"
        )}
      >
        {title}
      </h2>
      {body ? (
        <p
          className={cn(
            "mt-5 text-base leading-8 sm:text-lg",
            tone === "dark" ? "text-neutral-300" : "text-neutral-600"
          )}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}
