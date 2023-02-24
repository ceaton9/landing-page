/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import { uniqueId } from 'lodash'
import React from 'react'


import ProductCard from '@components/v1/cards/productCard'
import Mobile from '@components/v2/allProducts/mobile'
import useResponsive from '@hooks/useResponsive'
import useContent from '@hooks/useContent'



export default function AllProducts() {
  const { sm } = useResponsive()
  const { allProducts } = useContent()

  return (
    <>
      {!sm ? <div className="grid gap-4 grid-cols-3 grid-rows-3 px-24">
        {allProducts.map(({ category, id, price, title, to, image }) => (
          <ProductCard {...{ category, image, price, title, to }} key={id} />
        ))}
      </div> : <>
        <Mobile start={0} end={2} />
        <Mobile start={3} end={5} />
        <Mobile start={6} end={8} />
      </>}
    </>
  )
}
