import Image from "next/image";

import { Marquee } from "@/components/marquee";
import { Placeholder } from "@/components/placeholder";
import { SectionTitle } from "@/components/section-title";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { clientPhotos, testimonials } from "@/lib/site";

const PLACEHOLDER_COUNT = 6;
const arrow =
  "static m-0 size-11 translate-none border-white/25 bg-jv-navy-light text-white hover:bg-jv-navy hover:text-jv-orange dark:border-white/25 dark:bg-jv-navy-light dark:hover:bg-jv-navy [&_svg]:size-5";

export function Clients() {
  const hasPhotos = clientPhotos.length > 0;
  const hasTestimonials = testimonials.length > 0;

  return (
    <section id="clientes" className="overflow-hidden py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle lead="Nossos" accent="Clientes" />
        <p className="mt-4 max-w-xl font-semibold text-white/75">Quem compra na JV Imports sai com a sacola na mão.</p>
      </div>

      {/* Galeria: faixa contínua de fotos de entrega. */}
      <Marquee duration={45} className="mt-10" role="group" aria-label="Fotos de clientes">
        {hasPhotos
          ? clientPhotos.map((photo) => (
              <div key={photo.src} className="relative mx-2 aspect-[4/5] w-44 overflow-hidden rounded-xl bg-(image:--jv-bg-orange) sm:w-56">
                <Image src={photo.src} alt={photo.alt} fill sizes="224px" className="object-cover" />
              </div>
            ))
          : Array.from({ length: PLACEHOLDER_COUNT }, (_, index) => (
              <Placeholder
                key={index}
                label={`Foto de cliente ${index + 1}`}
                className="mx-2 aspect-[4/5] w-44 border-white/60 bg-(image:--jv-bg-orange) sm:w-56 [&_span]:text-jv-navy-deep [&_svg]:text-jv-navy-deep"
              />
            ))}
      </Marquee>

      {/* Depoimentos: carrossel com texto parado, para dar tempo de ler. */}
      <div className="mx-auto mt-12 max-w-6xl px-4 sm:px-6">
        <Carousel opts={{ align: "start" }} aria-label="Depoimentos de clientes">
          <CarouselContent>
            {(hasTestimonials ? testimonials : Array.from({ length: 3 }, () => null)).map((testimonial, index) => (
              <CarouselItem key={index} className="basis-[85%] sm:basis-1/2 lg:basis-1/3">
                <Card className="h-full">
                  <CardContent className="flex h-full flex-col gap-4">
                    <span aria-hidden="true" className="text-5xl font-extrabold leading-none text-jv-orange">
                      “
                    </span>
                    {testimonial ? (
                      <>
                        <p className="text-base font-medium text-white/85">{testimonial.text}</p>
                        <p className="mt-auto text-sm font-extrabold uppercase tracking-wide">{testimonial.name}</p>
                      </>
                    ) : (
                      <p className="text-sm font-bold uppercase tracking-wide text-white/70">
                        Espaço reservado: depoimento de cliente {index + 1}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-5 flex gap-3">
            <CarouselPrevious className={arrow} />
            <CarouselNext className={arrow} />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
