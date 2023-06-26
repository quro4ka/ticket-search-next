'use client'
import { useGetMovieQuery, useGetReviewsQuery } from '@/redux/services/movieApi'
import { FilmItem } from '@/ui/filmItem/page'
import styles from './Film.module.scss'
import { Counter } from '@/ui/counter/page'
import { Button } from '@/ui/button/page'
import { FilmItemFull } from '@/ui/filmItemFull/page'
import { useState } from 'react'

interface Film {
  params: {
    id: string
  }
}

export default function Film({ params: { id } }: Film) {
  let filmData: any[] = []
  let filmReviews: any[] = []
  const { data, isLoading, error } = useGetMovieQuery(id)
  const { data: reviews, isLoading: reviewsLoading, error: reviewsError } = useGetReviewsQuery()
  const [currentFilmId, setCurrentFilmId] = useState(id)

  console.log(data)

  if (isLoading) {
    return <h1>load</h1>
  }

  if (!data || error) {
    return <h1>error</h1>
  }

  if (reviewsLoading) {
    return <h1>load</h1>
  }

  if (!reviews || reviewsError) {
    return <h1>error</h1>
  }

  if (data) {
    for (const film of data) {
      if (film['id'] === id) {
        filmData = film?.['reviewIds']
      }
    }
    console.log('film', filmData)
  }

  if (filmData && reviews) {
    for (let i = 0; i < filmData.length; i++) {
      for (let j = 0; j < reviews.length; j++) {
        if (reviews[j].id === filmData[i]) {
          // cartMovies.push(data[j])
          filmReviews.push(reviews[j])
        }
      }
    }
  }

  return (
    <div className="container">
      <div className={styles.film}>
        <div className={styles.film__info}>
          {data.map(
            (film: any) =>
              currentFilmId === film.id && (
                <FilmItemFull
                  key={film.id}
                  item={film}
                  rightProp={() => (
                    <Counter initialValue={0}>
                      <Counter.Group>
                        <Counter.Item>
                          <Button onClick={() => {}} variant="contained" sx="small" color="red">
                            -
                          </Button>
                        </Counter.Item>
                        <Counter.Item>10</Counter.Item>
                        <Counter.Item>
                          <Button onClick={() => {}} variant="contained" sx="small" color="red">
                            +
                          </Button>
                        </Counter.Item>
                      </Counter.Group>
                    </Counter>
                  )}
                />
              ),
          )}
        </div>
        <div className={styles.film__review}>
          {filmReviews &&
            filmReviews.map((review: any) => <FilmItem key={review} item={review} film={false} />)}
        </div>
      </div>
    </div>
  )
}
