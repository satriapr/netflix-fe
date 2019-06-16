// Request to omdbapi
export interface IMovieReq {
  keyword: string
  type: string
  categoryTitle: string
}

// Response from omdbapi
export interface IMovieRes {
  Title: string
  Year?: string
  imdbID: string
  Type?: string
  Poster: string
}

export interface IMovieDetailRes {
  Title: string
  Year?: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: IMovieDetailRating[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  totalSeasons?: string
  BoxOffice?: string
  Response: string
}

interface IMovieDetailRating {
  Source: string
  Value: string
}
