import * as React from "react";
import { Slot } from "radix-ui";
import { cn } from "@/lib/utils";

/**
 * Adaptado do Pop Button do Spell UI (MIT).
 * Mudanças: cores da marca no lugar da paleta do Tailwind, Slot do pacote
 * radix-ui, sem a fonte DynaPuff, tamanhos com alvo de toque de 48px ou mais.
 */
type Color = "brand" | "navy" | "white";
type Size = "default" | "lg" | "icon";

export interface PopButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: Color;
  size?: Size;
  asChild?: boolean;
}

const base =
  "inline-flex select-none items-center justify-center gap-2.5 whitespace-nowrap rounded-2xl border-x-2 border-t-2 border-b-[5px] font-extrabold uppercase tracking-wide transition-[scale,border-width,background-color] duration-100 origin-bottom outline-none focus-visible:ring-3 focus-visible:ring-white/80 active:border-b-2 active:scale-y-95 disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0";

const colors: Record<Color, string> = {
  brand: "bg-jv-orange hover:bg-jv-orange-light border-jv-orange-shade text-primary-foreground",
  navy: "bg-jv-navy-light hover:bg-jv-navy border-jv-navy-deep text-white",
  white: "bg-white hover:bg-white/90 border-white/60 text-jv-navy-deep",
};

const sizes: Record<Size, string> = {
  default: "h-12 px-5 text-sm [&_svg]:size-5",
  lg: "h-14 px-7 text-base [&_svg]:size-6",
  icon: "size-14 rounded-full [&_svg]:size-7",
};

function PopButton({
  className,
  color = "brand",
  size = "default",
  asChild = false,
  ...props
}: PopButtonProps) {
  const Comp = asChild ? Slot.Root : "button";
  return <Comp className={cn(base, colors[color], sizes[size], className)} {...props} />;
}

export { PopButton };
