/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import React from 'react'

import HeaderSection from '@components/v1/headerSection'
import ProductCard from '@components/v1/cards/productCard'
import useResponsive from '@hooks/useResponsive'
import useContent from '@hooks/useContent'

export default function OurProducts() {
  const { sm } = useResponsive()
  const { ourProduct } = useContent()

  return (
    <div className="our-products">
      <section
        id="our-products"
        about="our-products"
        className="mb-20 space-y-12 mt-20"
      >
        <div className="px-8 md:px-24">
          <HeaderSection title="Our Product" isHaveReadmore href="/" />
        </div>
        {sm ? undefined : (
          <div className="flex gap-10 px-24">
            {ourProduct.map(({ category, id, price, title, to, image }) => (
              <ProductCard
                {...{ category, image, price, title, to }}
                key={id}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
