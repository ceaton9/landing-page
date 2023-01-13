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
      href: '/',
      selected: true,
    },
    {
      id: uniqueId(),
      title: 'Product',
      href: '/',
      selected: false,
    },
    {
      id: uniqueId(),
      title: 'About',
      href: '/',
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
