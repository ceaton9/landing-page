/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import { uniqueId } from 'lodash'
import React from 'react'

import sayurEcommerce from '@assets/webp/sayur-ecommerce_1x.webp'
import ProjectItems from '@components/v2/projects/items'

const dummyItem = [
  {
    id: uniqueId(),
    title: 'Sayur E-Commerce',
    duration: '6 Month',
    projectType: [
      'Development Mobile Apps',
      'UI / UX Designer',
      'Illustration',
    ],
    image: sayurEcommerce,
  },
  {
    id: uniqueId(),
    title: 'Sayur E-Commerce',
    duration: '6 Month',
    projectType: [
      'Development Mobile Apps',
      'UI / UX Designer',
      'Illustration',
    ],
    image: sayurEcommerce,
  },
  {
    id: uniqueId(),
    title: 'Sayur E-Commerce',
    duration: '6 Month',
    projectType: [
      'Development Mobile Apps',
      'UI / UX Designer',
      'Illustration',
    ],
    image: sayurEcommerce,
  },
  {
    id: uniqueId(),
    title: 'Sayur E-Commerce',
    duration: '6 Month',
    projectType: [
      'Development Mobile Apps',
      'UI / UX Designer',
      'Illustration',
    ],
    image: sayurEcommerce,
  },
]

export default function ProjectSection() {
  return (
    <section className="projects">
      {dummyItem.map(({ duration, id, image, projectType, title }, index) => (
        <ProjectItems
          {...{ duration, image, projectType, title }}
          key={id}
          isOdd={index % 2 !== 0}
        />
      ))}
    </section>
  )
}
