/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import React from 'react'
import { Link } from 'gatsby'

import ChevIcon from '@assets/arrow-left.svg'
import LineBreak from '@components/v1/lineBreak'

interface HeaderSectionProps {
  title: string
  isHaveReadmore?: boolean
  href?: string
}

export default function HeaderSection({
  title,
  isHaveReadmore,
  href,
}: HeaderSectionProps) {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-white text-1xl md:text-2xl">{title}</h1>
        {isHaveReadmore && (
          <Link to={href!}>
            <div className="flex justify-between items-center">
              <h3 className="text-white text-xs md:text-l gradient-text">See More</h3>
              <div className="ml-1 md:ml-3 scale-50 md:scale-75">
                <ChevIcon />
              </div>
            </div>
          </Link>
        )}
      </div>
      <div className="mt-5">
        <LineBreak />
      </div>
    </>
  )
}
