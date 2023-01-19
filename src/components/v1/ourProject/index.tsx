/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import React from 'react'

import HeaderSection from '@components/v1/headerSection'
import Swipper from '@components/v2/swiper'

export default function OurProject() {
  return (
    <section id="our-project" about="our-project" className="mb-20 space-y-12">
      <div className="px-8 md:px-24">
        <HeaderSection title="Our Project" isHaveReadmore href="/" />
      </div>
      <Swipper />
    </section>
  )
}
