/**
 * @author PT Docheck Bagi Indonesia
 * @copyright © All rights reserved. DoCheck 2022
 */

import React from "react";
import renderer from "react-test-renderer";

import Hero from "../components/hero";
import { LANG } from "../utils/lang";

describe("Hero", () => {
  const elemenToRender = (
    <Hero
      headline={LANG.HEADLINE}
      miniHeadline={LANG.MINI_HEADLINE}
      headlineDescription={LANG.HEADLINE_DESC}
    />
  );

  it("renders correctly", () => {
    const tree = renderer.create(elemenToRender).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders last word correctly", () => {
    const instance = renderer.create(elemenToRender).toTree();
    expect(instance?.props.headline.split(" ").pop()).toEqual("GROOVE.");
  });

  it("renders headline correctly", () => {
    const instance = renderer.create(elemenToRender).toTree();
    const lastsIndexOfSpace = instance?.props.headline.lastIndexOf(" ");

    expect(instance?.props.headline?.substring(0, lastsIndexOfSpace)).toEqual(
      "Get Smart Solutions For Your Business with"
    );
  });
});
