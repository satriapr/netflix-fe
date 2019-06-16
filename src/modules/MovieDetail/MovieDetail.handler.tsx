import { useEffect, useState } from 'react'

import Constant from '../../constants/Constant'
import { IMovieDetailRes } from '../../models'
import movieService from '../../services/movie.service'

const initialObj = {
  Title: Constant.NA,
  Year: Constant.NA,
  Rated: Constant.NA,
  Released: Constant.NA,
  Runtime: Constant.NA,
  Genre: Constant.NA,
  Director: Constant.NA,
  Writer: Constant.NA,
  Actors: Constant.NA,
  Plot: Constant.NA,
  Language: Constant.NA,
  Country: Constant.NA,
  Awards: Constant.NA,
  Poster: Constant.NA,
  Ratings: [
    {
      Source: Constant.NA,
      Value: Constant.NA
    }
  ],
  Metascore: Constant.NA,
  imdbRating: Constant.NA,
  imdbVotes: Constant.NA,
  imdbID: Constant.NA,
  Type: Constant.NA,
  totalSeasons: Constant.NA,
  Response: Constant.NA,
  BoxOffice: Constant.NA
}

// Hooks
const Handler = (id: string) => {
  const [movie, setMovie] = useState<IMovieDetailRes>(initialObj)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const getMovie = async () => {
      const response = await movieService.getMovie(id)
      setMovie(response)
      setIsLoading(false)
    }

    getMovie()
  }, [id])

  return { isLoading, movie, setMovie }
}

export default Handler
