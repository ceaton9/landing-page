/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import React from "react";

import ServiceCard from "@components/v1/cards/serviceCard";
import HeaderSection from "@components/v1/headerSection";

export default function Services() {
  return (
    <section id="services" about="services" className="px-24">
      <HeaderSection title="The Service we do," />
      <div className="flex gap-10 h-[538px] mt-6 mb-6">
        <ServiceCard
          cardTitle="Mobile & Development"
          cardImage={
            <img
              src="https://picsum.photos/id/1/450/350?grayscale"
              alt="attachment-1"
            />
          }
        >
          We can make you a mobile application using tech stack as u request or
          we decide what to use to build your idea. It is guaranteed that we
          will satisfy your request with our skill and integrity.
        </ServiceCard>
        <ServiceCard
          cardTitle="UI/UX Design"
          cardImage={
            <img src="https://picsum.photos/id/2/450/350" alt="attachment-2" />
          }
        >
          We can make you a mobile application using tech stack as u request or
          we decide what to use to build your idea. It is guaranteed that we
          will satisfy your request with our skill and integrity.
        </ServiceCard>
        <ServiceCard
          cardTitle="Illustration"
          cardImage={
            <img
              src="https://picsum.photos/id/3/450/350?grayscale"
              alt="attachment-3"
            />
          }
        >
          We can make you a mobile application using tech stack as u request or
          we decide what to use to build your idea. It is guaranteed that we
          will satisfy your request with our skill and integrity.
        </ServiceCard>
      </div>
    </section>
  );
}
