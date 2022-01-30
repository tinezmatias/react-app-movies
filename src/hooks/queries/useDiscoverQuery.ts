// Vendor
import { useState } from 'react'
import { useQuery } from 'react-query'
// Internal

// Internal
import { DISCOVER_KEY } from '../../constants'
import { discoverMovies } from '../../services'
import { IDiscoverServiceResult, IMovie } from '../../types'

export function useDiscoverQuery() {
  const [movies, setMovies] = useState<Array<IMovie>>([])

  const onSuccess = (data: IDiscoverServiceResult) => {
    if (data && data.results) {
      setMovies(data.results)
    }
  }

  const { isLoading, isError } = useQuery<IDiscoverServiceResult, Error>(
    DISCOVER_KEY,
    discoverMovies,
    {
      onSuccess
    }
  )

  return {
    movies,
    isLoading,
    isError
  }
}
