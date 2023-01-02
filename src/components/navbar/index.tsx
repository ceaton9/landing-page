/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import { Link } from "gatsby";
import React from "react";

import Button from "@components/button";

import "./style.css";
import useNavbar from "@hooks/useNavbar";

interface NavbarProps {
  logo: string;
}

export default function Navbar({ logo }: NavbarProps) {
  const { linkLocal, onClickNavbarHandler } = useNavbar();

  return (
    <section
      id="navbar"
      className="flex items-center justify-between px-24 pt-12 pb-12"
    >
      <div id="left">
        <h1 className="gradient-text">{logo}</h1>
      </div>
      <div id="center" className="flex">
        {linkLocal.map(({ href, id, title, selected }) => (
          <div className="link-wrapper flex items-center flex-col justify-self-center">
            <Link
              className="mr-5 ml-5 text-white"
              key={id}
              to={href}
              onClick={() => onClickNavbarHandler(id)}
            >
              {title}
            </Link>
            {selected && (
              <div className="rounded-full mt-1 w-1 h-1 bg-white"></div>
            )}
          </div>
        ))}
      </div>
      <div id="right">
        <Button primary>Shoot us project</Button>
      </div>
    </section>
  );
}
