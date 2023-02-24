/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import ProductCard from '@components/v1/cards/productCard'
import useContent from '@hooks/useContent'

interface MobileProps {
    start: number
    end: number
}

export default function Mobile({ end = 2, start = 0 }: MobileProps) {
    const { allProducts } = useContent()

    return (
        <Swiper spaceBetween={1} slidesPerView={1.5}>
            {allProducts.slice(start, end).map(({ category, price, title, to, image }, i) => (
                <SwiperSlide>
                    <ProductCard {...{ category, image, price, title, to }} key={i} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
