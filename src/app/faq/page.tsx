'use client'

import { Accordion } from '@/ui/accordion/page'

export default function Faq() {
  return (
    <div className="container">
      <main className="main">
        <Accordion initialValue={false}>
          <Accordion.Item title="Вопросы-Ответы" />
          <Accordion.Group title="Group_1">
            <Accordion.Body
              title="Что такое Билетопоиск?
                    Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов."
            />
          </Accordion.Group>
          <Accordion.Group title="Group_2">
            <Accordion.Body
              title="Что такое Билетопоиск?
                    Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов."
            />
          </Accordion.Group>
          <Accordion.Group title="Group_3">
            <Accordion.Body
              title="Что такое Билетопоиск?
                    Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов."
            />
          </Accordion.Group>
        </Accordion>
      </main>
    </div>
  )
}
