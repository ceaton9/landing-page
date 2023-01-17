/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import React from 'react'

import LineBreak from '@components/v1/lineBreak'
import Logo from '@components/v2/logo'
import NavbarMenu from '@components/v2/navbarMenu'

import './style.css'
import BurgerMenu from '@components/v2/burgerMenu'
import useResponsive from '@hooks/useResponsive'

interface NavbarProps {
  logo: string
}

export default function Navbar({ logo }: NavbarProps) {
  const { sm } = useResponsive()
  return (
    <>
      <section
        id="navbar"
        className="flex items-center justify-between px-8 sm:px-24 md:px-24 pt-12 pb-6"
      >
        <Logo logo={logo} />
        {sm ? <BurgerMenu /> : <NavbarMenu />}
      </section>
      <div className="pb-6 px-8 sm:px-24 md:px-24">
        <LineBreak />
      </div>
    </>
  )
}
