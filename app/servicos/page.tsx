import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Tag } from "lucide-react";
import { detailedServices, site, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: `Serviços e Preços · ${site.name} ${site.city}`,
  description:
    "Tabela de serviços e preços: lavagem, detalhe e mecânica auto em Coimbra.",
};

export default function ServicosPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 py-16 text-white lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-brand-100 ring-1 ring-white/15 transition hover:bg-white/20 hover:text-white"
          >
            <ArrowLeft className="size-4" />
            Voltar ao início
          </Link>
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Serviços e Preços
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-brand-100/85">
            Lavagem, detalhe e mecânica auto num só lugar. Preços indicativos
            — confirme o valor exato pelo WhatsApp.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 lg:py-20">
        <div className="absolute inset-0">
          <Image
            src="/fortador.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/85" />
        </div>
        <div className="relative mx-auto max-w-5xl space-y-14 px-4 sm:px-6 lg:px-8">
          {detailedServices.map((group) => (
            <div key={group.category}>
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-brand-600 text-white">
                  <Tag className="size-5" />
                </span>
                <h2 className="text-2xl font-extrabold tracking-tight text-brand-950">
                  {group.category}
                </h2>
              </div>

              <ul className="mt-6 overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
                {group.items.map((item, i) => (
                  <li
                    key={item.name}
                    className={`flex flex-wrap items-center justify-between gap-4 p-5 sm:p-6 ${
                      i > 0 ? "border-t border-zinc-100" : ""
                    }`}
                  >
                    <div className="min-w-0 flex-1">
                      <p className="font-bold text-brand-950">{item.name}</p>
                      <p className="mt-1 text-sm text-zinc-600">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-brand-50 px-4 py-1.5 text-sm font-extrabold text-brand-800 ring-1 ring-brand-100">
                        {item.price}
                      </span>
                      <a
                        href={whatsappLink(
                          `Olá! Quero marcar: ${item.name} (${item.price}).`,
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Marcar ${item.name} pelo WhatsApp`}
                        className="flex size-10 items-center justify-center rounded-full bg-[#25D366] text-white transition hover:brightness-95"
                      >
                        <WhatsAppIcon className="size-5" />
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <p className="text-center text-sm text-zinc-500">
            Preços “desde” — o valor final depende do estado e tamanho da
            viatura. Fale connosco sem compromisso.
          </p>
        </div>
      </section>
    </>
  );
}