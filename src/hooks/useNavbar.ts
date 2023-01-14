/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import { uniqueId } from 'lodash'
import { useState, useCallback } from 'react'

export default function useNavbar() {
  const [linkLocal, setLinkLocal] = useState([
    {
      id: uniqueId(),
      title: 'Project',
      href: '/project',
      selected: false,
    },
    {
      id: uniqueId(),
      title: 'Product',
      href: '/product',
      selected: false,
    },
    {
      id: uniqueId(),
      title: 'About',
      href: '/about',
      selected: false,
    },
  ])

  const onClickNavbarHandler = useCallback((id: string) => {
    setLinkLocal(
      linkLocal.map((link) => {
        link.selected = false
        if (link.id === id) link.selected = true
        return link
      })
    )
  }, [])

  return {
    linkLocal,
    onClickNavbarHandler,
  }
}
