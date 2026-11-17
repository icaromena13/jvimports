import { BatteryCharging, Smartphone, Wrench, type LucideIcon } from "lucide-react";

import { HighlightedText } from "@/components/highlighted-text";
import { Chevron } from "@/components/icons";
import { SectionTitle } from "@/components/section-title";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Item, ItemActions, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemTitle } from "@/components/ui/item";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { faq, messages, services, whatsappLink } from "@/lib/site";

const icons: Record<(typeof services)[number]["id"], LucideIcon> = {
  tela: Smartphone,
  bateria: BatteryCharging,
  apple: Wrench,
  android: Wrench,
};

export function Service() {
  return (
    <section id="assistencia" className="border-y border-white/10 bg-jv-navy-deep/40">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
        <div>
          <HighlightedText className="mb-5 text-xs sm:text-sm">Apple e Android</HighlightedText>
          <SectionTitle lead="Assistência" accent="Técnica" />
          <p className="mt-4 max-w-md font-semibold text-white/75">
            Assistência técnica especializada. Conte o que aconteceu com o aparelho e receba seu orçamento pelo WhatsApp.
          </p>

          <ItemGroup className="mt-8 gap-3">
            {services.map((service) => {
              const Icon = icons[service.id];
              return (
                <div role="listitem" key={service.id}>
                <Item variant="outline" asChild className="gap-4 rounded-xl p-4 [a]:hover:bg-jv-navy-light/60">
                  <a
                    href={whatsappLink(service.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ItemMedia className="size-11 rounded-full bg-jv-navy text-jv-orange">
                      <Icon className="size-5" aria-hidden="true" />
                    </ItemMedia>
                    <ItemContent>
                      <ItemTitle className="line-clamp-none text-base font-extrabold uppercase">{service.title}</ItemTitle>
                      <ItemDescription className="line-clamp-none font-medium">{service.description}</ItemDescription>
                    </ItemContent>
                    <ItemActions>
                      <Chevron className="text-lg" />
                    </ItemActions>
                  </a>
                </Item>
                </div>
              );
            })}
          </ItemGroup>

          <WhatsAppButton message={messages.budget} size="lg" className="mt-8 w-full sm:w-auto">
            Pedir orçamento
          </WhatsAppButton>
        </div>

        <div>
          <h3 className="text-xl font-extrabold uppercase tracking-tight sm:text-2xl">
            Dúvidas <span className="text-jv-orange">frequentes</span>
          </h3>
          <Accordion type="single" collapsible className="mt-5">
            {faq.map((entry, index) => (
              <AccordionItem key={entry.question} value={`faq-${index}`}>
                <AccordionTrigger className="min-h-12 items-center gap-4 py-3 text-base font-bold **:data-[slot=accordion-trigger-icon]:size-5 **:data-[slot=accordion-trigger-icon]:text-jv-orange">
                  {entry.question}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-base font-medium text-white/75">{entry.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
