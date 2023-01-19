/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import React from 'react'

import SEO from '@components/v1/seo'
import Navbar from '@components/v1/navbar'
import FourthHero from '@components/v1/hero/fourth'
import AllProducts from '@components/v2/allProducts'
import Footer from '@components/v1/footer'

import productBanner from '@assets/webp/3d00681_1_2x.webp'
import { LANG } from '@utils/lang'

export default function Product() {
  return (
    <SEO>
      <Navbar logo={LANG.NAVBAR.LOGO} />
      <section id="product">
        <FourthHero
          image={productBanner}
          title="We Create High Quality Digital Products"
        />
        <AllProducts />
        <Footer />
      </section>
    </SEO>
  )
}
