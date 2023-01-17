/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import React from 'react'

import { FOOTER } from '@utils/footer'
import InstagramIcon from '@assets/instagram.png'
import FacebookIcon from '@assets/facebook.png'
import YoutubeIcon from '@assets/youtube.png'
import TwitterIcon from '@assets/twitter.png'
import { LANG } from '@utils/lang'
import LineBreak from '@components/v1/lineBreak'

export default function Footer() {
  return (
    <div className="px-8 md:px-24">
      <div className="mt-24 md:h-52 flex flex-col md:flex-row">
        <div className="mb-10 md:mb-10 md:w-2/6">
          <h2 className="gradient-text text-2xl inline">{LANG.NAVBAR.LOGO}</h2>
          <p className="text-white opacity-70 font-light mt-6">
            Wanna build something great together?
          </p>
          <div className="flex items-center gap-2 py-4">
            <div className="hover:bg-gradient-to-r from-[#DD31D1] via-[#8343DA] to-[#3D84E7] rounded-full p-2">
              <a href="">
                <img
                  src={FacebookIcon}
                  alt="facebook-icon"
                  className="w-5 h-5"
                />
              </a>
            </div>
            <div className="hover:bg-gradient-to-r from-[#DD31D1] via-[#8343DA] to-[#3D84E7] rounded-full p-2">
              <a href="">
                <img
                  src={InstagramIcon}
                  alt="facebook-icon"
                  className="w-5 h-5"
                />
              </a>
            </div>
            <div className="hover:bg-gradient-to-r from-[#DD31D1] via-[#8343DA] to-[#3D84E7] rounded-full p-2">
              <a href="">
                <img
                  src={TwitterIcon}
                  alt="facebook-icon"
                  className="w-5 h-5"
                />
              </a>
            </div>
            <div className="hover:bg-gradient-to-r from-[#DD31D1] via-[#8343DA] to-[#3D84E7] rounded-full p-2">
              <a href="">
                <img
                  src={YoutubeIcon}
                  alt="facebook-icon"
                  className="w-5 h-5"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-rows-2 grid-flow-col gap-10 md:w-4/6 md:flex">
          {FOOTER.FOOTER_ITEMS.map((items, idx) => (
            <div key={idx} className="w-1/4">
              <h5 className="gradient-text text-start inline">{items.TITLE}</h5>
              <ul className="text-white flex flex-col gap-4 mt-6">
                {items.LINKS.map((link, idx) => (
                  <li
                    key={idx}
                    className="text-sm opacity-50 md:text-base text-white md:opacity-70 font-light hover:opacity-100 transition duration-500 ease-out hover:ease-in"
                  >
                    <a href={link.url}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <LineBreak />
      <p className="text-sm md:text-base font-light text-white opacity-70 text-center py-8">
        Copyright {new Date().getFullYear()} GRV All Right Reserved
      </p>
    </div>
  )
}
