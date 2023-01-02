import React from "react";

import ServiceCard from "@components/cards/serviceCard";
import HeaderSection from "@components/headerSection";

export default function Services() {
  return (
    <section id="services" about="services" className="px-24">
      <HeaderSection title="The Service we do," />
      <div className="flex gap-10 h-[538px] mt-6 mb-6">
        <ServiceCard
          cardTitle="Mobile & Development"
          cardImage={<div className="w-full h-64 bg-slate-300"></div>}
        >
          We can make you a mobile application using tech stack as u request or
          we decide what to use to build your idea. It is guaranteed that we
          will satisfy your request with our skill and integrity.
        </ServiceCard>
        <ServiceCard
          cardTitle="UI/UX Design"
          cardImage={<div className="w-full h-64 bg-slate-300"></div>}
        >
          We can make you a mobile application using tech stack as u request or
          we decide what to use to build your idea. It is guaranteed that we
          will satisfy your request with our skill and integrity.
        </ServiceCard>
        <ServiceCard
          cardTitle="Illustration"
          cardImage={<div className="w-full h-64 bg-slate-300"></div>}
        >
          We can make you a mobile application using tech stack as u request or
          we decide what to use to build your idea. It is guaranteed that we
          will satisfy your request with our skill and integrity.
        </ServiceCard>
      </div>
    </section>
  );
}
