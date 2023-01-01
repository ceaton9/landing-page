import { FOOTER } from "@utils/footer";
import React from "react";

export default function Footer() {
  return (
    <div className="px-24 my-24 flex">
      <div className="w-2/6">
        <h2 className="gradient-text text-2xl inline">GROOVE.</h2>
        <p className="text-white opacity-70 font-ligh mt-6">
          Wanna build something great together?
        </p>
      </div>
      <div className="w-4/6 flex">
        {FOOTER.FOOTER_ITEMS.map((items, idx) => (
          <div key={idx} className="w-1/4">
            <h5 className="gradient-text text-start inline">{items.TITLE}</h5>
            <ul className="text-white flex flex-col gap-4 mt-6">
              {items.LINKS.map((link, idx) => (
                <li
                  key={idx}
                  className="text-white opacity-70 font-light hover:opacity-100 transition duration-150 ease-out hover:ease-in"
                >
                  <a href={link.url}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
