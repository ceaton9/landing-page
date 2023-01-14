/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import React from 'react'

interface OurFeatureProps {
  title: string
  items: any[]
}

export default function OurFeature({ items, title }: OurFeatureProps) {
  return (
    <div className="our-feature text-white flex flex-col justify-center items-center px-24">
      <h5 className="mb-5 font-light w-2/4 text-2xl text-center">{title}</h5>
      <div className="flex gap-20 mt-4">
        {items.map((item, i) => (
          <div
            key={i}
            className="our-feature-item flex justify-center flex-col items-center"
          >
            <div className="p-20 bg-violet-600 rounded-lg dark-smooth"></div>
            <span className="mt-5 font-light text-2xl text-center">Amet Minim</span>
          </div>
        ))}
      </div>
    </div>
  )
}
