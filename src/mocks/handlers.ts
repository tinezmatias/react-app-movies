// Vendor
import { rest } from 'msw'
import { API_BASE_URL } from '../constants'
// Internal
import {
  DISCOVER_RESULT,
  IDS_RESULT,
  MOVIE_RESULT,
  SEARCH_RESULT
} from './results'

const discoverHandler = rest.get(
  `${API_BASE_URL}/discover/movie`,
  (req, res, ctx) => res(ctx.status(200), ctx.json(DISCOVER_RESULT))
)

const searchHandler = rest.get(
  `${API_BASE_URL}/search/movie`,
  (req, res, ctx) => {
    const query = req.url.searchParams.get('query')

    const result = { ...SEARCH_RESULT }
    result.results = query
      ? result.results.filter(movie => movie.title.includes(query))
      : []

    return res(ctx.status(200), ctx.json(result))
  }
)

const idsHandler = rest.get(
  `${API_BASE_URL}/movie/:id/external_ids`,
  (req, res, ctx) => {
    const id = req.params.id as string

    const result = { ...IDS_RESULT }
    result.id = parseInt(id, 10)
    result.imdb_id = id

    return res(ctx.status(200), ctx.json(result))
  }
)

const movieHandler = rest.get(`${API_BASE_URL}/find/:id`, (req, res, ctx) => {
  const id = parseInt(req.params.id as string, 10)

  const result = { ...MOVIE_RESULT }
  result.movie_results = result.movie_results.filter(movie => movie.id === id)

  return res(ctx.status(200), ctx.json(result))
})

export const handlers = [
  discoverHandler,
  searchHandler,
  idsHandler,
  movieHandler
]
