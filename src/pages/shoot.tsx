/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import React from 'react'

import Footer from '@components/v1/footer'
import SecondaryHero from '@components/v1/hero/secondary'
import Navbar from '@components/v1/navbar'
import OrderUs from '@components/v1/orderUs'
import SEO from '@components/v1/seo'
import { LANG } from '@utils/lang'

export default function ProjectForm() {
  return (
    <SEO>
      <Navbar logo={LANG.NAVBAR.LOGO} />
      <section id="project" about="project" className="px-24">
        <SecondaryHero />
        <OrderUs />
        <Footer />
      </section>
    </SEO>
  )
}
