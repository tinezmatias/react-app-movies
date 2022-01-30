// Vendor
import axios from 'axios'
// Internals
import {
  IDiscoverServiceResult,
  IExternalIdServiceResult,
  IMovieByIdServiceResult,
  IMovieSearchServiceResult
} from '../types'
import { queryBuilder } from '../utils'
import { API_BASE_URL } from '../constants'

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-type': 'application/json'
  }
})

/**
 * Get the most recent movies
 * e.x: https://api.themoviedb.org/3/discover/movie?api_key=apikey&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate
 */
export const discoverMovies = async () => {
  const url = queryBuilder('/discover/movie', [
    'include_adult',
    'include_video',
    'language',
    'page',
    'sort_by',
    'with_watch_monetization_types'
  ])
  const response = await apiClient.get<IDiscoverServiceResult>(url)
  return response.data
}

/**
 * Get external id by tmdb id
 * e.x: https://api.themoviedb.org/3/movie/557/external_ids?api_key=apikey
 */
export const getExternalId = async (id: string) => {
  const url = queryBuilder(`/movie/${id}/external_ids`)
  const response = await apiClient.get<IExternalIdServiceResult>(url)
  return response.data
}

/**
 * Get one movie by id
 * e.x: https://api.themoviedb.org/3/find/tt0145487?api_key=apikey&language=en-US&external_source=imdb_id
 */
export const getMovieByExternalId = async (id: string, source: string) => {
  const url = queryBuilder(`/find/${id}`, ['language'], {
    external_source: source
  })
  const response = await apiClient.get<IMovieByIdServiceResult>(url)
  return response.data
}

/**
 * Get the movies that match with the string
 * e.x: https://api.themoviedb.org/3/search/movie?api_key=apikey&language=en-US&query=spider&page=1&include_adult=false
 */
export const findMoviesByString = async (queryString: string) => {
  const url = queryBuilder(
    '/search/movie',
    ['language', 'page', 'include_adult'],
    {
      query: queryString
    }
  )
  const response = await apiClient.get<IMovieSearchServiceResult>(url)
  return response.data
}
