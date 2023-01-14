/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import OrderUsForm from '@components/v1/orderUs/form'
import React from 'react'

import handshakeIllustration from '@assets/webp/digital_contract_1.webp'

export default function OrderUs() {
  return (
    <div className="flex gap-8">
      <div className="w-1/2">
        {/* <div className="h-60 bg-slate-50 rounded-xl mb-12"></div> */}
        <div className="flex -mt-10 items-center flex-col">
          <img
            alt="something-great-together"
            className="scale-80"
            src={handshakeIllustration}
          />
          <h4 className="text-white -mt-4 text-2xl font-light">
            Send us your project details,
            <br /> and we will be in touch soon!
          </h4>
        </div>
        <h4 className="text-white font-bold text-l leading-normal mt-60 mb-2">
          Send us email:
        </h4>
        <div className="flex gap-2 mb-12 items-center">
          <div className="w-3 h-3 bg-purple-200 rounded-xl"></div>
          <p className="text-white text-xl font-light">admin@grvstudio.id</p>
        </div>
      </div>
      <OrderUsForm />
    </div>
  )
}
