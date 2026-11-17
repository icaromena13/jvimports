import { Clock, MapPin } from "lucide-react";

import { InstagramIcon, ShieldMark } from "@/components/icons";
import { Placeholder } from "@/components/placeholder";
import { SectionTitle } from "@/components/section-title";
import { Item, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemTitle } from "@/components/ui/item";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { messages, site } from "@/lib/site";

const media = "size-11 rounded-full bg-jv-navy-deep text-jv-orange";
const title = "line-clamp-none text-base font-extrabold uppercase";
const description = "line-clamp-none font-medium";

export function Contact() {
  return (
    <section id="contato" className="relative isolate overflow-hidden border-t border-white/10 bg-jv-navy-deep/40">
      <ShieldMark className="pointer-events-none absolute -bottom-24 -left-20 -z-10 h-[30rem] w-auto text-white/[0.03]" />

      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
        <div>
          <SectionTitle lead="Fale com a" accent="gente!" />
          <p className="mt-4 max-w-md font-semibold text-white/75">
            Atendemos toda Maceió. Chame no WhatsApp e resolva tudo por lá.
          </p>

          <ItemGroup role="presentation" className="mt-8 gap-1">
            <Item className="gap-4 px-0">
              <ItemMedia className={media}>
                <MapPin className="size-5" aria-hidden="true" />
              </ItemMedia>
              <ItemContent>
                <ItemTitle className={title}>Endereço</ItemTitle>
                <ItemDescription className={description}>{site.address ?? "A confirmar com a loja"}</ItemDescription>
              </ItemContent>
            </Item>
            <Item className="gap-4 px-0">
              <ItemMedia className={media}>
                <Clock className="size-5" aria-hidden="true" />
              </ItemMedia>
              <ItemContent>
                <ItemTitle className={title}>Horário</ItemTitle>
                <ItemDescription className={description}>{site.hours ?? "A confirmar com a loja"}</ItemDescription>
              </ItemContent>
            </Item>
            <Item asChild className="gap-4 px-0 [a]:hover:bg-transparent">
              <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="group/ig">
                <ItemMedia className={media}>
                  <InstagramIcon className="size-5" />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle className={title}>Instagram</ItemTitle>
                  <ItemDescription className={`${description} group-hover/ig:text-jv-orange`}>
                    @{site.instagramHandle}
                  </ItemDescription>
                </ItemContent>
              </a>
            </Item>
          </ItemGroup>

          <WhatsAppButton message={messages.contact} size="lg" className="mt-8 w-full sm:w-auto" />
        </div>

        {site.mapEmbedUrl ? (
          <iframe
            src={site.mapEmbedUrl}
            title="Mapa da JV Imports"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="aspect-video h-full min-h-72 w-full rounded-xl border border-white/10"
          />
        ) : (
          <Placeholder label="Mapa: aguardando endereço da loja" className="min-h-72" />
        )}
      </div>
    </section>
  );
}
