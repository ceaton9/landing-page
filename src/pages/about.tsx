/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import React from 'react'

import Navbar from '@components/v1/navbar'
import SEO from '@components/v1/seo'
import { LANG } from '@utils/lang'
import ThirdHero from '@components/v1/hero/third'

import heroImage from '@assets/webp/frame_9843_2x.webp'

export default function About() {
  return (
    <SEO>
      <Navbar logo={LANG.NAVBAR.LOGO} />
      <div id="about">
        <ThirdHero
          title="Make Your System Look More Wonderful"
          image={heroImage}
        />
      </div>
    </SEO>
  )
}
