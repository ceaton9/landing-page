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

export default function Services() {
  const { sm } = useResponsive()

  return (
    <section id="services" about="services" className="px-8 md:px-24 mt-12 mb-6">
      <HeaderSection title="The Service we do," />

      {sm ? undefined : (
        <div className="flex gap-10 h-[538px] mt-6">
          <ServiceCard
            cardTitle="Mobile & Development"
            cardImage={<img src={mobileDevelopment} alt="attachment-1" />}
          >
            We can make you a mobile application using tech stack as u request
            or we decide what to use to build your idea. It is guaranteed that
            we will satisfy your request with our skill and integrity.
          </ServiceCard>
          <ServiceCard
            cardTitle="UI/UX Design"
            cardImage={<img src={uiUXDesign} alt="attachment-2" />}
          >
            We can make you a mobile application using tech stack as u request
            or we decide what to use to build your idea. It is guaranteed that
            we will satisfy your request with our skill and integrity.
          </ServiceCard>
          <ServiceCard
            cardTitle="Illustration"
            cardImage={<img src={illustrationService} alt="attachment-3" />}
          >
            We can make you a mobile application using tech stack as u request
            or we decide what to use to build your idea. It is guaranteed that
            we will satisfy your request with our skill and integrity.
          </ServiceCard>
        </div>
      )}
    </section>
  )
}
