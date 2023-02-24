/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import ItemFeature from '@components/v2/itemFeature'
import Mobile from '@components/v2/ourFeature/mobile'
import useResponsive from '@hooks/useResponsive'
import React from 'react'

interface OurFeatureProps {
  title: string
  items: any[]
}

export default function OurFeature({ items, title }: OurFeatureProps) {
  const { md } = useResponsive()
  return (
    <div className="our-feature text-white flex flex-col justify-center items-center px-12 lg:px-24">
      <h5 className="mb-5 font-light lg:w-2/4 text-2xl text-center">{title}</h5>
      {!md ? <div className="flex gap-20 mt-4">
        {items.map((_, i) => (
          <ItemFeature key={i} title="Amet minim" />
        ))}
      </div> : <div className='mt-4 w-screen'>
        <Mobile items={items} />
      </div>}
    </div>
  )
}
