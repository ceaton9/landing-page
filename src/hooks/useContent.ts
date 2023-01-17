/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import { graphql, useStaticQuery } from 'gatsby'
import { first } from 'lodash'

interface DataQuery {
  allDataJson: {
    edges: {
      node: {
        hero: {
          HEADLINE: string
          MINI_HEADLINE: string
          HEADLINE_DESC: string
        }
        navbar: {
          LOGO: string
        }
      }
    }[]
  }
}

export default function useContent() {
  const data: DataQuery = useStaticQuery(graphql`
    query DataQuery {
      allDataJson {
        edges {
          node {
            hero {
              HEADLINE
              MINI_HEADLINE
              HEADLINE_DESC
            }
            navbar {
              LOGO
            }
          }
        }
      }
    }
  `)

  return {
    hero: first(data?.allDataJson.edges)?.node?.hero!,
    navbar: first(data?.allDataJson.edges)?.node?.navbar.LOGO!,
  }
}
