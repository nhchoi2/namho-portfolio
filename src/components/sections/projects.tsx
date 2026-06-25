import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/site";
import { cn } from "@/lib/utils";

const accentClasses: Record<string, string> = {
  blue: "bg-blue-50 text-brand-blue border-blue-100",
  green: "bg-emerald-50 text-brand-green border-emerald-100",
  gold: "bg-amber-50 text-brand-gold border-amber-100",
  cyan: "bg-cyan-50 text-brand-cyan border-cyan-100"
};

type ProjectImage = {
  src: string;
  alt: string;
} | null;

function ProjectVisual({
  accent,
  image
}: {
  accent: string;
  image: ProjectImage;
}) {
  if (image) {
    return (
      <div className="relative h-44 overflow-hidden rounded-sm border border-line bg-neutral-950">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-contain"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative h-44 overflow-hidden rounded-sm border",
        accentClasses[accent] ?? accentClasses.blue
      )}
      aria-hidden="true"
    >
      <div className="absolute inset-5 rounded-sm border border-current/20 bg-white/82 p-4">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-current/35" />
          <span className="h-2 w-2 rounded-full bg-current/25" />
          <span className="h-2 w-2 rounded-full bg-current/20" />
        </div>
        <div className="mt-8 h-3 w-28 rounded-full bg-current/80" />
        <div className="mt-4 h-2.5 w-44 rounded-full bg-current/20" />
        <div className="mt-3 h-2.5 w-36 rounded-full bg-current/20" />
        <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2">
          <span className="h-10 rounded-sm bg-current/10" />
          <span className="h-10 rounded-sm bg-current/15" />
          <span className="h-10 rounded-sm bg-current/10" />
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-white py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Projects"
          title="기획에서 결과물까지 직접 연결한 프로젝트"
          body="앱, 웹사이트, 내부 도구까지 생각에 머물던 것들을 실제 화면과 서비스로 옮겨온 기록입니다."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group rounded-sm border border-line bg-white p-4 shadow-[0_12px_40px_rgba(10,10,11,0.04)] transition hover:-translate-y-1 hover:shadow-soft"
            >
              <ProjectVisual accent={project.accent} image={project.image} />
              <div className="p-2 pt-5">
                <p className="text-sm font-semibold text-brand-blue">{project.role}</p>
                <h3 className="mt-2 text-2xl font-semibold text-ink">{project.name}</h3>
                <p className="mt-3 min-h-20 text-sm leading-7 text-neutral-600">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-sm border border-line bg-neutral-50 px-2.5 py-1 text-xs font-semibold text-neutral-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.href}
                  target={project.href.startsWith("http") ? "_blank" : undefined}
                  rel={project.href.startsWith("http") ? "noreferrer" : undefined}
                  className="focus-ring mt-6 inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-ink transition hover:text-brand-blue"
                >
                  View result <ExternalLink size={15} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
