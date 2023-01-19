/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import { toHTMLHypen } from '@utils/helpers'
import React, { useMemo } from 'react'

import './style.css'

interface ThirdHeroProps {
  title: string
  image: string
  margin?: string
}

export default function ThirdHero({ image, title, margin }: ThirdHeroProps) {
  const altImageMemo = useMemo(
    () => toHTMLHypen(title), // memento function
    [title]
  )

  return (
    <div className="third-hero flex flex-col items-center mt-5">
      <div className="w-2/4 z-10">
        <h1 className="text-5xl  text-white text-center">{title}</h1>
      </div>
      <img
        className={`ml-36 z-0 ${margin ?? '-mt-5'} scale-90`}
        src={image}
        alt={altImageMemo}
      />
    </div>
  )
}
