import Image from "next/image";
import { Users, Cog } from "lucide-react";
import { fleet, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons";

export default function Fleet() {
  return (
    <section
      id="frota"
      className="scroll-mt-16 bg-gradient-to-b from-zinc-50 to-white py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-wider text-brand-600">
              Frota
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-950 sm:text-4xl">
              Viaturas em destaque
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-zinc-600">
              Carros recentes, revisados e com seguro incluído. Preços por dia
              com kilometragem livre.
            </p>
          </div>
          <a
            href={whatsappLink(
              "Olá! Quero informações sobre a vossa frota completa.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-5 py-2.5 text-sm font-semibold text-brand-700 transition hover:border-brand-600 hover:bg-brand-600 hover:text-white"
          >
            <WhatsAppIcon className="size-4" />
            Consultar frota completa
          </a>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {fleet.map((car) => (
            <article
              key={car.name}
              className="group flex flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={car.image}
                  alt={car.name}
                  width={600}
                  height={400}
                  className="size-full object-cover transition duration-300 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-brand-950/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  {car.category}
                </span>
                {"tag" in car && car.tag && (
                  <span className="absolute right-3 top-3 rounded-full bg-amber-400/90 px-3 py-1 text-xs font-semibold text-brand-950 backdrop-blur">
                    {car.tag}
                  </span>
                )}
                {"imageCredit" in car && car.imageCredit && (
                  <p className="absolute bottom-1 left-2 text-[9px] text-white/70">
                    {car.imageCredit}
                  </p>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold text-brand-950">{car.name}</h3>

                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-medium text-zinc-600">
                  <span className="inline-flex items-center gap-1.5">
                    <Users className="size-4 text-brand-600" />
                    {car.seats} lugares
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Cog className="size-4 text-brand-600" />
                    {car.transmission}
                  </span>
                </div>

                <div className="mt-5 flex items-end justify-between border-t border-zinc-100 pt-4">
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-wide text-zinc-500">
                      Por dia
                    </p>
                    <p className="text-2xl font-extrabold text-brand-900">
                      {car.pricePerDay}
                      <span className="text-sm font-bold text-zinc-500">€</span>
                    </p>
                  </div>
                  <a
                    href={whatsappLink(
                      `Olá! Quero reservar o ${car.name} (${car.category}).`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-brand-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-brand-700"
                  >
                    <WhatsAppIcon className="size-3.5" />
                    Reservar
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}