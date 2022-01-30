// Vendor
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// Internal

import { IMovie, ProviderTypes } from '../../types'
import {
  useAppContext,
  useGetExternalResource,
  useGetMovieByExternalResource
} from '..'

export function useGetByIdQuery() {
  const [movie, setMovie] = useState<IMovie>()
  const [shouldFetchMovie, setShouldFetchMovie] = useState<boolean>(false)

  const { movieid } = useParams<{ movieid: string }>()

  // Handle Movie from state
  const {
    state: { data },
    dispatch
  } = useAppContext()

  useEffect(() => {
    if (data && data.id === movieid) {
      setMovie(data as IMovie)
    } else {
      setShouldFetchMovie(true)
    }
  }, [data, movieid])

  // Hanlde movie from api
  const { data: externalData, ...external } = useGetExternalResource(
    shouldFetchMovie,
    movieid!
  )

  const { result, ...rest } = useGetMovieByExternalResource(externalData)

  useEffect(() => {
    if (result) {
      setMovie(result)
      dispatch({ type: ProviderTypes.UpdateData, payload: result })
    }
  }, [result, dispatch])

  const isLoading = external.isLoading || rest.isLoading
  const isError = external.isError || rest.isError

  return {
    movie,
    isLoading,
    isError
  }
}
