import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Adaptado do Marquee do Spell UI (MIT).
 * Mudanças: keyframes no CSS global em vez de <style jsx>, animação por
 * instância via variável CSS, segunda cópia oculta para leitores de tela
 * e parada com prefers-reduced-motion (ver globals.css).
 */
interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Segundos para uma volta completa. */
  duration?: number;
  direction?: "left" | "right" | "up" | "down";
  fade?: boolean;
  fadeAmount?: number;
}

export function Marquee({
  children,
  className,
  duration = 30,
  direction = "left",
  fade = true,
  fadeAmount = 8,
  style,
  ...props
}: MarqueeProps) {
  const items = React.Children.toArray(children);
  const isVertical = direction === "up" || direction === "down";
  const isReverse = direction === "right" || direction === "down";
  const mask = `linear-gradient(to ${isVertical ? "bottom" : "right"}, transparent 0%, black ${fadeAmount}%, black ${100 - fadeAmount}%, transparent 100%)`;

  return (
    <div
      className={cn("jv-marquee flex w-full overflow-hidden", isVertical && "flex-col", className)}
      style={{ ...(fade && { maskImage: mask, WebkitMaskImage: mask }), ...style }}
      {...props}
    >
      <div
        className={cn(
          "jv-marquee-track flex shrink-0",
          isVertical ? "animate-marquee-y flex-col" : "animate-marquee-x",
        )}
        style={
          {
            "--marquee-duration": `${duration}s`,
            animationDirection: isReverse ? "reverse" : "normal",
          } as React.CSSProperties
        }
      >
        {[false, true].map((isCopy) =>
          items.map((item, index) => (
            <div
              key={`${isCopy ? "copy" : "item"}-${index}`}
              aria-hidden={isCopy || undefined}
              className={cn("flex shrink-0", isVertical && "w-full")}
            >
              {item}
            </div>
          )),
        )}
      </div>
    </div>
  );
}
