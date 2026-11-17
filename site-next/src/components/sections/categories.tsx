import { Headphones, Laptop, Plug, Smartphone, Tablet, Watch, type LucideIcon } from "lucide-react";

import { Chevron } from "@/components/icons";
import { SectionTitle } from "@/components/section-title";
import { Card, CardContent } from "@/components/ui/card";
import { categories, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const icons: Record<(typeof categories)[number]["id"], LucideIcon> = {
  "iphone-seminovo": Smartphone,
  "iphone-lacrado": Smartphone,
  ipad: Tablet,
  macbook: Laptop,
  "apple-watch": Watch,
  airpods: Headphones,
  acessorios: Plug,
};

export function Categories() {
  return (
    <section id="produtos" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <SectionTitle lead="Nossos" accent="Produtos" />
      <p className="mt-4 max-w-xl font-semibold text-white/75">
        Toque em uma categoria e fale direto com a gente no WhatsApp.
      </p>

      <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {categories.map((category) => {
          const Icon = icons[category.id];
          return (
            <li
              key={category.id}
              className={cn(category.featured && "col-span-2", category.id === "acessorios" && "col-span-2 lg:col-span-4")}
            >
              <a
                href={whatsappLink(category.message)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${category.title}: chamar no WhatsApp`}
                className="group block h-full rounded-xl outline-none focus-visible:ring-3 focus-visible:ring-ring"
              >
                <Card
                  className={cn(
                    "h-full justify-between gap-6 transition-[scale,background-color] duration-150 group-hover:bg-jv-navy-light/60 group-active:scale-[0.98]",
                    category.featured &&
                      "bg-(image:--jv-bg-orange) text-primary-foreground ring-0 group-hover:brightness-105",
                  )}
                >
                  <CardContent className="flex h-full flex-col justify-between gap-6">
                    <span
                      className={cn(
                        "flex size-12 items-center justify-center rounded-full",
                        category.featured ? "bg-jv-navy text-jv-orange" : "bg-jv-navy-deep text-jv-orange",
                      )}
                    >
                      <Icon className="size-6" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="flex items-center justify-between gap-2 text-base font-extrabold uppercase leading-tight sm:text-lg">
                        {category.title}
                        <Chevron
                          className={cn(
                            "transition-transform group-hover:translate-x-1",
                            category.featured && "text-primary-foreground",
                          )}
                        />
                      </h3>
                      {category.note && (
                        <span className="mt-1 block text-sm font-semibold opacity-90">{category.note}</span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
