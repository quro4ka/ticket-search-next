'use client'

import { FilmItem } from '@/ui/filmItem/page'
import styles from './Cart.module.scss'
import { useSelector } from 'react-redux'
import { selectCartModule } from '@/redux/features/cart/selector'
import { useGetMoviesQuery } from '@/redux/services/movieApi'
import { Box } from '@/ui/box/page'

export default function Cart() {
  const cart = useSelector((state) => selectCartModule(state))
  const { data, isLoading, isError } = useGetMoviesQuery()
  const cartMovies = []

  let total = 0

  for (const num of Object.values(cart)) {
    total += num
  }

  if (isLoading) {
    return <h1>isLoading</h1>
  }

  if (isError) {
    return <h1>error</h1>
  }

  if (data) {
    for (let i = 0; i < Object.keys(cart).length; i++) {
      for (let j = 0; j < data.length; j++) {
        if (data[j].id === Object.keys(cart)[i]) {
          cartMovies.push(data[j])
        }
      }
    }
  }

  return (
    <div className="container">
      <div className={styles.cart}>
        <div className={styles.items}>
          {cartMovies.length > 0 ? (
            cartMovies.map((film) => <FilmItem key={film?.id} item={film} remove={true} />)
          ) : (
            <h1>Корзина пуста</h1>
          )}
        </div>
        <div className={styles.total}>
          <Box
            propLeft={() => <h2 style={{ fontSize: 20 }}>Итого билетов:</h2>}
            propRight={() => <h2 style={{ fontSize: 20 }}>{total}</h2>}
          />
        </div>
      </div>
    </div>
  )
}
