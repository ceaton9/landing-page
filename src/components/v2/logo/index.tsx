/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import React from 'react'
import { Link } from 'gatsby'

interface LogoProps {
  logo: string
}

export default function Logo({ logo }: LogoProps) {
  return (
    <div id="left">
      <Link to="/">
        <h1 className="gradient-text">{logo}</h1>
      </Link>
    </div>
  )
}
