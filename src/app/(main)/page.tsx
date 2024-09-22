"use client"

import { HeaderNoScroll } from "@/components/header/headerNoScroll";
import { Hero } from "@/components/hero";


export default function Home() {

  return (
    <main className="w-full bg-no-repeat 2xl:h-screen xl:h-screen lg:h-screen md:h-[140vh] h-[135vh] bg-gradient-to-br from-[#698474] from-40% to-[#DCA47C] to-100% ">
      <HeaderNoScroll />
      <Hero />
    </main>
  );
}
