import { BadgeDollarSign, Bike, CalendarCheck, Wrench, type LucideIcon } from "lucide-react";

import { SectionTitle } from "@/components/section-title";
import { Card, CardContent } from "@/components/ui/card";
import { reasons } from "@/lib/site";

const icons: Record<(typeof reasons)[number]["id"], LucideIcon> = {
  desde: CalendarCheck,
  preco: BadgeDollarSign,
  entrega: Bike,
  tecnica: Wrench,
};

export function Why() {
  return (
    <section id="diferenciais" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <SectionTitle lead="Por que a" accent="JV Imports?" />

      <ul className="mt-10 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        {reasons.map((reason) => {
          const Icon = icons[reason.id];
          return (
            <li key={reason.id}>
              <Card className="h-full">
                <CardContent className="flex flex-col gap-4">
                  <span className="flex size-12 items-center justify-center rounded-full bg-jv-navy-deep text-jv-orange">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-extrabold uppercase leading-tight">{reason.title}</h3>
                  <p className="text-sm font-medium text-white/75">{reason.description}</p>
                </CardContent>
              </Card>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
