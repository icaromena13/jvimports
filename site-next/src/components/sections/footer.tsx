import { Logo } from "@/components/icons";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-jv-navy-deep/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 pb-28 pt-8 sm:flex-row sm:px-6 sm:pb-8">
        <Logo />
        <p className="text-center text-xs font-semibold text-white/70">
          {site.name} · {site.city} · Excelência e compromisso
        </p>
      </div>
    </footer>
  );
}
