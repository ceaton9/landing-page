/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import React from 'react'

import ServiceCard from '@components/v1/cards/serviceCard'
import HeaderSection from '@components/v1/headerSection'

import mobileDevelopment from '@assets/mobile-development.png'
import illustrationService from '@assets/illustration-service.png'
import uiUXDesign from '@assets/ui-ux-design.png'
import useResponsive from '@hooks/useResponsive'
import useContent from '@hooks/useContent'
import { toHTMLHypen } from '@utils/helpers'
import Mobile from '@components/v1/services/mobile'

const imageList = [mobileDevelopment, uiUXDesign, illustrationService]

export default function Services() {
  const { sm } = useResponsive()
  const { services } = useContent()

  return (
    <section
      id="services"
      about="services"
      className="px-8 md:px-24 mt-12 mb-6"
    >
      <HeaderSection title="The Service we do," />

      {sm ? (
        <Mobile />
      ) : (
        <div className="flex gap-10 h-[538px] mt-6">
          {services.map(({ description, id, title }, index) => (
            <ServiceCard
              key={id}
              cardTitle={title}
              cardImage={
                <img src={imageList[index]} alt={toHTMLHypen(title)} />
              }
            >
              {description}
            </ServiceCard>
          ))}
        </div>
      )}
    </section>
  )
}
