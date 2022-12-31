import { size } from "lodash";
import React, { useMemo } from "react";

interface HeroProps {
  headline: string;
  miniHeadline: string;
  headlineDescription: string;
}

export default function Hero(props: HeroProps) {
  return (
    <section className="flex px-24 pt-24">
      <section className="w-3/6 mr-36">
        <p className="text-sm text-[#C4C4C4]">{props.miniHeadline}</p>
        <h1 className="text-white text-[56px] ">{props.headline}</h1>
        <p className="text-white opacity-70">{props.headlineDescription}</p>
      </section>
      <section className="w-3/6">
        <div className="bg-teal-300 w-full h-full"></div>
      </section>
    </section>
  );
}
