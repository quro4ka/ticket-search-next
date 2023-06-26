import Link from 'next/link'
import styles from './Footer.module.scss'

export const Footer = () => {
  const flag = false
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__wrapper}>
          <Link href="/faq">Вопросы-ответы</Link>
          <Link href="/about">О нас</Link>
        </div>
      </div>
    </footer>
  )
}
