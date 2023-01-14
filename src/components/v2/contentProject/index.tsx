/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

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
    () => toLower(join(split(title, ' '), '-')), // memento function
    [title]
  )

  return (
    <div className="content-project inline-block flex justify-center items-center flex-col">
      <div className="px-10 flex justify-center items-center flex-col">
        <h1 className="title text-3xl text-center mb-3">{title}</h1>
        <p className="description text-base opacity-75 mb-3 text-center font-light">
          {description}
        </p>
      </div>
      <div className="mt-20">
        <img
          className="hover:object-scale-down scale-125"
          src={image}
          alt={altImageMemo}
        />
      </div>
    </div>
  )
}
