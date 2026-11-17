import { About } from "@/components/sections/about";
import { Categories } from "@/components/sections/categories";
import { Clients } from "@/components/sections/clients";
import { Contact } from "@/components/sections/contact";
import { FloatingWhatsApp } from "@/components/sections/floating-whatsapp";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Service } from "@/components/sections/service";
import { Ticker } from "@/components/sections/ticker";
import { Why } from "@/components/sections/why";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Ticker />
        <Categories />
        <Service />
        <Why />
        <About />
        <Clients />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
