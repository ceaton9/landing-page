/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import { toLower, join, split } from 'lodash'
import React, { useMemo } from 'react'

interface FourthHeroProps {
  title: string
  image: string
}

export default function FourthHero({ image, title }: FourthHeroProps) {
  const altImageMemo = useMemo(
    () => toLower(join(split(title, ' '), '-')), // memento function
    [title]
  )

  return (
    <div className="flex items-center justify-between px-24">
      <img className="w-2/4" alt={altImageMemo} src={image} />
      <h1 className="text-white text-[64px] font-bold">{title}</h1>
    </div>
  )
}
