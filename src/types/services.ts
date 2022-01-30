import { QUERY_STRING } from '../constants'

export interface IMovie {
  adult: boolean
  backdrop_path: string
  genre_ids: Array<number>
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: false
  vote_average: number
  vote_count: number
}

export interface IDiscoverServiceResult {
  page: number
  results: Array<IMovie>
}

export interface IExternalIdServiceResult {
  id: number
  imdb_id: string | null
  facebook_id: string | null
  instagram_id: string | null
  twitter_id: string | null
}

export interface IMovieByIdServiceResult {
  movie_results: Array<IMovie>
  person_results: Array<never>
  tv_results: Array<never>
  tv_episode_results: Array<never>
  tv_season_results: Array<never>
}

export interface IMovieSearchServiceResult {
  page: number
  total_pages: number
  total_results: number
  results: Array<IMovie>
}

export type TQueryParams = Array<keyof typeof QUERY_STRING>
