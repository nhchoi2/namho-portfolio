import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { contactLinks } from "@/data/site";

export function ContactSection() {
  return (
    <section id="contact" className="bg-ink py-24 text-white sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Contact"
          title="교육과 기술 사이의 다음 연결을 기다립니다"
          body="프로젝트, 채용, 협업, 교육생과 기업을 잇는 일까지 편하게 이야기를 시작할 수 있는 접점을 모았습니다."
          tone="dark"
        />

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {contactLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="focus-ring group flex items-center justify-between rounded-sm border border-white/12 bg-white/[0.06] p-5 text-white transition hover:bg-white/[0.1]"
              >
                <span className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-sm bg-white text-ink">
                    <Icon size={19} />
                  </span>
                  <span className="text-base font-semibold">{link.label}</span>
                </span>
                <ArrowUpRight
                  size={18}
                  className="text-neutral-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                />
              </Link>
            );
          })}
        </div>

        <p className="mt-14 border-t border-white/12 pt-6 text-sm text-neutral-400">
          © 2026 NAMHO. Education × HR × IT.
        </p>
      </div>
    </section>
  );
}
