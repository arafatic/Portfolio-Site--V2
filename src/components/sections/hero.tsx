import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="container mx-auto px-4 sm:px-8 py-24 md:py-32 lg:py-40">
      <div className="flex max-w-[980px] flex-col items-start gap-4">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
          Building digital products,<br /> brands, and experience.
        </h1>
        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          Driven by clarity, curiosity, and thoughtful execution.
        </p>
        <div className="flex w-full items-center justify-start gap-4 py-4">
          <Link
            href="#projects"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 h-10"
          >
            View Projects
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-md border border-border bg-transparent px-8 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-muted hover:text-foreground h-10 group"
          >
            Get in touch
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
