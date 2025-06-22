'use client'

import { Arrow } from "@/components/Arrow/Arrow";
import { BuildMomentum } from "@/components/feature/Feature";
import Heroz from "@/components/Heroz/Heroz";
import { Profile } from "@/components/Profile/Profile";
// import Hero from "@/components/Hero/Hero";
// import { Profile } from "@/components/Profile/Profile";
import Projects from "@/components/Projects/Projects";
import { Section } from "@/components/Sections/Section";
// import { Section } from "@/components/Sections/Section";
import Work from "@/components/Work/Work";
import Lenis from "lenis";
import { useEffect, useRef } from "react";

export default function Home() {


  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis();
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);


  return (
    <div>
      <div className=''>
        <Heroz />
        <div className='-mb-[17rem] md:-mt-[2rem] md:-mb-[30rem]'>
          <BuildMomentum />
        </div>

        <Arrow />
        <div className='-mb-[17rem] md:-mt-[2rem] md:-mb-[30rem]'>
          <BuildMomentum />
        </div>
        <Profile />
        <div className='-mb-[17rem] md:-mt-[2rem] md:-mb-[30rem]'>
          <BuildMomentum />
        </div>

        <Section />
        <div className='-mb-[17rem] md:-mt-[2rem] md:-mb-[30rem]'>
          <BuildMomentum />
        </div>


        <Work />
        <div className='-mb-[17rem] md:-mt-[2rem] md:-mb-[30rem]'>
          <BuildMomentum />
        </div>

        <Projects />
        <div className='-mb-[17rem] md:-mt-[2rem] md:-mb-[30rem]'>
          <BuildMomentum />
        </div>

      </div>
    </div>
  );
}
