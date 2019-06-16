import React from 'react'

import Constant from '../../constants/Constant'
import { IMovieReq } from '../../models'
import Category from '../Category/Category.view'

// OMDB API can't retrieve 'type'(genre) without keyword, so i harcode the keyword.
const movies: IMovieReq[] = [
  {
    keyword: Constant.MAN,
    type: Constant.MOVIE,
    categoryTitle: Constant.POPULAR_ON_NETFLIX
  },
  {
    keyword: Constant.GUN,
    type: Constant.MOVIE,
    categoryTitle: Constant.CLASSIC_FILM
  },
  {
    keyword: Constant.MAN,
    type: Constant.SERIES,
    categoryTitle: Constant.TV_SERIES
  }
]

const CategoryList = () => {
  return (
    <React.Fragment>
      {movies.map((movie: IMovieReq, i) => {
        const { keyword, type, categoryTitle } = movie

        return (
          <div key={i}>
            <Category
              keyword={keyword}
              type={type}
              categoryTitle={categoryTitle}
            />
          </div>
        )
      })}
    </React.Fragment>
  )
}

export default CategoryList
