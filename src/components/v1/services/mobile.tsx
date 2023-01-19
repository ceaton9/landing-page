/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import ServiceCard from '@components/v1/cards/serviceCard'
import useContent from '@hooks/useContent'
import { toHTMLHypen } from '@utils/helpers'
import mobileDevelopment from '@assets/mobile-development.png'
import illustrationService from '@assets/illustration-service.png'
import uiUXDesign from '@assets/ui-ux-design.png'

const imageList = [mobileDevelopment, uiUXDesign, illustrationService]

export default function Mobile() {
  const { services } = useContent()

  return (
    <Swiper spaceBetween={1} slidesPerView={1} centeredSlides>
      {services.map(({ description, id, title }, i) => (
        <SwiperSlide>
          <ServiceCard
            key={id}
            cardTitle={title}
            cardImage={<img src={imageList[i]} alt={toHTMLHypen(title)} />}
          >
            {description}
          </ServiceCard>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
