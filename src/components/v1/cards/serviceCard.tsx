/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import React from 'react'

import "./style.css"

interface ServiceCard {
  children: string
  cardImage: React.ReactNode | string
  cardTitle: string
}

export default function ServiceCard(props: ServiceCard) {
  return (
    <div className="card-bg w-1/3 p-3 scale-95 drop-shadow-lg box">
      <div className="scale-90">
        <div className="scale-90">{props.cardImage}</div>
        <div className="h-auto text-white">
          <h5 className="text-lg font-bold my-3 text-white">
            {props.cardTitle}
          </h5>
          <p className="font-light text-opacity-70 text-white">
            {props.children}
          </p>
        </div>
      </div>
    </div>
  )
}
