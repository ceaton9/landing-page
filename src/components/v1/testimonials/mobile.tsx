/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import React from 'react'
import { SwiperSlide, Swiper } from 'swiper/react'

import useContent from '@hooks/useContent'
import TestimonialCard from '@components/v1/cards/testimonialCard'

export default function Mobile() {
  const { testimonials } = useContent()

  return (
    <Swiper spaceBetween={1} slidesPerView={1} centeredSlides>
      {testimonials.map(
        ({ avatar, id, jobTitle, title, description, rating }, i) => (
          <SwiperSlide>
            <TestimonialCard
              {...{ avatar, id, jobTitle, rating, title, description }}
              key={i}
            />
          </SwiperSlide>
        )
      )}
    </Swiper>
  )
}
