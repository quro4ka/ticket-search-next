'use client'

import Image from 'next/image'
import basketSvg from './../../../public/icons/basket.svg'
import { Button } from '../button/page'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { selectCartModule } from '@/redux/features/cart/selector'
import styles from './Header.module.scss'

export const Header = () => {
  const products = useSelector((state) => selectCartModule(state))
  let total = 0

  for (const num of Object.values(products)) {
    total += num
  }

  const flag = false
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__wrapper}>
          <h2 className={styles.header__title}>
            <Link href="/">Билетопоиск</Link>
          </h2>
          <div className={styles.header__cart}>
            {total > 0 && (
              <Link href="/cart">
                <Button onClick={() => {}} variant="contained" color="red" sx="default">
                  {total}
                </Button>
              </Link>
            )}
            <Link href="/cart">
              <Image src={basketSvg} width={32} height={32} alt="basket" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
