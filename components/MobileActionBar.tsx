import { Phone } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons";

export default function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-brand-950/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur sm:hidden">
      <div className="flex gap-3">
        <a
          href={`tel:+${site.whatsappNumber}`}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-bold text-brand-900"
        >
          <Phone className="size-4" />
          Ligar
        </a>
        <a
          href={whatsappLink("Olá! Estou no site e gostaria de falar convosco.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-bold text-white"
        >
          <WhatsAppIcon className="size-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}