/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import { isEmpty, isEqual } from 'lodash'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import ContentProject from '@components/v2/contentProject'

import sayurEcommerce from '@assets/webp/sayur-ecommerce_1x.webp'
import useResponsive from '@hooks/useResponsive'
import useContent from '@hooks/useContent'

export default function Swipper() {
  const { sm } = useResponsive()
  const { ourProject } = useContent()

  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <Swiper
      spaceBetween={sm ? 2 : 75}
      slidesPerView={sm ? 1.5 : 2}
      centeredSlides
      onActiveIndexChange={(i: any) => setCurrentIndex(i.realIndex)}
    >
      {ourProject.map(({ description, title, image }, i) => (
        <SwiperSlide>
          <div
            className={`${
              isEqual(i, currentIndex) ? 'scale-100' : 'scale-75 rotate-2'
            } transition-all duration-100`}
          >
            <ContentProject
              key={i}
              title={title}
              description={description}
              image={isEmpty(image) ? sayurEcommerce : image}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
