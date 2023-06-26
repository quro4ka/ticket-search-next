'use client'

import { Button } from '@/ui/button/page'
import { Accordion } from '@/ui/accordion/page'
import { Counter } from '@/ui/counter/page'
import { FilmItem } from '@/ui/filmItem/page'
import { useGetMoviesQuery } from '@/redux/services/movieApi'
import styles from './page.module.css'
import { DropDown } from '@/ui/Dropdown/page'
import { useEffect, useState } from 'react'
import { Input } from '@/ui/input/page'

let genres: string[] = ['Не выбран']
export default function Home() {
  const { data, isLoading, error } = useGetMoviesQuery()
  const [searchName, setSearchName] = useState('')

  if (isLoading) {
    return <h1>Loading</h1>
  }

  if (!data || error) {
    return <h1>Not found</h1>
  }

  if (data) {
    for (let i = 0; i < data.length; i++) {
      genres.push(data[i].genre)
    }

    genres = [...new Set(genres)]

    // console.log('genres', genres)
  }

  return (
    <div className="container">
      <main className={styles.main}>
        <aside className={styles.aside}>
          <div className={styles.wrapper}>
            <div className={styles.filters}>
              <Input
                value={searchName}
                onChange={(e: any) => setSearchName(e.target.value)}
                style={{ marginBottom: 20 }}
                title="Название"
                placeholder="Введите название"
              />
              <DropDown list={genres} defaultTitle="Жанр" />
              <DropDown list={genres} defaultTitle="Жанр" />
            </div>
          </div>
        </aside>
        <div className={styles.film__items}>
          {data
            .filter((value: any) => value.title.toLowerCase().includes(searchName))
            .map((item: any) => (
              <FilmItem item={item} key={item.id} />
            ))}
        </div>
      </main>
    </div>
  )
}
