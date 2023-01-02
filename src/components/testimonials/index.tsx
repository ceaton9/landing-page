/**
 * @author PT Docheck Bagi Indonesia
 * @copyright © All rights reserved. DoCheck 2022
 */

import React from "react";

import TestimonialCard from "@components/cards/testimonialCard";
import HeaderSection from "@components/headerSection";

export default function Testimonials() {
  return (
    <section id="testimonials" about="testimonials" className="px-24">
      <HeaderSection title="Testimonial" />
      <div className="flex gap-10 h-48 mt-6 mb-48">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </section>
  );
}
