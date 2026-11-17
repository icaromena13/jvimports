import { Chevron } from "@/components/icons";
import { Marquee } from "@/components/marquee";

const words = ["iPhone seminovo", "iPhone lacrado", "iPad", "MacBook", "Apple Watch", "AirPods", "Assistência técnica"];

/** Faixa laranja decorativa entre o hero e os produtos. O conteúdo se repete nas seções. */
export function Ticker() {
  return (
    <div aria-hidden="true" className="bg-(image:--jv-bg-orange) py-3">
      <Marquee duration={40} fade={false}>
        {words.map((word) => (
          <span
            key={word}
            className="mx-4 flex items-center gap-8 text-sm font-extrabold uppercase tracking-wide text-primary-foreground"
          >
            {word}
            <Chevron className="text-primary-foreground" />
          </span>
        ))}
      </Marquee>
    </div>
  );
}
