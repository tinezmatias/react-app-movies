// Vendor
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
// Internal
import { MOVIE_BY_ID_KEY } from '../../constants'
import { getMovieByExternalId } from '../../services'
import { IMovieByIdServiceResult, IMovie, IExternalData } from '../../types'

export const useGetMovieByExternalResource = ({
  externalId,
  externalResource
}: IExternalData) => {
  const [result, setResult] = useState<IMovie>()

  const onSuccess = (data: IMovieByIdServiceResult) =>
    setResult(data.movie_results[0])

  const {
    isLoading,
    isError,
    refetch: fetchMovie
  } = useQuery<IMovieByIdServiceResult>(
    [MOVIE_BY_ID_KEY, externalId],
    async () => getMovieByExternalId(externalId, externalResource),

    { enabled: false, onSuccess, refetchOnMount: false }
  )

  useEffect(() => {
    if (externalResource && externalId) {
      fetchMovie()
    }
  }, [externalResource, externalId, fetchMovie])

  return {
    result,
    isLoading,
    isError
  }
}
