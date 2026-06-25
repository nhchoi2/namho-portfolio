import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/data/site";

export function YouTubeSection() {
  return (
    <section id="youtube" className="bg-neutral-50 py-24 sm:py-32">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <SectionHeading
            eyebrow="YouTube"
            title="기획, 촬영, 편집까지 운영한 콘텐츠 채널"
            body="업무가 글과 시스템에만 머물지 않도록, 영상 콘텐츠의 기획과 촬영, 편집, 운영 환경까지 함께 만들어가고 있습니다."
          />

          <div className="overflow-hidden rounded-sm border border-line bg-white shadow-soft">
            <div className="relative aspect-video bg-ink">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={siteConfig.featuredVideo.embedUrl}
                title={siteConfig.featuredVideo.title}
                loading="lazy"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-brand-blue">Featured Video</p>
                <h3 className="mt-2 text-xl font-semibold text-ink">
                  {siteConfig.featuredVideo.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={siteConfig.featuredVideo.watchUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex items-center justify-center gap-2 rounded-sm bg-ink px-4 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
                >
                  Watch <ExternalLink size={16} />
                </Link>
                <Link
                  href={siteConfig.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex items-center justify-center gap-2 rounded-sm border border-line px-4 py-3 text-sm font-semibold text-ink transition hover:bg-neutral-50"
                >
                  Channel <ExternalLink size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
