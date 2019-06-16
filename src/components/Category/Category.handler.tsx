import { useEffect, useState } from 'react'

import { IMovieReq, IMovieRes } from '../../models'
import movieService from '../../services/movie.service'

// Hooks
const Handler = (props: IMovieReq) => {
  const [movies, setMovies] = useState<IMovieRes[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const getMovies = async () => {
      const response = await movieService.getMovies(props)
      setMovies(response)
      setIsLoading(false)
    }

    getMovies()
  }, [props])

  return { isLoading, movies, setMovies }
}

export default Handler
