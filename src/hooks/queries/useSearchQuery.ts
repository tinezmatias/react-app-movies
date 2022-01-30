// Vendor
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
// Internal
import { MOVIE_BY_ID_KEY } from '../../constants'
import { findMoviesByString } from '../../services'
import { IMovieSearchServiceResult, IMovie } from '../../types'

export function useSearchQuery(queryString?: string) {
  const [movies, setMovies] = useState<IMovie[]>()

  const onSuccess = (data: IMovieSearchServiceResult) => setMovies(data.results)

  const {
    isLoading,
    isError,
    refetch: searchMovies
  } = useQuery<IMovieSearchServiceResult>(
    [MOVIE_BY_ID_KEY, queryString],
    async () => findMoviesByString(queryString!),

    { enabled: false, onSuccess }
  )

  useEffect(() => {
    if (queryString) {
      searchMovies()
    } else {
      setMovies([])
    }
  }, [queryString, searchMovies])

  return {
    movies,
    isLoading,
    isError
  }
}
