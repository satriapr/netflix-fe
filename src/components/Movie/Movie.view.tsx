import React from 'react'
import { Link } from 'react-router-dom'

import { IMovieRes } from '../../models'
import MovieHandler from './Movie.handler'
import styles from './Movie.module.css'

const Movie = ({ Title, imdbID, Poster }: IMovieRes) => {
  const handler = MovieHandler()
  const { handleEnter, handleLeave, isHover } = handler

  return (
    <Link to={`/${imdbID}`}>
      <div
        className={styles.movieCard}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <img src={Poster} alt={Title} />
        {isHover && <h3 className={styles.movieTitle}>{Title}</h3>}
      </div>
    </Link>
  )
}

export default Movie
