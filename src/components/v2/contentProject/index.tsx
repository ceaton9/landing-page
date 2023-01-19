/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import { toHTMLHypen } from '@utils/helpers'
import { join, split, toLower } from 'lodash'
import React, { useMemo } from 'react'

interface ContentProjectProps {
  title: string
  description: string
  image: string
}

export default function ContentProject({
  description,
  image,
  title,
}: ContentProjectProps) {
  const altImageMemo = useMemo(
    () => toHTMLHypen(title), // memento function
    [title]
  )

  return (
    <div className="content-project inline-block text-white flex justify-center items-center flex-col">
      <div className="md:px-10 flex justify-center items-center flex-col">
        <h1 className="title text-2xl md:text-3xl text-center mb-2 md:mb-3">
          {title}
        </h1>
        <p className="description text-sm md:text-base opacity-75 mb-2 md:mb-3 text-center font-light">
          {description}
        </p>
      </div>
      <div className="mt-10 md:mt-20">
        <img
          className="hover:object-scale-down drop-shadow-2xl scale-125"
          src={image}
          alt={altImageMemo}
        />
      </div>
    </div>
  )
}
