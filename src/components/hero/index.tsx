import React, { useMemo } from "react";

interface HeroProps {
  headline: string;
  miniHeadline: string;
  headlineDescription: string;
}

export default function Hero(props: HeroProps) {
  const lastWord = useMemo(
    () => props.headline?.split(" ").pop(),
    [props.headline]
  );

  const headline = useMemo(() => {
    const lastIndexOfSpace = props.headline?.lastIndexOf(" ");
    if (lastIndexOfSpace === -1) return props.headline;
    return props.headline?.substring(0, lastIndexOfSpace);
  }, [props.headline]);

  return (
    <section className="flex px-24 pt-24">
      <section className="w-4/6 mr-36">
        <p className="text-sm text-[#C4C4C4]">{props.miniHeadline}</p>
        <h1 className="text-white text-[56px] ">
          {headline.concat(" ")}
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#DD31D1] via-[#8343DA] to-[#3D84E7]">
            {lastWord}
          </span>
        </h1>
        <p className="text-white opacity-70">{props.headlineDescription}</p>
      </section>
      <section className="w-3/6">
        <div className="bg-teal-300 w-full h-full"></div>
      </section>
    </section>
  );
}
