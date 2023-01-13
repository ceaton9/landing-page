/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import React from "react";

interface ServiceCard {
  children: string;
  cardImage: React.ReactNode | string;
  cardTitle: string;
}

export default function ServiceCard(props: ServiceCard) {
  return (
    <div className="card-bg w-1/3 p-6">
      {props.cardImage}
      <div className="h-auto text-white">
        <h5 className="text-lg font-bold my-3">{props.cardTitle}</h5>
        <p className="font-light">{props.children}</p>
      </div>
    </div>
  );
}
