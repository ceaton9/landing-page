/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import React, { useMemo } from 'react'

import heroImage from '@assets/hero-image.png'
import Button from '@components/v1/button'

import './style.css'
import { Link } from 'gatsby'

interface HeroProps {
  headline: string
  miniHeadline: string
  headlineDescription: string
}

export default function Hero(props: HeroProps) {
  const lastWord = useMemo(
    () => props.headline?.split(' ').pop(),
    [props.headline]
  )

  const headline = useMemo(() => {
    const lastIndexOfSpace = props.headline?.lastIndexOf(' ')
    if (lastIndexOfSpace === -1) return props.headline
    return props.headline?.substring(0, lastIndexOfSpace)
  }, [props.headline])

  return (
    <section
      id="hero"
      about="hero"
      className="flex flex-col mb-20 md:mb-0 md:flex-row items-center overflow-hidden"
    >
      <section id="description" className="px-8 md:w-3/6 md:pl-24 md:mr-12">
        <p className="text-sm text-[#C4C4C4] mb-4">{props.miniHeadline}</p>
        <h1 className="text-white text-[37px] md:font-bold md:text-[58px]">
          {headline?.concat(' ')}
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#DD31D1] via-[#8343DA] to-[#3D84E7]">
            {lastWord}
          </span>
        </h1>
        <p className="text-white font-light opacity-70 md:text-[14px] md:font-normal md:w-5/6">
          {props.headlineDescription}
        </p>
        <div className="flex gap-7 mt-6">
          <Button primary>
            <Link to="/shoot">Shoot us project</Link>
          </Button>
          <Button>Explore Now</Button>
        </div>
      </section>
      <section about="showcase-image" className="mt-20 md:w-3/6">
        <div className="w-full h-full scale-95 ml-10 md:scale-100 md:ml-0">
          <img src={heroImage} alt="showcase-image" />
        </div>
      </section>
    </section>
  )
}
