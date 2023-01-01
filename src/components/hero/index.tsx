/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import React, { useMemo } from "react";
import heroImage from "@assets/hero-image.png";

import "./style.css";
import Button from "@components/button";

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
    <section id="hero" about="hero" className="flex">
      <section id="description" className="w-3/6 pl-24 mr-12">
        <p className="text-sm text-[#C4C4C4] mb-4">{props.miniHeadline}</p>
        <h1 className="text-white text-[56px] ">
          {headline.concat(" ")}
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#DD31D1] via-[#8343DA] to-[#3D84E7]">
            {lastWord}
          </span>
        </h1>
        <p className="text-white opacity-70 w-5/6">
          {props.headlineDescription}
        </p>
        <div className="flex gap-7 mt-6">
          <Button primary>Shoot us project</Button>
          <Button>Explore Now</Button>
        </div>
      </section>
      <section about="showcase-image" className="w-3/6">
        <div className="w-full h-full">
          <img src={heroImage} alt="showcase-image" />
        </div>
      </section>
    </section>
  );
}
