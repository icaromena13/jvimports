import * as React from "react";
import { cn } from "@/lib/utils";

type IconProps = React.SVGProps<SVGSVGElement>;

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.25" cy="6.75" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

/**
 * Escudo provisório. PENDENTE: trocar pelo logo em vetor da loja
 * (o original tem o monograma "JV" em espaço negativo com cortes diagonais).
 */
export function ShieldMark({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 100 116" fill="currentColor" aria-hidden="true" className={cn(className)} {...props}>
      <path
        fillRule="evenodd"
        d="M8 4h84l8 10v48c0 24-18 41-50 52C18 103 0 86 0 62V14l8-10Zm18 22v10h14v26c0 5-3 8-8 8h-8v10h10c10 0 16-6 16-16V26H26Zm30 0 14 52h8l14-52H74l-8 34-8-34H56Z"
      />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <ShieldMark className="h-9 w-auto text-jv-orange" />
      <span className="flex flex-col leading-none">
        <span className="text-base font-medium tracking-[0.12em] text-white">JV IMPORTS</span>
        <span className="mt-1 text-[0.55rem] font-semibold tracking-[0.35em] text-white/80">IPHONES</span>
      </span>
    </span>
  );
}

/** Marcador de lista da marca: chevron laranja. */
export function Chevron({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 12 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={3.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("h-[0.8em] w-auto shrink-0 text-jv-orange", className)}
      {...props}
    >
      <path d="M2.5 2.5 9 8l-6.5 5.5" />
    </svg>
  );
}
