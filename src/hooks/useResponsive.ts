/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

const { useBreakpoint } = require('gatsby-plugin-breakpoints')

export default function useResponsive() {
  const breakpoint = useBreakpoint()

  return {
    xs: breakpoint.xs as boolean,
    sm: breakpoint.sm as boolean,
    md: breakpoint.md as boolean,
    lg: breakpoint.l as boolean,
  }
}
