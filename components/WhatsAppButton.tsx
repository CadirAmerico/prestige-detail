import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink("Olá! Gostaria de fazer uma reserva de aluguer ou lavagem.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-105 hover:brightness-95"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}