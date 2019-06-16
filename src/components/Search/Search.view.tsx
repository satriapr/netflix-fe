import React from 'react'
import { Link } from 'react-router-dom'

import Constant from '../../constants/Constant'
import searchHandler from './Search.handler'
import styles from './Search.module.css'

const Search = () => {
  const handler = searchHandler()
  const { val, movies, handleChange, showRes, hideRes } = handler

  const movieList = movies.length ? (
    movies.map(movie => {
      return (
        <li key={movie.imdbID}>
          <Link to={`/${movie.imdbID}`} onClick={hideRes}>
            {movie.Title}
          </Link>
        </li>
      )
    })
  ) : (
    <li>{Constant.MOVIE_NOT_FOUND}</li>
  )

  return (
    <React.Fragment>
      <input
        type="text"
        name="searchVal"
        onChange={handleChange}
        className={styles.searchInput}
        placeholder={Constant.SEARCH_PLACEHOLDER}
        value={val}
      />
      {showRes && val.length >= Constant.MINIMUM_SEARCH_KEYWORD && (
        <div className={styles.searchValues}>
          <ul>{movieList}</ul>
        </div>
      )}
    </React.Fragment>
  )
}

export default Search
