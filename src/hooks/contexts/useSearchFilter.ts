// Internal
import { ProviderTypes } from '../../types'
import { useAppContext } from './useAppContext'

export function useSearchFilter() {
  const {
    dispatch,
    state: {
      ui: { searchFilterValue: currentFilterValue }
    }
  } = useAppContext()

  const dispatchFilter = (filterValue: string) =>
    dispatch({
      type: ProviderTypes.UpdateSearchFilter,
      payload: { searchFilterValue: filterValue }
    })

  return { dispatchFilter, currentFilterValue }
}
