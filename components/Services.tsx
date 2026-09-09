import { Car, Check, Sparkles } from "lucide-react";
import { services, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons";

const icons = {
  car: Car,
  sparkles: Sparkles,
} as const;

export default function Services() {
  return (
    <section id="servicos" className="scroll-mt-16 bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-600">
            Serviços
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-950 sm:text-4xl">
            Dois serviços, uma só qualidade
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-zinc-600">
            Tudo o que o seu veículo precisa: aluguer simples e transparente ou
            uma lavagem digna de um carro novo.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {services.map((service) => {
            const Icon = icons[service.icon as keyof typeof icons];
            return (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start justify-between">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 transition group-hover:bg-brand-600 group-hover:text-white">
                    <Icon className="size-7" />
                  </div>
                </div>
                <h3 className="mt-6 text-2xl font-bold text-brand-950">
                  {service.title}
                </h3>
                <p className="mt-3 leading-relaxed text-zinc-600">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm font-medium text-zinc-700"
                    >
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                        <Check className="size-3.5" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappLink(
                    `Olá! Quero saber mais sobre o serviço de ${service.title.toLowerCase()}.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-brand-200 px-5 py-2.5 text-sm font-semibold text-brand-700 transition hover:border-brand-600 hover:bg-brand-600 hover:text-white"
                >
                  <WhatsAppIcon className="size-4" />
                  Pedir informação
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}