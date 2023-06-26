'use client'

import React, { useCallback, useContext } from 'react'
import { FC, useState } from 'react'
import styles from './Accordion.module.scss'
import Image from 'next/image'

interface ContextValue {
  activeGroup?: any
  switchGroup?: any
}

interface Accordion {
  initialValue: boolean
  children: React.ReactNode
}

interface AccordionItem {
  children?: React.ReactNode
  title: string
}

interface AccordionGroup {
  children?: React.ReactNode
  title: string
  icon?: boolean
}

interface AccordionBody {
  children?: React.ReactNode
  title: string
  icon?: boolean
}

const AccordionContext = React.createContext<ContextValue>({})

export const Accordion = ({ children, initialValue }: Accordion) => {
  const [activeGroup, setActiveGroup] = useState()

  const switchGroup = useCallback((title: any) => {
    setActiveGroup((activeTitle: any) => (activeTitle === title ? undefined : title))
  }, [])

  return (
    <AccordionContext.Provider value={{ activeGroup, switchGroup }}>
      {children}
    </AccordionContext.Provider>
  )
}

Accordion.Item = function AccordionTitle({ children, title }: AccordionItem) {
  return <div className={styles.item}>{title}</div>
}

Accordion.Body = function AccordionTitle({ children, title, icon = true }: AccordionBody) {
  return <div className={styles.body}>{title}</div>
}

Accordion.Group = function AccordionTitle({ children, title, icon = true }: AccordionGroup) {
  const { activeGroup, switchGroup } = useContext(AccordionContext)
  return (
    <div className={styles.group}>
      <button className={styles.question} onClick={() => switchGroup(title)}>
        {title}

        {icon && (
          <div className={activeGroup === title ? styles.arrow__drop : styles.arrow}>
            <Image src="./icons/arrow.svg" width={32} height={32} alt="arrow" />
          </div>
        )}
      </button>
      {activeGroup === title && <div>{children}</div>}
    </div>
  )
}
