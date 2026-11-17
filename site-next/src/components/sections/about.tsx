import { HighlightedText } from "@/components/highlighted-text";
import { ShieldMark } from "@/components/icons";
import { Placeholder } from "@/components/placeholder";
import { SectionTitle } from "@/components/section-title";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { messages, site } from "@/lib/site";

export function About() {
  return (
    <section id="sobre" className="border-y border-white/10 bg-jv-navy-deep/40">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-[0.8fr_1.2fr] md:py-24">
        {/* Retrato sobre o escudo laranja, como nos posts. */}
        <div className="relative mx-auto w-full max-w-xs">
          <ShieldMark className="absolute inset-0 h-full w-full text-jv-orange" />
          <Placeholder label="Foto do João Vitor" className="relative mx-auto aspect-[4/5] w-[78%] translate-y-4 bg-jv-navy/85" />
        </div>

        <div>
          <HighlightedText className="mb-5 text-xs sm:text-sm">Desde {site.since}</HighlightedText>
          <SectionTitle lead="Quem está por trás da" accent="JV Imports" />
          <p className="mt-5 max-w-lg text-base font-medium text-white/80 sm:text-lg">
            {site.owner} está nesse ramo desde {site.since}, com excelência e compromisso com cada cliente de Maceió.
          </p>
          <WhatsAppButton message={messages.about} color="navy" className="mt-8">
            Falar com o João
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
