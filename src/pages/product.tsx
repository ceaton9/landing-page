/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import React from 'react'

import SEO from '@components/v1/seo'
import Navbar from '@components/v1/navbar'
import { LANG } from '@utils/lang'

export default function Product() {
  return (
    <SEO>
      <Navbar logo={LANG.NAVBAR.LOGO} />
      <div id="product"></div>
    </SEO>
  )
}
