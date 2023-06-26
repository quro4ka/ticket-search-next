'use client'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { selectProductAmount } from '@/redux/features/cart/selector'
import { cartActions } from '@/redux/features/cart'
import styles from './FilmItem.module.scss'
import { Counter } from '../counter/page'
import { Button } from '../button/page'
import Image from 'next/image'
import photo from './../../../public/icons/photo.svg'
import { Modal } from '../modal/page'
import { useState } from 'react'
import { createPortal } from 'react-dom'

export const FilmItem = ({ item, film = true, remove = false }: any) => {
  const { id, title, posterUrl, genre, name, text, rating } = item
  const productAmount = useSelector((state) => selectProductAmount(state, id))
  const dispatch = useDispatch()
  const [modal, setModal] = useState(false)
  // () => dispatch(cartActions.reset(id))

  const removeItem = () => {
    setModal(!modal)
  }

  return (
    <div className={styles.item}>
      <div className={styles.left}>
        {film ? (
          <Link href={`/film/${id}`}>
            <div className={styles.avatar}>
              <img src={posterUrl} alt="film" />
            </div>
          </Link>
        ) : (
          <div className={styles.avatar}>
            {/* <img src={posterUrl} alt="film" /> */}
            <Image src={photo} width={26} height={22} alt="photo" />
          </div>
        )}
        <div className={styles.content}>
          {film ? (
            <Link style={{ color: '#000' }} href={`/film/${id}`}>
              <h2 className={styles.title}>{title || name}</h2>
            </Link>
          ) : (
            <h2 className={styles.title}>{title || name}</h2>
          )}
          <span className={styles.genre}>{genre || text}</span>
        </div>
      </div>
      <div className={styles.right}>
        {film ? (
          <Counter initialValue={productAmount}>
            <Counter.Group>
              <Counter.Item>
                {productAmount === 0 ? (
                  <Button
                    onClick={() => dispatch(cartActions.decrement(id))}
                    variant="contained"
                    sx="small"
                    color="orange"
                  >
                    -
                  </Button>
                ) : (
                  <Button
                    onClick={() => dispatch(cartActions.decrement(id))}
                    variant="contained"
                    sx="small"
                    color="red"
                  >
                    -
                  </Button>
                )}
              </Counter.Item>
              <Counter.Item>{productAmount}</Counter.Item>
              <Counter.Item>
                {productAmount === 30 ? (
                  <Button
                    onClick={() => dispatch(cartActions.increment(id))}
                    variant="contained"
                    sx="small"
                    color="orange"
                  >
                    +
                  </Button>
                ) : (
                  <Button
                    onClick={() => dispatch(cartActions.increment(id))}
                    variant="contained"
                    sx="small"
                    color="red"
                  >
                    +
                  </Button>
                )}
              </Counter.Item>
              {remove && (
                <Counter.Item>
                  <Button onClick={removeItem} variant="text" sx="small" color="red">
                    <Image src="./icons/close.svg" width={12} height={12} alt="close" />
                  </Button>
                </Counter.Item>
              )}
            </Counter.Group>
          </Counter>
        ) : (
          <p style={{ fontSize: 16 }}>
            Оценка: <span style={{ fontWeight: 700 }}>{rating}</span>
          </p>
        )}
      </div>
      {modal && createPortal(<Modal setValue={setModal} id={id} />, document.body)}
    </div>
  )
}
