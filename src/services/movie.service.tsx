import { pathOr } from 'ramda'

import Constant from '../constants/Constant'
import { IMovieDetailRes, IMovieReq, IMovieRes } from '../models'
import axiosApi from './axiosApi'

const getMoviesData = pathOr([], ['data', 'Search']) // safely access property 'data.Search', because payload needed is inside it
const getMovies = (payload: IMovieReq): Promise<IMovieRes[]> =>
  axiosApi
    .get('/', {
      params: {
        apikey: Constant.API_KEY,
        s: payload.keyword,
        type: payload.type
      }
    })
    .then(getMoviesData)

const getMovieData = pathOr({}, ['data']) // safely access property 'data', because payload needed is inside it
const getMovie = (id: string): Promise<IMovieDetailRes> =>
  axiosApi
    .get('/', {
      params: {
        apikey: Constant.API_KEY,
        i: id
      }
    })
    .then(getMovieData)

const getSearchedMoviesData = pathOr([], ['data', 'Search']) // safely access property 'data.Search', because payload needed is inside it
const getSearchedMovies = (keyword: string): Promise<IMovieRes[]> =>
  axiosApi
    .get('/', {
      params: {
        apikey: Constant.API_KEY,
        s: keyword
      }
    })
    .then(getSearchedMoviesData)

export default {
  getMovies,
  getMovie,
  getSearchedMovies
}
