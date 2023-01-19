/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import React, { useMemo } from 'react'

import OurFeature from '@components/v2/ourFeature'
import { toHTMLHypen } from '@utils/helpers'

interface WhyUsProps {
  title: string
  description: string
  image: string
}
/**
 *
 *
 * @export
 * @param {WhyUsProps} { description, image, title }
 * @return {*}
 */
export default function WhyUs({ description, image, title }: WhyUsProps) {
  const altImageMemo = useMemo(
    () => toHTMLHypen(title), // memento function
    [title]
  )

  return (
    <div className="why-us mb-4 mt-4 text-white flex flex-col">
      <h1 className="mt-5 text-4xl m-auto align-center mb-5 font-light">
        {title}
      </h1>
      <div className="flex items-center justify-center gap-15 px-24">
        <img className="w-1/2 scale-75" src={image} alt={altImageMemo} />
        <p className="w-80 font-light text-1xl">{description}</p>
      </div>
      <div className="mt-10">
        <OurFeature
          title="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
          items={new Array(4).fill(0)}
        />
      </div>
    </div>
  )
}
