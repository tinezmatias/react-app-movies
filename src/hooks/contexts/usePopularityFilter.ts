// Internal
import { ProviderTypes } from '../../types'
import { useAppContext } from './useAppContext'

export function usePopularityFilter() {
  const {
    dispatch,
    state: {
      ui: { popularityFilterValue: currentFilterValue }
    }
  } = useAppContext()

  const dispatchFilter = (filterValue: number) =>
    dispatch({
      type: ProviderTypes.UpdatePopularityFilter,
      payload: { popularityFilterValue: filterValue }
    })

  return { dispatchFilter, currentFilterValue }
}
