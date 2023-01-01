import TestimonialCard from "@components/cards/testimonialCard";
import LineBreak from "@components/lineBreak";
import React from "react";

export default function Testimonials() {
  return (
    <section id="testimonials" about="testimonials" className="px-24">
      <h1 className="text-white text-xl mb-8">Testimonial</h1>
      <LineBreak />
      <div className="flex gap-10 h-48 mt-6 mb-48">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </section>
  );
}
