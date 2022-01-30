// Vendor
import { createContext } from 'react'
// Internal
import { AppProviderInitialState, IStateAppContext } from '../../types'

export const initialState: AppProviderInitialState = {
  ui: {
    popularityFilterValue: 0,
    searchFilterValue: ''
  },
  data: {
    id: undefined
  }
}

export const AppContext = createContext<IStateAppContext>({
  state: initialState,
  dispatch: () => null
})

AppContext.displayName = 'AppContext'

export default AppContext
