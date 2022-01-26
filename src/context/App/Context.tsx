// Vendor
import { createContext } from 'react'
// Internal
import { AppProviderInitialState, IStateAppContext } from './types'

export const initialState: AppProviderInitialState = {
  ui: {
    isLoading: false
  },
  data: {
    name: undefined,
    id: undefined
  }
}

export const AppContext = createContext<IStateAppContext>({
  state: initialState,
  dispatch: () => null
})

AppContext.displayName = 'AppContext'

export default AppContext
