/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import React from "react";

import { LANG } from "@utils/lang";
import Footer from "@components/v1/footer";
import Hero from "@components/v1/hero";
import Navbar from "@components/v1/navbar";
import OurProject from "@components/v1/ourProject";
import SEO from "@components/v1/seo";
import Services from "@components/v1/services";
import Testimonials from "@components/v1/testimonials";

export default function Index() {
  return (
    <SEO>
      <Navbar logo={LANG.NAVBAR.LOGO} />
      <Hero
        headline={LANG.HEADLINE}
        miniHeadline={LANG.MINI_HEADLINE}
        headlineDescription={LANG.HEADLINE_DESC}
      />
      <Services />
      <OurProject />
      <Testimonials />
      <Footer />
    </SEO>
  );
}
