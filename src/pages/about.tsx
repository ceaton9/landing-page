/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import React from 'react'

import Navbar from '@components/v1/navbar'
import SEO from '@components/v1/seo'
import { LANG } from '@utils/lang'
import ThirdHero from '@components/v1/hero/third'

import WhyUs from '@components/v2/whyUs'

import heroImage from '@assets/webp/frame_9843_2x.webp'
import whyUsImage from '@assets/webp/workspace2_1_2x.webp'
import Footer from '@components/v1/footer'
import OurProducts from '@components/v2/ourProducts'

export default function About() {
  return (
    <SEO>
      <Navbar logo={LANG.NAVBAR.LOGO} />
      <section id="about">
        <ThirdHero
          title="Make Your System Look More Wonderful"
          image={heroImage}
        />
        <WhyUs
          title="Why GRV Studio"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          image={whyUsImage}
        />
        <OurProducts />
        <Footer />
      </section>
    </SEO>
  )
}
