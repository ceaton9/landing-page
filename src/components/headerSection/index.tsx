/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import React from "react";

import LineBreak from "@components/lineBreak";

interface HeaderSectionProps {
  title: string;
  isHaveReadmore?: boolean;
  href?: string;
}

export default function HeaderSection({ title }: HeaderSectionProps) {
  return (
    <>
      <h1 className="text-white text-xl mb-8">{title}</h1>
      <LineBreak />
    </>
  );
}
