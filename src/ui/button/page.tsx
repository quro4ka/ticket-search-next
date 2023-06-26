'use client'
import { FC } from 'react'
import cn from 'classnames'
import styles from '@/ui/button/Button.module.scss'

interface Button {
  sx: 'default' | 'small'
  color: 'red' | 'orange'
  variant?: 'text' | 'outlined' | 'contained'
  children: React.ReactNode
  onClick: Function
}

export const Button: FC<Button> = ({ children, onClick, ...props }) => {
  // console.log('props', props)

  let style = cn(styles.btn)
  //   console.log(style)

  if (props.sx === 'default') {
    style += ' ' + cn(styles.btn__default)
  } else if (props.sx === 'small') {
    style += ' ' + cn(styles.btn__small)
  }

  if (props.variant === 'contained') {
    if (props.color === 'red') {
      style += ' ' + cn(styles.btn__contained_red)
    } else if (props.color === 'orange') {
      style += ' ' + cn(styles.btn__contained_orange)
    }
  }

  if (props.variant === 'outlined') {
    if (props.color === 'red') {
      style += ' ' + cn(styles.btn__outlined_red)
    } else if (props.color === 'orange') {
      style += ' ' + cn(styles.btn__outlined_orange)
    }
  }

  return (
    <button onClick={() => onClick()} className={style}>
      {children}
    </button>
  )
}
