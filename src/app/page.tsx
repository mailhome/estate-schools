"use client"

import { HeaderNoScroll } from "@/components/headerNoScroll";
import { Hero } from "@/components/hero";


export default function Home() {

  return (
    <main className="w-full bg-no-repeat h-full bg-gradient-to-br from-[#698474] from-40% to-[#DCA47C] to-100%">
      <HeaderNoScroll />
      <Hero />
    </main>
  );
}
