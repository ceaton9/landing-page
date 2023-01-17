/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import React from 'react'
import { Link } from 'gatsby'

import Button from '@components/v1/button'
import useNavbar from '@hooks/useNavbar'

export default function NavbarMenu() {
  const { linkLocal, onClickNavbarHandler } = useNavbar()

  return (
    <>
      <div id="center" className="lg:flex">
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
      <div id="right" className="scale-75 lg:block">
        <Link to="/shoot">
          <Button primary>Shoot Us Project</Button>
        </Link>
      </div>
    </>
  )
}
