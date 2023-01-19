/**
 * @author PT Docheck Bagi Indonesia
 * @copyright © All rights reserved. DoCheck 2022
 */

import TestimonialCard from '@components/v1/cards/testimonialCard'
import HeaderSection from '@components/v1/headerSection'
import Mobile from '@components/v1/testimonials/mobile'
import useContent from '@hooks/useContent'
import useResponsive from '@hooks/useResponsive'
import React from 'react'

export default function Testimonials() {
  const { sm } = useResponsive()
  const { testimonials } = useContent()

  return (
    <section id="testimonials" about="testimonials" className="px-8 md:px-24">
      <HeaderSection title="Testimonial" isHaveReadmore href="/" />
      {sm ? (
        <Mobile />
      ) : (
        <div className="flex gap-10 h-48 mt-6 mb-48">
          {testimonials.map(
            ({ avatar, id, jobTitle, title, description, rating }, i) => (
              <TestimonialCard
                {...{ avatar, id, jobTitle, rating, title, description }}
                key={i}
              />
            )
          )}
        </div>
      )}
    </section>
  )
}
