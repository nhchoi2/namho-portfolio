import { Apple, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { apps } from "@/data/site";

function StoreLink({
  href,
  icon,
  children,
  variant,
  unavailableLabel = "출시 전"
}: {
  href: string;
  icon: ReactNode;
  children: ReactNode;
  variant: "solid" | "outline";
  unavailableLabel?: string;
}) {
  if (!href) {
    return (
      <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-sm border border-white/10 px-4 py-3 text-sm font-semibold text-neutral-500">
        {icon} {unavailableLabel}
      </span>
    );
  }

  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className={
        variant === "solid"
          ? "focus-ring inline-flex items-center gap-2 rounded-sm bg-white px-4 py-3 text-sm font-semibold text-ink transition hover:bg-blue-50"
          : "focus-ring inline-flex items-center gap-2 rounded-sm border border-white/20 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
      }
    >
      {icon} {children}
    </Link>
  );
}

export function AppsSection() {
  return (
    <section id="apps" className="bg-ink py-24 text-white sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Apps"
          title="출시까지 경험한 모바일 앱"
          body="작은 아이디어를 앱으로 만들고, 스토어 심사와 출시의 문턱까지 직접 지나온 기록입니다."
          tone="dark"
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {apps.map((app) => {
            const Icon = app.icon;
            return (
              <article
                key={app.name}
                className="rounded-sm border border-white/12 bg-white/[0.06] p-6 shadow-[0_18px_70px_rgba(0,0,0,0.24)]"
              >
                <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex gap-5">
                    <div className="grid h-16 w-16 shrink-0 place-items-center rounded-sm bg-white text-ink">
                      <Icon size={30} strokeWidth={1.8} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-blue-200">{app.status}</p>
                      <h3 className="mt-1 text-3xl font-semibold">{app.name}</h3>
                      <p className="mt-2 text-sm font-medium text-neutral-300">
                        {app.platform}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative mt-7 aspect-[16/9] overflow-hidden rounded-sm border border-white/12 bg-neutral-950">
                  <Image
                    src={app.image.src}
                    alt={app.image.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-contain"
                  />
                </div>

                <p className="mt-7 max-w-xl text-base leading-8 text-neutral-300">
                  {app.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <StoreLink
                    href={app.links.googlePlay}
                    icon={<Play size={16} fill="currentColor" />}
                    variant="solid"
                    unavailableLabel={app.storeStatus.googlePlay || "출시 전"}
                  >
                    Google Play
                  </StoreLink>
                  <StoreLink
                    href={app.links.appStore}
                    icon={<Apple size={16} />}
                    variant="outline"
                    unavailableLabel={app.storeStatus.appStore || "출시 전"}
                  >
                    App Store
                  </StoreLink>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
