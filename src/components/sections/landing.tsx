import { ArrowDown } from "lucide-react";
import Link from "next/link";

export function LandingSection() {
  return (
    <section
      id="home"
      className="grid-paper relative flex min-h-[90svh] items-center overflow-hidden pt-[var(--header-height)]"
    >
      <div className="section-shell relative z-10 py-20">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase text-brand-blue">
            Education × HR × IT
          </p>
          <h1 className="text-6xl font-semibold leading-none text-ink sm:text-7xl md:text-8xl">
            최남호
          </h1>
          <p className="mt-8 max-w-2xl text-2xl font-medium leading-10 text-neutral-700 sm:text-3xl">
            사람을 이해하고,
            <br />
            기술로 해결책을 만드는 사람.
          </p>
          <div className="mt-10 flex flex-wrap gap-3" aria-label="Brand domains">
            {["Education", "HR", "IT"].map((item) => (
              <span
                key={item}
                className="rounded-sm border border-line bg-white/82 px-4 py-2 text-sm font-semibold text-neutral-700 shadow-[0_10px_30px_rgba(10,10,11,0.04)] backdrop-blur"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <Link
        href="#story"
        className="focus-ring absolute bottom-8 left-1/2 z-20 grid h-11 w-11 -translate-x-1/2 place-items-center rounded-full border border-line bg-white/80 text-ink shadow-soft backdrop-blur transition hover:-translate-y-1"
        aria-label="Scroll to story"
      >
        <ArrowDown size={18} />
      </Link>
    </section>
  );
}
