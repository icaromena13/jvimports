import { WhatsAppIcon } from "@/components/icons";
import { PopButton } from "@/components/pop-button";
import { messages, whatsappLink } from "@/lib/site";

/** Botão fixo de WhatsApp, presente na página inteira. */
export function FloatingWhatsApp() {
  return (
    <PopButton asChild size="icon" className="fixed bottom-4 right-4 z-50 shadow-xl shadow-black/40 sm:bottom-6 sm:right-6">
      <a
        href={whatsappLink(messages.floating)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chamar no WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    </PopButton>
  );
}
