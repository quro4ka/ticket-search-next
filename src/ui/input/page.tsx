'use client'

import styles from './Input.module.scss'

export const Input = ({ title = '', ...props }) => {
  return (
    <label className={styles.wrapper}>
      <h3 className={styles.title}>{title}</h3>
      <input className={styles.input} type="text" {...props} />
    </label>
  )
}
