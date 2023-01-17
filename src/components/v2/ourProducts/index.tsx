/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import React from 'react'

import HeaderSection from '@components/v1/headerSection'
import ProductCard from '@components/v1/cards/productCard'
import { uniqueId } from 'lodash'
import useResponsive from '@hooks/useResponsive'

const dummyItem = [
  {
    id: uniqueId(),
    title: 'Dailoz - Daily Activity Apps',
    category: 'web ui kit',
    price: '200K',
    image: '',
    to: '/',
  },
  {
    id: uniqueId(),
    title: 'Beatuees - Women beauty cares marketplace UI KIT',
    category: 'illustration',
    price: '200K',
    image: '',
    to: '/',
  },
  {
    id: uniqueId(),
    title: 'Lesta - Real Estate App UI KIT Design',
    category: 'app ui kit',
    price: '200K',
    image: '',
    to: '/',
  },
]

export default function OurProducts() {
  const { sm } = useResponsive()

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
            {dummyItem.map(({ category, id, price, title, to, image }) => (
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
