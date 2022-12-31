import React from "react";
import { LANG } from "../utils/lang";
import Hero from "./hero";

export default function Index() {
  return (
    <Hero
      headline={LANG.HEADLINE}
      miniHeadline={LANG.MINI_HEADLINE}
      headlineDescription={LANG.HEADLINE_DESC}
    />
  );
}
