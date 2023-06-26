import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => 'movies',
    }),
    getMovie: builder.query({
      query: (movieId) => `movies?movieId=${movieId}`,
    }),
    getReviews: builder.query({
      query: (reviewId) => `reviews`,
    }),
  }),
})

export const { useGetMoviesQuery, useGetMovieQuery, useGetReviewsQuery } = movieApi
