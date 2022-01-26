// Types
import { ProviderTypes, TUiReducer } from '../types'

export const appReducer: TUiReducer = (state, action) => {
  const stagedState = { ...state }

  switch (action.type) {
    case ProviderTypes.ToggleLoading:
      stagedState.isLoading = !state.isLoading
      return stagedState
    default:
      return state
  }
}

export default appReducer
