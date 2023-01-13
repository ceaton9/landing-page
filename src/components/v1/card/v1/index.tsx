/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import React from "react";

interface CardProps {
  position: "left" | "right";
  title: string;
  description: string;
}

export default function Card({ description, position, title }: CardProps) {
  return (
    <div className="flex gap-10">
      {position === "left" ? (
        <>
          <div className="w-1/2 h-64 bg-slate-400 rounded-3xl"></div>
          <div className="mr-6"></div>
        </>
      ) : undefined}
      <div className="text-white w-1/2">
        <h4 className="text-xl mb-3">{title}</h4>
        <p className="font-light">{description}</p>
      </div>
      {position === "right" ? (
        <>
          <div className="ml-6"></div>
          <div className="w-1/2 h-64 bg-slate-400 rounded-3xl"></div>
        </>
      ) : undefined}
    </div>
  );
}
