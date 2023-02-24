/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import ProductCard from '@components/v1/cards/productCard'
import useContent from '@hooks/useContent'

export default function Mobile() {
  const { ourProduct } = useContent()
  return (
    <Swiper spaceBetween={1} slidesPerView={1.5}>
      {ourProduct.map(({ category, price, title, to, image }, i) => (
        <SwiperSlide>
          <ProductCard {...{ category, image, price, title, to }} key={i} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
