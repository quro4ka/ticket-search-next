'use client'
import { useDispatch, useSelector } from 'react-redux'
import styles from './FilmItemFull.module.scss'
import { selectProductAmount } from '@/redux/features/cart/selector'
import { Counter } from '../counter/page'
import { Button } from '../button/page'
import { cartActions } from '@/redux/features/cart'

export const FilmItemFull = ({ item, rightProp }: any) => {
  const { id, title, posterUrl, genre, description, rating, director, releaseYear } = item
  const productAmount = useSelector((state) => selectProductAmount(state, id))
  const dispatch = useDispatch()

  return (
    <div className={styles.item}>
      <div className={styles.left}>
        <div className={styles.avatar}>
          <img src={posterUrl} alt="film" />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <ul className={styles.list}>
            <li className={styles.list__item}>
              <h3>Genre:</h3>
              <p>{genre}</p>
            </li>
            <li className={styles.list__item}>
              <h3>releaseYear:</h3>
              <p>{releaseYear}</p>
            </li>
            <li className={styles.list__item}>
              <h3>rating:</h3>
              <p>{rating}</p>
            </li>
            <li className={styles.list__item}>
              <h3>director:</h3>
              <p>{director}</p>
            </li>
          </ul>
          <div className={styles.desc}>
            <h2 className={styles.desc__title}>Описание:</h2>
            <p className={styles.desc__text}>{description}</p>
          </div>
        </div>
      </div>
      <div className={styles.right}>
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
          </Counter.Group>
        </Counter>
      </div>
    </div>
  )
}
