import { SectionHeading } from "@/components/ui/section-heading";
import { profileCards, skillGroups } from "@/data/site";

export function ProfileSection() {
  return (
    <section id="profile" className="bg-white py-24 sm:py-32">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Profile"
            title="교육 현장과 기술 사이에서 문제를 보는 사람"
            body="저를 한 단어로 설명하기는 어렵습니다. 교육행정의 안정감, 사람을 이해하는 감각, 그리고 직접 만들어보는 실행력이 함께 쌓여 지금의 방향이 되었습니다."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {profileCards.map((card) => {
              const Icon = card.icon;
              return (
                <article
                  key={card.title}
                  className="rounded-sm border border-line bg-white p-6 shadow-[0_12px_40px_rgba(10,10,11,0.04)]"
                >
                  <div className="mb-5 grid h-11 w-11 place-items-center rounded-sm bg-blue-50 text-brand-blue">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  <h3 className="text-lg font-semibold text-ink">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-neutral-600">{card.body}</p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-14 grid gap-4 border-t border-line pt-8 md:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold uppercase text-ink">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-sm border border-line bg-neutral-50 px-2.5 py-1 text-xs font-semibold text-neutral-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
