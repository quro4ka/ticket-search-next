'use client'

import React, { useCallback, useContext } from 'react'
import { FC, useState } from 'react'
import styles from './Counter.module.scss'
import Image from 'next/image'

interface ContextValue {
  activeGroup?: any
  switchGroup?: any
}

interface Counter {
  initialValue: number | string
  children: React.ReactNode
}

interface CounterItem {
  children?: React.ReactNode
  value?: string | number
}
interface CounterValue {
  //   children?: React.ReactNode
  value?: string | number
}

interface CounterGroup {
  children?: React.ReactNode
  // title: string
  icon?: boolean
}

// interface AccordionBody {
//   children?: React.ReactNode
//   title: string
//   icon?: boolean
// }

const CounterContext = React.createContext<ContextValue>({})

export const Counter = ({ children, initialValue }: Counter) => {
  const [activeGroup, setActiveGroup] = useState(0)

  const switchGroup = useCallback((title: any) => {
    setActiveGroup((activeTitle: any) => (activeTitle === title ? undefined : title))
  }, [])

  return (
    <CounterContext.Provider value={{ activeGroup, switchGroup }}>
      {children}
    </CounterContext.Provider>
  )
}

Counter.Item = function CounterTitle({ children }: CounterItem) {
  return <div className={styles.item}>{children}</div>
}

Counter.Value = function CounterValue({ value }: CounterValue) {
  return <div className={styles.item}>{value}</div>
}

// Counter.Body = function AccordionTitle({ children, title, icon = true }: AccordionBody) {
//   return <div className={styles.body}>{title}</div>
// }

Counter.Group = function AccordionTitle({ children, icon = true }: CounterGroup) {
  const { activeGroup, switchGroup } = useContext(CounterContext)
  return (
    <div className={styles.group}>
      {/* <button className={styles.question} onClick={() => switchGroup(title)}>
        {title}

        {icon && (
          <div className={activeGroup === title ? styles.arrow__drop : styles.arrow}>
            <Image src="./icons/arrow.svg" width={32} height={32} alt="arrow" />
          </div>
        )}
      </button>
      {activeGroup === title && <div>{children}</div>} */}
      {children}
    </div>
  )
}
