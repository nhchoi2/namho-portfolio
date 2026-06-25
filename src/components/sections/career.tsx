import { SectionHeading } from "@/components/ui/section-heading";
import { careerItems } from "@/data/site";

export function CareerSection() {
  return (
    <section id="career" className="bg-neutral-50 py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Career"
          title="운영에서 시작해 사람과 기술로 넓어진 시간"
          body="한 회사의 시험 운영 현장에서 시작해, 교육생의 자리로 돌아가 배우고, 다시 직접 만드는 사람으로 확장해 온 흐름입니다."
        />

        <div className="mt-14">
          {careerItems.map((item, index) => (
            <article
              key={item.company}
              className="grid gap-5 border-t border-line py-8 md:grid-cols-[220px_1fr]"
            >
              <div>
                <p className="text-sm font-semibold text-brand-blue">{item.period}</p>
                <p className="mt-1 text-sm text-neutral-500">
                  {String(index + 1).padStart(2, "0")}
                </p>
              </div>
              <div className="max-w-3xl">
                <h3 className="text-2xl font-semibold text-ink">{item.company}</h3>
                <p className="mt-2 text-base font-semibold text-neutral-700">{item.role}</p>
                <p className="mt-4 text-base leading-8 text-neutral-600">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
