/**
 * @author Groove Studio
 * @copyright © All rights reserved. Groove Studio 2023
 */

import Button from '@components/v1/button'
import useResponsive from '@hooks/useResponsive'
import { Link } from 'gatsby'
import { toLower, join, split } from 'lodash'
import React, { useCallback, useMemo } from 'react'

interface ProjectItemsProps {
  image: string
  title: string
  duration: string
  projectType: any[]
  isOdd?: boolean
}

export default function ProjectItems({
  duration,
  image,
  projectType,
  title,
  isOdd = false,
}: ProjectItemsProps) {
  const { sm } = useResponsive()
  const altImageMemo = useMemo(
    () => toLower(join(split(title, ' '), '-')), // memento function
    [title]
  )

  const imageRender = useMemo(
    () => <img alt={altImageMemo} src={image} className="lg:w-2/3" />,
    [altImageMemo, image]
  )

  const descriptionRender = useCallback(
    (description: string, title: string) => (
      <div className="description">
        <h6 className="text-sm font-light mb-2 opacity-70">{description}</h6>
        <h3 className="font-light mb-2 text-lg">{title}</h3>
      </div>
    ),
    []
  )

  return (
    <div className="project-items px-8 lg:px-24 mt-20 lg:mt-10">
      <div className="flex flex-col lg:flex-row text-white items-center justify-between">
        {sm && imageRender}
        {!sm && !isOdd ? imageRender : undefined}
        <div className="description-wrapper flex flex-col lg:w-2/4">
          {descriptionRender('Project Name', title)}
          {descriptionRender('Duration', duration)}
          <div className="description">
            <h6 className="text-sm font-light mb-2 opacity-70">Type Project</h6>
            <ul className="list-disc">
              {projectType.map((item, i) => (
                <li className="ml-5 text-lg font-light" key={i}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-5 lg:scale-75 -ml-4 lg:-ml-12">
            <Link to="/shoot">
              <Button primary>See Detail</Button>
            </Link>
          </div>
        </div>
        {!sm && isOdd ? imageRender : undefined}
      </div>
    </div>
  )
}
