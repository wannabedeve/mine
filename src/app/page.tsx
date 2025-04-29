import { Arrow } from "@/components/Arrow/Arrow";
import { BuildMomentum } from "@/components/feature/Feature";
import Gallery from "@/components/Gallery/Gallery";
import Heroz from "@/components/Heroz/Heroz";
import Projects from "@/components/Projects/Projects";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Trial from "@/components/Tests/Trial";
import Trial2 from "@/components/Trial2/Trial2";
import Work from "@/components/Work/Work";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className='bg-[url("/slide/bg16.avif")] bg-contain bg-center'>
        {/* <SmoothScrollProvider> */}
        <Heroz />
        {/* </SmoothScrollProvider> */}

        <Trial />
        {/* <BuildMomentum /> */}
        <div className='-mt-[3rem] -mb-[17rem] md:-mt-[2rem] md:-mb-[30rem]'>
          <BuildMomentum />
        </div>

        <Arrow />
        <div className='-mt-[3rem] -mb-[17rem] md:-mt-[2rem] md:-mb-[30rem]'>
          <BuildMomentum />
        </div>

        <Trial2 />
        {/* <BuildMomentum /> */}
        <div className='-mt-[3rem] -mb-[17rem] md:-mt-[2rem] md:-mb-[30rem]'>
          <BuildMomentum />
        </div>

        <Work />
        {/* <Gallery /> */}
        <div className='-mt-[3rem] -mb-[17rem] md:-mt-[2rem] md:-mb-[30rem]'>
          <BuildMomentum />
        </div>

        <Projects />
        <div className='-mt-[3rem] -mb-[17rem] md:-mt-[2rem] md:-mb-[30rem]'>
          <BuildMomentum />
        </div>

      </div>
    </div>
  );
}
