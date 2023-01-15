/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import ProductCard from '@components/v1/cards/productCard'
import { uniqueId } from 'lodash'
import React from 'react'

const dummyItem = [
  {
    id: uniqueId(),
    title: 'Dailoz - Daily Activity Apps',
    category: 'web ui kit',
    price: '200K',
    image: '',
    to: '/',
  },
  {
    id: uniqueId(),
    title: 'Beatuees - Women beauty cares marketplace UI KIT',
    category: 'illustration',
    price: '200K',
    image: '',
    to: '/',
  },
  {
    id: uniqueId(),
    title: 'Lesta - Real Estate App UI KIT Design',
    category: 'app ui kit',
    price: '200K',
    image: '',
    to: '/',
  },

  {
    id: uniqueId(),
    title: 'Dailoz - Daily Activity Apps',
    category: 'web ui kit',
    price: '200K',
    image: '',
    to: '/',
  },
  {
    id: uniqueId(),
    title: 'Beatuees - Women beauty cares marketplace UI KIT',
    category: 'illustration',
    price: '200K',
    image: '',
    to: '/',
  },
  {
    id: uniqueId(),
    title: 'Lesta - Real Estate App UI KIT Design',
    category: 'app ui kit',
    price: '200K',
    image: '',
    to: '/',
  },

  {
    id: uniqueId(),
    title: 'Dailoz - Daily Activity Apps',
    category: 'web ui kit',
    price: '200K',
    image: '',
    to: '/',
  },
  {
    id: uniqueId(),
    title: 'Beatuees - Women beauty cares marketplace UI KIT',
    category: 'illustration',
    price: '200K',
    image: '',
    to: '/',
  },
  {
    id: uniqueId(),
    title: 'Lesta - Real Estate App UI KIT Design',
    category: 'app ui kit',
    price: '200K',
    image: '',
    to: '/',
  },

  {
    id: uniqueId(),
    title: 'Dailoz - Daily Activity Apps',
    category: 'web ui kit',
    price: '200K',
    image: '',
    to: '/',
  },
  {
    id: uniqueId(),
    title: 'Beatuees - Women beauty cares marketplace UI KIT',
    category: 'illustration',
    price: '200K',
    image: '',
    to: '/',
  },
  {
    id: uniqueId(),
    title: 'Lesta - Real Estate App UI KIT Design',
    category: 'app ui kit',
    price: '200K',
    image: '',
    to: '/',
  },

  {
    id: uniqueId(),
    title: 'Dailoz - Daily Activity Apps',
    category: 'web ui kit',
    price: '200K',
    image: '',
    to: '/',
  },
  {
    id: uniqueId(),
    title: 'Beatuees - Women beauty cares marketplace UI KIT',
    category: 'illustration',
    price: '200K',
    image: '',
    to: '/',
  },
  {
    id: uniqueId(),
    title: 'Lesta - Real Estate App UI KIT Design',
    category: 'app ui kit',
    price: '200K',
    image: '',
    to: '/',
  },
]

export default function AllProducts() {
  return (
    <div className="grid gap-4 grid-cols-3 grid-rows-3 px-24">
      {dummyItem.map(({ category, id, price, title, to, image }) => (
        <ProductCard {...{ category, image, price, title, to }} key={id} />
      ))}
    </div>
  )
}
