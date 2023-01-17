/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import React from 'react'

interface ButtonProps {
  primary?: boolean
  children: string | React.ReactNode
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className={`text-white py-3 px-5 text-sm md:font-medium md:text-base md:py-5 md:px-7 ${
        props.primary
          ? 'bg-gradient'
          : 'border-white border-2 hover:bg-white hover:text-black transition duration-150 ease-out hover:ease-in'
      }`}
    >
      {props.children}
    </button>
  )
}
