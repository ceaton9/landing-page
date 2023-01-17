/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import React from 'react'

import Footer from '@components/v1/footer'
import Hero from '@components/v1/hero/primary'
import Navbar from '@components/v1/navbar'
import OurProject from '@components/v1/ourProject'
import SEO from '@components/v1/seo'
import Services from '@components/v1/services'
import Testimonials from '@components/v1/testimonials'
import OurProducts from '@components/v2/ourProducts'
import useContent from '@hooks/useContent'

export default function Index() {
  const { hero, navbar } = useContent()

  return (
    <SEO>
      <Navbar logo={navbar} />
      <Hero
        headline={hero.HEADLINE}
        miniHeadline={hero.MINI_HEADLINE}
        headlineDescription={hero.HEADLINE_DESC}
      />
      <Services />
      <OurProject />
      <OurProducts />
      <Testimonials />
      <Footer />
    </SEO>
  )
}
