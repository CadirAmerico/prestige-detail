import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/site";

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="scroll-mt-16 bg-white py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-600">
            Depoimentos
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-950 sm:text-4xl">
            O que dizem os nossos clientes
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative flex flex-col rounded-3xl border border-zinc-200 bg-zinc-50 p-7"
            >
              <Quote className="absolute right-6 top-6 size-8 text-brand-200" />
              <div className="flex gap-1" aria-label="5 estrelas">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 leading-relaxed text-zinc-700">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-zinc-200 pt-4">
                <p className="font-bold text-brand-950">{t.name}</p>
                <p className="text-sm text-zinc-500">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}