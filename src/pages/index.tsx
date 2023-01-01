/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import React from "react";
import Hero from "@components/hero";
import { LANG } from "@utils/lang";
import Services from "@components/services";
import Footer from "@components/footer";

export default function Index() {
  return (
    <>
      <Hero
        headline={LANG.HEADLINE}
        miniHeadline={LANG.MINI_HEADLINE}
        headlineDescription={LANG.HEADLINE_DESC}
      />
      <Services />
      <Footer />
    </>
  );
}
