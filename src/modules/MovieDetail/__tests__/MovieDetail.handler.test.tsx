import { renderHook, act } from 'react-hooks-testing-library'

// import movieService from '../../../services/movie.service'
import movieDetailHandler from '.././MovieDetail.handler'

jest.mock('../../../services/movie.service', () => ({
  getMovie: jest.fn()
}))

const id = '123'

describe('Movie Detail', () => {
  test('should setMovie', done => {
    const response = {
      Title: 'Man of Steel',
      Year: '2013',
      Rated: 'PG-13',
      Released: '14 Jun 2013',
      Runtime: '143 min',
      Genre: 'Action, Adventure, Sci-Fi',
      Director: 'Zack Snyder',
      Writer:
        'David S. Goyer (screenplay), David S. Goyer (story), Christopher Nolan (story), Jerry Siegel (Superman created by), Joe Shuster (Superman created by)',
      Actors: 'Henry Cavill, Amy Adams, Michael Shannon, Diane Lane',
      Plot:
        'Clark Kent is an alien who as a child was evacuated from his dying world and came to Earth, living as a normal human. But when survivors of his alien home invade Earth, he must reveal himself to the world.',
      Language: 'English',
      Country: 'USA, UK',
      Awards: '7 wins & 46 nominations.',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTk5ODk1NDkxMF5BMl5BanBnXkFtZTcwNTA5OTY0OQ@@._V1_SX300.jpg',
      Ratings: [
        {
          Source: 'Rotten Tomatoes',
          Value: '56%'
        }
      ],
      Metascore: '55',
      imdbRating: '7.1',
      imdbVotes: '646,109',
      imdbID: 'tt0770828',
      Type: 'movie',
      TotalSeasons: '7',
      Response: 'True'
    }
    const { result } = renderHook(() => movieDetailHandler(id))

    act(() => result.current.setMovie(response))
    expect(result.current.movie).toEqual(response)
    done()
  })

  // test('should call getMovie', async () => {
  //   const { result } = renderHook(() => movieDetailHandler(id))

  //   movieService.getMovie.mockResolvedValue([])

  //   await act(async() => await result.current.getMovie())

  //   expect(result.current.setMovie).toBeCalled()
  // })
})
