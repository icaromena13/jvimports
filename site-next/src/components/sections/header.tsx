import { Logo } from "@/components/icons";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { messages } from "@/lib/site";

const links = [
  { href: "#produtos", label: "Produtos" },
  { href: "#assistencia", label: "Assistência" },
  { href: "#sobre", label: "Sobre" },
  { href: "#clientes", label: "Clientes" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-jv-navy/95">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#topo" aria-label="JV Imports, início" className="rounded-lg outline-none focus-visible:ring-3 focus-visible:ring-ring">
          <Logo />
        </a>
        <nav aria-label="Seções" className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-bold uppercase tracking-[0.14em] text-white/80 transition-colors outline-none hover:text-jv-orange focus-visible:text-jv-orange focus-visible:underline focus-visible:underline-offset-8"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <WhatsAppButton message={messages.header} className="h-11 px-4 text-xs">
          WhatsApp
        </WhatsAppButton>
      </div>
    </header>
  );
}
