"use client";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".h1Text", {
    scrollTrigger: {
      trigger: ".h1Text",
      start: "top center",
      end: "bottom 100px",
      scrub: true,
      markers: true,
    },
    opacity: 1,
  });

  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Header />
      <hr className="mt-1 border-t-[1.5px] mx-auto my-0 max-w-[980px]" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <h1 className="h1Text text-[9rem] font-semibold opacity-[0.15] whitespace-nowrap">
          MacBook Air
        </h1>
      </div>
    </main>
  );
}
