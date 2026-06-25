import { SectionHeading } from "@/components/ui/section-heading";
import { careerItems } from "@/data/site";

export function CareerSection() {
  return (
    <section id="career" className="bg-neutral-50 py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Career"
          title="함께한 조직"
          body="거쳐 온 조직과 프로젝트를 간결하게 남겼습니다."
        />

        <div className="mt-14 grid gap-3 sm:grid-cols-2">
          {careerItems.map((item, index) => (
            <article
              key={item.company}
              className="flex items-center justify-between border-t border-line py-6"
            >
              <h3 className="text-2xl font-semibold text-ink">{item.company}</h3>
              <p className="text-sm font-semibold text-brand-blue">
                {String(index + 1).padStart(2, "0")}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
