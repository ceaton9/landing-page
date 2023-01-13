/**
 * @author PT Docheck Bagi Indonesia
 * @copyright © All rights reserved. DoCheck 2022
 */

import TestimonialCard from "@components/v1/cards/testimonialCard";
import HeaderSection from "@components/v1/headerSection";
import React from "react";

export default function Testimonials() {
  return (
    <section id="testimonials" about="testimonials" className="px-24">
      <HeaderSection title="Testimonial" isHaveReadmore href="/" />
      <div className="flex gap-10 h-48 mt-6 mb-48">
        {new Array(3).fill(0).map((_, i) => (
          <TestimonialCard key={i} />
        ))}
      </div>
    </section>
  );
}
