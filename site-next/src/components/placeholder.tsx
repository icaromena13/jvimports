import { ImageIcon } from "lucide-react";

import { cn } from "@/lib/utils";

/** Espaço reservado para conteúdo que a loja ainda vai enviar. */
export function Placeholder({ label, className }: { label: string; className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-white/35 bg-jv-navy-light/50 p-4 text-center",
        className,
      )}
    >
      <ImageIcon className="size-6 text-white/60" aria-hidden="true" />
      <span className="text-xs font-bold uppercase tracking-wide text-white/75">{label}</span>
    </div>
  );
}
