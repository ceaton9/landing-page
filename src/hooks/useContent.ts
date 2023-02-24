/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import { graphql, useStaticQuery } from 'gatsby'
import { first } from 'lodash'

interface ProductType {
  id: number
  title: string
  category: string
  price: string
  to: string
  image?: string
}

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
        services: {
          id: number
          title: string
          description: string
        }[]
        ourProject: {
          id: number
          title: string
          description: string
          image?: string
        }[]
        allProducts: ProductType[]
        ourProduct: ProductType[]
        testimonials: {
          id: number
          avatar: string
          title: string
          rating: number
          jobTitle: string
          description: string
        }[]
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
            services {
              id: ID
              title: TITLE
              description: DESCRIPTION
            }
            ourProject {
              id: ID
              title: TITLE
              description: DESCRIPTION
              image: IMAGE
            }
            ourProduct {
              id: ID
              title: TITLE
              category: CATEGORY
              price: PRICE
              image: IMAGE
              to: TO
            }
            allProducts {
              id: ID
              title: TITLE
              category: CATEGORY
              price: PRICE
              image: IMAGE
              to: TO
            }
            testimonials {
              id: ID
              avatar: AVATAR
              title: TITLE
              rating: RATING
              jobTitle: JOB_TITLE
              description: DESCRIPTION
            }
          }
        }
      }
    }
  `)

  return {
    hero: first(data?.allDataJson.edges)?.node?.hero!,
    navbar: first(data?.allDataJson.edges)?.node?.navbar.LOGO!,
    services: first(data?.allDataJson.edges)?.node?.services!,
    ourProject: first(data?.allDataJson.edges)?.node?.ourProject!,
    ourProduct: first(data?.allDataJson.edges)?.node?.ourProduct!,
    allProducts: first(data?.allDataJson.edges)?.node?.allProducts!,
    testimonials: first(data?.allDataJson.edges)?.node?.testimonials!,
  }
}
