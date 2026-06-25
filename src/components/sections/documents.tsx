import { Download } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { documents } from "@/data/site";

export function DocumentsSection() {
  return (
    <section id="documents" className="bg-white py-24 sm:py-32">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Documents"
            title="필요한 문서를 빠르게 확인할 수 있게"
            body="이력서와 경력기술서의 핵심은 이 페이지에 녹였습니다. 공개용 PDF는 개인정보를 정리한 뒤 연결합니다."
          />

          <div className="grid gap-4">
            {documents.map((document) => {
              const Icon = document.icon;
              const content = (
                <>
                  <span className="grid h-11 w-11 place-items-center rounded-sm bg-blue-50 text-brand-blue">
                    <Icon size={20} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-lg font-semibold text-ink">
                      {document.title}
                    </span>
                    <span className="mt-1 block text-sm font-medium text-neutral-500">
                      {document.label}
                    </span>
                    <span className="mt-2 block text-sm leading-6 text-neutral-500">
                      {document.description}
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-sm border border-line px-3 py-2 text-sm font-semibold text-neutral-700">
                    <Download size={16} /> {document.href ? "PDF" : "정리중"}
                  </span>
                </>
              );

              return document.href ? (
                <Link
                  key={document.title}
                  href={document.href}
                  className="focus-ring flex items-center gap-4 rounded-sm border border-line bg-white p-5 shadow-[0_12px_40px_rgba(10,10,11,0.04)] transition hover:border-neutral-300"
                >
                  {content}
                </Link>
              ) : (
                <div
                  key={document.title}
                  className="flex items-center gap-4 rounded-sm border border-dashed border-line bg-neutral-50 p-5 text-neutral-500"
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
