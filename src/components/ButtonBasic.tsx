import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelectedPage } from '@/shared/types'

type Props = {
  children: React.ReactNode
  setSelectedPage: (value: SelectedPage) => void
}

export const ButtonBasic = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className='rounded-md bg-secondary-500 p-2 px-10 hover:bg-primary-500 hover:text-white'
      onClick={() => setSelectedPage(SelectedPage.Home)}
      href={`#${SelectedPage.Home}`}
    >
      {children}
    </AnchorLink>
  )
}
