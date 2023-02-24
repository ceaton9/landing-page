/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import React, { useMemo } from 'react'
import { toHTMLHypen } from '@utils/helpers'

interface FourthHeroProps {
  title: string
  image: string
}

export default function FourthHero({ image, title }: FourthHeroProps) {
  const altImageMemo = useMemo(
    () => toHTMLHypen(title), // memento function
    [title]
  )

  return (
    <div className="flex items-center justify-between px-24 md:flex-col lg:flex-row">
      <img className="lg:w-2/4 md:1/2" alt={altImageMemo} src={image} />
      <h1 className="text-white md:text-[64px] lg:text-[64px] font-bold">{title}</h1>
    </div>
  )
}
