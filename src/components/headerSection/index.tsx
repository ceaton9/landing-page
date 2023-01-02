/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import React from "react";
import { Link } from "gatsby";

import LineBreak from "@components/lineBreak";
import ChevIcon from "@assets/arrow-left.svg";

interface HeaderSectionProps {
  title: string;
  isHaveReadmore?: boolean;
  href?: string;
}

export default function HeaderSection({
  title,
  isHaveReadmore,
  href,
}: HeaderSectionProps) {
  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-white text-xl">{title}</h1>
        {isHaveReadmore && (
          <Link to={href!}>
            <div className="flex justify-between items-center">
              <h3 className="text-white text-l gradient-text">See More</h3>
              <div className="ml-3 scale-75">
                <ChevIcon />
              </div>
            </div>
          </Link>
        )}
      </div>
      <LineBreak />
    </>
  );
}
