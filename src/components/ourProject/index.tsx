/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import React from "react";
import { uniqueId } from "lodash";

import HeaderSection from "@components/headerSection";
import Card from "@components/card/v1";

const contentBody = [
  {
    id: uniqueId(),
    title: "Mobile & Web Development",
    description: `
    We've built several mobile and web app for our lovely customer. We
    deliver the best and crafting the greatest app with best quality. As
    a developer focused on delivering the best quality and full
    functional app, we take pride in my ability to create intuitive and
    visually appealing software that not only meets the functional
    requirements of our clients, but also exceeds their expectations.
    Whether we working on a native mobile app or a web-based
    application, we always strive to deliver a product that is reliable,
    efficient, and user-friendly.
    `,
  },
  {
    id: uniqueId(),
    title: "UI/UX Design",
    description: `
    We specialize in creating visually appealing and user-friendly
    designs for both mobile and web platforms. We have a wide range of
    experience and am skilled in a variety of design styles, allowing us
    to adapt to the specific needs and preferences of each client. In
    addition to our expertise in mobile and web design, we also able to
    create app designs upon request. Whether it's a simple website or a
    complex mobile application, we are dedicated to delivering
    high-quality designs that meet the unique requirements of each
    project.
    `,
  },
  {
    id: uniqueId(),
    title: "Ilustration",
    description: `
    Our illustration project is a versatile and dynamic showcase of our
    skills and abilities as an artist. With a wide range of styles and
    techniques at my disposal, we are confident that we can deliver
    high-quality, visually stunning illustrations that will meet the
    needs of any project. Whether you are looking for detailed,
    realistic depictions or more stylized, abstract designs, we can
    bring your ideas to life with my unique artistic vision. So if you
    have an idea for an illustration project, don't hesitate to reach
    out. we can't wait to bring your vision to life!
    `,
  },
];

export default function OurProject() {
  return (
    <section
      id="our-project"
      about="our-project"
      className="px-24 mb-20 space-y-12"
    >
      <HeaderSection title="Our Project" isHaveReadmore href="/" />
      {contentBody.map(({ description, id, title }, index) => (
        <Card
          key={id}
          position={index % 2 === 0 ? "left" : "right"}
          {...{ description, title }}
        />
      ))}
    </section>
  );
}
