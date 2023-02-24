/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import ItemFeature from '@components/v2/itemFeature'

interface MobileProps {
    items: any[]
}

export default function Mobile({ items }: MobileProps) {
    return (
        <Swiper spaceBetween={1} slidesPerView={2.5}>
            {items.map((_, i) => (
                <SwiperSlide key={i}>
                    <ItemFeature title="Amet minim" />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
