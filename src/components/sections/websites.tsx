import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { websites } from "@/data/site";

export function WebsitesSection() {
  return (
    <section id="websites" className="bg-white py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Websites"
          title="브랜드와 전환 흐름을 고려한 홈페이지"
          body="브랜드의 첫인상, 방문자의 다음 행동, 필요한 정보를 한 화면 안에서 자연스럽게 이어가려 했습니다."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {websites.map((site, index) => (
            <article
              key={site.name}
              className="grid overflow-hidden rounded-sm border border-line bg-white shadow-[0_12px_40px_rgba(10,10,11,0.04)] lg:grid-cols-[0.92fr_1.08fr]"
            >
              <div className="grid min-h-64 place-items-center bg-neutral-50 p-6">
                {site.image ? (
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm border border-line bg-neutral-950 shadow-soft">
                    <Image
                      src={site.image.src}
                      alt={site.image.alt}
                      fill
                      sizes="(min-width: 1024px) 42vw, 100vw"
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-full max-w-xs rounded-sm border border-line bg-white p-3 shadow-soft">
                    <div className="flex items-center justify-between border-b border-line pb-3">
                      <div className="flex gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-red-300" />
                        <span className="h-2 w-2 rounded-full bg-amber-300" />
                        <span className="h-2 w-2 rounded-full bg-emerald-300" />
                      </div>
                      <span className="text-[10px] font-semibold uppercase text-neutral-400">
                        0{index + 1}
                      </span>
                    </div>
                    <div className="space-y-3 py-6">
                      <div className="h-3 w-20 rounded-full bg-ink" />
                      <div className="h-2.5 w-44 rounded-full bg-neutral-200" />
                      <div className="h-2.5 w-32 rounded-full bg-neutral-200" />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-16 rounded-sm bg-blue-50" />
                      <div className="h-16 rounded-sm bg-emerald-50" />
                    </div>
                  </div>
                )}
              </div>
              <div className="flex flex-col justify-between p-6">
                <div>
                  <p className="text-sm font-semibold text-brand-blue">{site.category}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-ink">{site.name}</h3>
                  <p className="mt-4 text-base leading-8 text-neutral-600">
                    {site.description}
                  </p>
                </div>
                <Link
                  href={site.href}
                  target={site.href.startsWith("http") ? "_blank" : undefined}
                  rel={site.href.startsWith("http") ? "noreferrer" : undefined}
                  className="focus-ring mt-8 inline-flex w-fit items-center gap-2 rounded-sm border border-line px-4 py-3 text-sm font-semibold text-ink transition hover:border-neutral-300 hover:bg-neutral-50"
                >
                  Visit <ExternalLink size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
