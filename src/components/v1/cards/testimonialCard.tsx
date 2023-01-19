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
    <div className="w-1/3 card-bg h-64 p-6">
      <div className="flex items-center justify-between">
        <div className="flex">
          <img className="w-14 h-14 rounded-full" src={avatar} />
          <div className="text-white pl-6">
            <h4 className="text-xl">{title}</h4>
            <p className="text-sm font-light opacity-70">{jobTitle}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Star />
          <p className="text-white">{rating}</p>
        </div>
      </div>
      <p className="text-white opacity-70 font-light pt-12">{description}</p>
    </div>
  )
}
