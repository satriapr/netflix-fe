import { renderHook, act } from 'react-hooks-testing-library'

// import movieService from '../../../services/movie.service'
import categoryHandler from '.././Category.handler'

jest.mock('../../../services/movie.service', () => ({
  getMovies: jest.fn()
}))

const props = {
  keyword: 'man',
  type: 'movies',
  categoryTitle: 'popular'
}

describe('Category', () => {
  test('should setMovies', done => {
    const response = [
      {
        Title: 'Running Man',
        imdbID: '123123',
        Poster: ''
      }
    ]
    const { result } = renderHook(() => categoryHandler(props))

    act(() => result.current.setMovies(response))
    expect(result.current.movies).toEqual(response)
    done()
  })
})
