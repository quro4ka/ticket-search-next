'use client'

import React from 'react'
import styles from './Box.module.scss'

interface Box {
  propRight?: () => any
  propLeft?: () => any
}

export const Box = ({ propLeft, propRight }: Box) => {
  return (
    <div className={styles.box}>
      <div className={styles.left}>{propLeft?.()}</div>
      <div className={styles.right}>{propRight?.()}</div>
    </div>
  )
}
