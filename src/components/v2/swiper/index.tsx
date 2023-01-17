/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import ContentProject from '@components/v2/contentProject'

import sayurEcommerce from '@assets/webp/sayur-ecommerce_1x.webp'
import { isEqual } from 'lodash'

/**
 * 
 * @returns 
 * 
 * Mobile
 * 2 / 1.5
 * 
 * Web
 * 75 / 2
 */

export default function Swipper() {
  const [currentIndex, setCurrentIndex] = useState(0)
  return (
    <Swiper
      spaceBetween={75}
      slidesPerView={2}
      centeredSlides
      onActiveIndexChange={(i: any) => setCurrentIndex(i.realIndex)}
    >
      {new Array(5).fill(0).map((_, i) => (
        <SwiperSlide>
          <div
            className={`${
              isEqual(i, currentIndex) ? 'scale-100' : 'scale-75 rotate-2'
            } transition-all duration-100`}
          >
            <ContentProject
              key={i}
              title="Sayur E-Commerce"
              description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
              image={sayurEcommerce}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
