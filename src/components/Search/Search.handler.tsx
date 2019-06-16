import { isEmpty } from 'ramda'
import { useEffect, useState } from 'react'

import Constant from '../../constants/Constant'
import { IMovieRes } from '../../models'
import movieService from '../../services/movie.service'

const Handler = () => {
  const [val, setVal] = useState<string>('')
  const [movies, setMovies] = useState<IMovieRes[]>([])
  const [showRes, setShowRes] = useState<boolean>(false)

  const getMovies = async (input: string) => {
    const response = await movieService.getSearchedMovies(input)
    setMovies(response)
    setShowRes(true)
  }

  const handleChange = e => setVal(e.target.value)

  // Debounce. Only call API after last key of user input
  useEffect(() => {
    const input = val.toLowerCase()
    if (!isEmpty(input) && input.length >= Constant.MINIMUM_SEARCH_KEYWORD) {
      const timeout = setTimeout(() => {
        getMovies(input)
      }, Constant.SEARCH_DELAY)

      return () => clearTimeout(timeout)
    }

    setMovies([])
    setShowRes(false)
  }, [val])

  const hideRes = () => {
    setShowRes(false)
    setVal('')
  }

  return { val, movies, showRes, handleChange, hideRes }
}

export default Handler
