import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import Constant from './../../constants/Constant'
import movieDetailHandler from './MovieDetail.handler'
import styles from './MovieDetail.module.css'

const MovieDetail = props => {
  const { id } = props.match.params
  const handler = movieDetailHandler(id)
  const { isLoading } = handler
  const {
    Title,
    Released,
    Runtime,
    Genre,
    Director,
    imdbRating,
    Actors,
    Plot,
    Poster,
    BoxOffice
  } = handler.movie

  const content = (
    <div className={styles.backHeight}>
      <div className={styles.content}>
        <h1>{Title}</h1>

        <div className={styles.movieDetailImage}>
          <img src={Poster} alt={Title} />
        </div>

        <p className={styles.runAndRate}>
          <span className={styles.run}> {Runtime}</span>
          <span className={styles.rate}>
            <FontAwesomeIcon icon={faStar} /> {imdbRating}
          </span>
        </p>
        <div className={styles.overviewContainer}>
          <p>{Plot}</p>

          <p>
            <span className={styles.greyed}>{Constant.RELEASE_DATE}: </span>
            {Released}
          </p>

          <p>
            <span className={styles.greyed}>{Constant.GENRE}: </span>
            {Genre}
          </p>

          <p>
            <span className={styles.greyed}>{Constant.DIRECTOR}: </span>{' '}
            {Director}
          </p>

          <p>
            <span className={styles.greyed}>{Constant.ACTORS}: </span>
            {Actors}
          </p>

          <p>
            <span className={styles.greyed}>{Constant.TOTAL_REVENUE}: </span>
            {BoxOffice}
          </p>
        </div>
      </div>
    </div>
  )

  return (
    <React.Fragment>
      {!isLoading ? content : <div className="loading-mask" />}
    </React.Fragment>
  )
}

export default MovieDetail
