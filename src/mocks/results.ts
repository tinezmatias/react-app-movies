import { mockMovies } from './data'

export const DISCOVER_RESULT = {
  page: 1,
  total_pages: 1,
  total_results: mockMovies.length,
  results: mockMovies
}

export const SEARCH_RESULT = {
  page: 1,
  total_pages: 1,
  total_results: mockMovies.length,
  results: mockMovies
}

export const IDS_RESULT = {
  facebook_id: '',
  id: 0,
  imdb_id: '',
  instagram_id: '',
  twitter_id: ''
}

export const MOVIE_RESULT = {
  movie_results: mockMovies,
  person_results: [],
  tv_episode_results: [],
  tv_results: [],
  tv_season_results: []
}
