import { SlideUpText } from "@/components/slide-up-text";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  /** Início da frase, em branco. */
  lead: string;
  /** Palavra-chave, em laranja. */
  accent: string;
  as?: "h1" | "h2";
  /** Anima ao entrar na tela. No hero fica falso para animar na carga. */
  inView?: boolean;
  className?: string;
}

/** Padrão da marca: frase em duas cores, caixa alta, extrabold. */
export function SectionTitle({ lead, accent, as: Tag = "h2", inView = true, className }: SectionTitleProps) {
  const leadWords = lead.split(" ").length;
  // Folga para os acentos de maiúsculas não serem cortados pela máscara.
  const mask = "pt-[0.16em] -mt-[0.16em]";

  return (
    <Tag
      data-reveal=""
      className={cn(
        "flex flex-wrap gap-x-[0.28em] text-balance font-extrabold uppercase leading-[1.05] tracking-tight",
        Tag === "h1" ? "text-[2.6rem] sm:text-6xl lg:text-7xl" : "text-3xl sm:text-4xl lg:text-5xl",
        className,
      )}
    >
      <SlideUpText inView={inView} stagger={0.07} wordClass={mask} charClass={mask} className="w-auto text-white">
        {lead}
      </SlideUpText>
      <SlideUpText
        inView={inView}
        stagger={0.07}
        delay={leadWords * 0.07}
        wordClass={mask}
        charClass={mask}
        className="w-auto text-jv-orange"
      >
        {accent}
      </SlideUpText>
    </Tag>
  );
}
