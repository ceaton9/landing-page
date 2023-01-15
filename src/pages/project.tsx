/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import React from 'react'

import SEO from '@components/v1/seo'
import Navbar from '@components/v1/navbar'
import { LANG } from '@utils/lang'
import ThirdHero from '@components/v1/hero/third'

import campingMan from '@assets/webp/a_man_by_camp_fire_3d_charactet_illustration_1_2x.webp'
import Footer from '@components/v1/footer'
import ProjectSection from '@components/v2/projects'

export default function Project() {
  return (
    <SEO>
      <Navbar logo={LANG.NAVBAR.LOGO} />
      <section id="project">
        <ThirdHero
          title="See projects that we’ve done,
          and companies we’ve help"
          image={campingMan}
          margin="-mt-24"
        />
        <ProjectSection />
        <Footer />
      </section>
    </SEO>
  )
}
