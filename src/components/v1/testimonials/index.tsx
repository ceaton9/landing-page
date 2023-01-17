/**
 * @author PT Docheck Bagi Indonesia
 * @copyright © All rights reserved. DoCheck 2022
 */

import TestimonialCard from '@components/v1/cards/testimonialCard'
import HeaderSection from '@components/v1/headerSection'
import useResponsive from '@hooks/useResponsive'
import React from 'react'

export default function Testimonials() {
  const { sm } = useResponsive()
  return (
    <section id="testimonials" about="testimonials" className="px-8 md:px-24">
      <HeaderSection title="Testimonial" isHaveReadmore href="/" />
      {sm ? undefined : (
        <div className="flex gap-10 h-48 mt-6 mb-48">
          {new Array(3).fill(0).map((_, i) => (
            <TestimonialCard key={i} />
          ))}
        </div>
      )}
    </section>
  )
}
