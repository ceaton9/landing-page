/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import { Link } from 'gatsby'
import React from 'react'

import useNavbar from '@hooks/useNavbar'
import Button from '@components/v1/button'

import './style.css'
import LineBreak from '@components/v1/lineBreak'

interface NavbarProps {
  logo: string
}

export default function Navbar({ logo }: NavbarProps) {
  const { linkLocal, onClickNavbarHandler } = useNavbar()

  return (
    <>
      <section
        id="navbar"
        className="flex items-center justify-between px-24 pt-12 pb-6"
      >
        <div id="left">
          <Link to="/">
            <h1 className="gradient-text">{logo}</h1>
          </Link>
        </div>
        <div id="center" className="flex">
          {linkLocal.map(({ href, id, title, selected }) => (
            <div className="link-wrapper flex items-center flex-col justify-self-center">
              <Link
                className="mr-5 ml-5 text-white"
                key={id}
                to={href}
                onClick={() => onClickNavbarHandler(id)}
              >
                {title}
              </Link>
              {selected && (
                <div className="rounded-full mt-3 w-1 h-1 bg-white"></div>
              )}
            </div>
          ))}
        </div>
        <div id="right" className='scale-75'>
          <Link to="/shoot">
            <Button primary>Shoot Us Project</Button>
          </Link>
        </div>
      </section>
      <div className="pb-6 px-24">
        <LineBreak />
      </div>
    </>
  )
}
