import { Clock, Mail, MapPin } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons";

export default function Contact() {
  return (
    <section
      id="contactos"
      className="scroll-mt-16 bg-gradient-to-b from-brand-950 to-brand-900 py-20 text-white lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-300">
            Contactos
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Venha visitar-nos em {site.city}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-brand-100/90">
            Fale connosco pelo WhatsApp ou visite o nosso espaço. Teremos todo
            o gosto em ajudar.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <div className="space-y-5 lg:col-span-2">
            <div className="flex gap-4 rounded-2xl bg-white/10 p-5 ring-1 ring-white/10 backdrop-blur">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-500 text-white">
                <MapPin className="size-5" />
              </span>
              <div>
                <p className="font-semibold">Morada</p>
                <a
                  href={site.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-brand-200 transition hover:text-white"
                >
                  {site.address}
                </a>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl bg-white/10 p-5 ring-1 ring-white/10 backdrop-blur">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-500 text-white">
                <Clock className="size-5" />
              </span>
              <div className="flex-1">
                <p className="font-semibold">Horário</p>
                <ul className="mt-1 space-y-1 text-sm text-brand-200">
                  {site.schedule.map((s) => (
                    <li
                      key={s.days}
                      className="flex justify-between gap-6 border-b border-white/5 pb-1 last:border-0"
                    >
                      <span>{s.days}</span>
                      <span className="font-medium text-white">{s.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl bg-white/10 p-5 ring-1 ring-white/10 backdrop-blur">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-500 text-white">
                <Mail className="size-5" />
              </span>
              <div>
                <p className="font-semibold">Email</p>
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm text-brand-200 transition hover:text-white"
                >
                  {site.email}
                </a>
              </div>
            </div>

            <a
              href={whatsappLink("Olá! Estou no site e gostaria de falar convosco.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:brightness-95"
            >
              <WhatsAppIcon className="size-5" />
              {site.whatsappDisplay}
            </a>
          </div>

          <div className="overflow-hidden rounded-3xl ring-1 ring-white/15 lg:col-span-3">
            <iframe
              title="Mapa de Coimbra"
              src={site.mapsEmbedUrl}
              className="h-80 w-full border-0 lg:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}