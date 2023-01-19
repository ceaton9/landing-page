/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import React from 'react'

import Star from '@assets/star.svg'

interface TestimonialCardProps {
  avatar: string
  title: string
  rating: number
  jobTitle: string
  description: string
}

export default function TestimonialCard({
  avatar,
  description,
  rating,
  title,
  jobTitle,
}: TestimonialCardProps) {
  return (
    <div className="md:w-1/3 card-bg mt-5 md:mt-0 md:h-70 md:h-64 p-6">
      <div className="flex items-center justify-between">
        <div className="flex">
          <img className="w-14 h-14 rounded-full" src={avatar} />
          <div className="text-white pl-6">
            <h4 className="text-sm md:text-xl">{title}</h4>
            <p className="md:text-sm text-xs font-light opacity-70">{jobTitle}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <Star />
          <p className="text-white">{rating}</p>
        </div>
      </div>
      <p className="text-white text-sm opacity-70 font-light pt-6 md:pt-12">{description}</p>
    </div>
  )
}
