import { HighlightedText } from "@/components/highlighted-text";
import { Chevron, ShieldMark } from "@/components/icons";
import { SectionTitle } from "@/components/section-title";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { messages } from "@/lib/site";

const highlights = ["iPhones seminovos e lacrados", "Assistência Apple e Android", "Entrega por motoboy"];

export function Hero() {
  return (
    <section id="topo" className="relative isolate overflow-hidden">
      {/* Escudo gigante como marca-d'água, como nos posts. */}
      <ShieldMark className="pointer-events-none absolute -right-24 -top-10 -z-10 h-[38rem] w-auto text-white/[0.035] sm:-right-10 lg:h-[46rem]" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-12 sm:px-6 md:grid-cols-[1.15fr_0.85fr] md:pb-24 md:pt-20">
        <div>
          <HighlightedText inView={false} delay={0.5} className="mb-6 text-xs sm:text-sm">
            Atendemos toda Maceió!
          </HighlightedText>

          <SectionTitle as="h1" inView={false} lead="Seu próximo iPhone está na" accent="JV Imports" />

          <p className="mt-6 max-w-md text-base font-semibold text-white/80 sm:text-lg">
            Excelência e compromisso desde 2020. Os melhores preços e atendimento de Maceió.
          </p>

          <ul className="mt-6 space-y-2.5">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm font-bold uppercase tracking-wide sm:text-base">
                <Chevron />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <WhatsAppButton message={messages.hero} size="lg" />
            <a
              href="#produtos"
              className="inline-flex h-12 items-center justify-center rounded-2xl px-4 text-sm font-bold uppercase tracking-wide text-white underline-offset-4 outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring"
            >
              Ver produtos
            </a>
          </div>
        </div>

        <PhoneMockup />
      </div>
    </section>
  );
}

/**
 * Mockup provisório desenhado em CSS.
 * PENDENTE: trocar por foto real de aparelho quando a loja enviar.
 */
function PhoneMockup() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-56 sm:w-64 md:w-72">
      <div className="absolute inset-x-[-18%] bottom-[-6%] top-[12%] -z-10 rounded-[3rem] bg-(image:--jv-bg-orange) rotate-(--jv-tilt)" />
      <div className="relative aspect-[9/19] rotate-6 rounded-[2.6rem] border-[6px] border-jv-navy-deep bg-jv-navy-deep shadow-2xl shadow-black/40 ring-1 ring-white/20">
        <div className="absolute left-1/2 top-3 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-jv-navy-deep" />
        <div className="flex h-full flex-col items-center justify-center gap-4 overflow-hidden rounded-[2.1rem] bg-(image:--jv-bg)">
          <ShieldMark className="h-24 w-auto text-jv-orange" />
          <span className="text-sm font-medium tracking-[0.12em] text-white">JV IMPORTS</span>
          <span className="text-[0.55rem] font-semibold tracking-[0.35em] text-white/80">IPHONES</span>
        </div>
      </div>
    </div>
  );
}
