/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import React from 'react'
import { Link } from 'gatsby'
import { upperCase } from 'lodash'

interface ProductCardProps {
  title: string
  price: string
  category: string
  image?: string
  to?: string
}

export default function ProductCard({
  category,
  image,
  price,
  title,
  to = '/',
}: ProductCardProps) {
  return (
    <div className="card-bg w-96 p-6">
      <Link to={to}>
        <div className="p-40  gentle-grey relative">
          <div className="w-28 p-3 absolute flex justify-center gradient-color bottom-3 right-3">
            <span className="text-sm text-white">Rp {price}</span>
          </div>
        </div>
        <div className="description-wrapper w-3/4 mt-5 flex flex-col text-white">
          <span className="font-light mb-5 text-sm">{upperCase(category)}</span>
          <h1 className="text-lg">{title}</h1>
        </div>
      </Link>
    </div>
  )
}
