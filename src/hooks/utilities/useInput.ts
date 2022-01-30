// Internal
import { useSearchFilter } from '../contexts'

export function useInput() {
  const { currentFilterValue, dispatchFilter } = useSearchFilter()

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatchFilter(e.target.value || '')

  return { value: currentFilterValue, onChange }
}
