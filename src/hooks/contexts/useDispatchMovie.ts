// Internal
import { IMovie, ProviderTypes } from '../../types'
import { useAppContext } from './useAppContext'

export function useDispatchMovie() {
  const { dispatch } = useAppContext()

  const dispatchMovie = (movie: IMovie) =>
    dispatch({ type: ProviderTypes.UpdateData, payload: movie })

  return dispatchMovie
}
