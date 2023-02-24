/**
* @author Groove Studio
* @copyright © All rights reserved. Groove Studio 2023
*/

import React from 'react'

interface ItemFeatureProps {
    title: string
}

export default function ItemFeature({ title }: ItemFeatureProps) {
    return (
        <div
            className="our-feature-item flex justify-center flex-col items-center"
        >
            <div className="p-16 lg:p-20 bg-violet-600 rounded-lg dark-smooth"></div>
            <span className="mt-5 font-light text-lg lg:text-2xl text-center">{title}</span>
        </div>
    )
}