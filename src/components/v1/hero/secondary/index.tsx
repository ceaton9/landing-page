/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import React from 'react'

import projectImage from '@assets/webp/15_1.webp'

export default function SecondaryHero() {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-white text-[64px] font-bold w-1/2">
        Let's Build Something Great Together
      </h1>
      <img className="-mt-24" alt="project" src={projectImage} />
    </div>
  )
}
