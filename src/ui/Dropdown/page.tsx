'use client'
import cn from 'classnames'
import Image from 'next/image'
import styles from './Dropdown.module.scss'
import { useState } from 'react'

interface List {
  list: string[]
  defaultTitle: string
}

export const DropDown = ({ list, defaultTitle }: List) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isToggled, setIsToggled] = useState(false)
  const [title, setTitle] = useState(list[0])

  const handleGenre = (genre: string) => {
    setTitle(genre)
    setIsOpen(false)
    setIsToggled(true)
  }

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.defaultTitle}>{defaultTitle}</h3>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={isOpen ? cn(styles.header, styles.header_open) : styles.header}
      >
        <div className={isToggled ? cn(styles.title, styles.title_toggled) : styles.title}>
          {title}
        </div>
        <div>
          <Image
            className={isOpen ? cn(styles.icon, styles.icon_rotate) : styles.icon}
            src="./icons/arrowDropDown.svg"
            width={20}
            height={20}
            alt="arrow"
          />
        </div>
      </div>

      {isOpen && (
        <div className={styles.list}>
          {list.map((genre) => (
            <button onClick={() => handleGenre(genre)} key={genre} className={styles.item}>
              {genre}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
