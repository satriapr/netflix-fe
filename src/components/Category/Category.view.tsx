import React from 'react'
import ScrollMenu from 'react-horizontal-scrolling-menu'

import { IMovieReq, IMovieRes } from '../../models'
import { ArrowLeft, ArrowRight } from '../CategoryArrow/CategoryArrow.view'
import Movie from '../Movie/Movie.view'
import categoryHandler from './Category.handler'
import styles from './Category.module.css'

const Category = (props: IMovieReq) => {
  const handler = categoryHandler(props)
  const { movies, isLoading } = handler

  const menu = movies.map((movie: IMovieRes, i) => {
    const { Title, imdbID, Poster } = movie

    return (
      <div className={styles.menuItem} key={i}>
        <Movie Title={Title} imdbID={imdbID} Poster={Poster} />
      </div>
    )
  })

  return (
    <React.Fragment>
      {!isLoading ? (
        <div className={styles.lists}>
          <h2 className={styles.categoryTitle}>{props.categoryTitle}</h2>
          <ScrollMenu
            data={menu}
            arrowLeft={ArrowLeft}
            arrowRight={ArrowRight}
            dragging={true}
            wheel={false}
            alignCenter={false}
            clickWhenDrag={false}
          />
        </div>
      ) : (
        <div className="loading-mask" />
      )}
    </React.Fragment>
  )
}

export default Category
