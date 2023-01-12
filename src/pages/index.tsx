/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import React from "react";

import Hero from "@components/hero";
import { LANG } from "@utils/lang";
import Services from "@components/services";
import Footer from "@components/footer";
import Navbar from "@components/navbar";
import Testimonials from "@components/testimonials";
import OurProject from "@components/ourProject";
import SEO from "@components/seo";

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
