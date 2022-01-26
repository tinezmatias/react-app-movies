// Types
import { ProviderTypes, TDataReducer } from '../types'

export const dataReducer: TDataReducer = (state, action) => {
  const stagedState = { ...state }
  switch (action.type) {
    case ProviderTypes.UpdateData:
      stagedState.name = action.payload.name
      return stagedState
    default:
      return state
  }
}

export default dataReducer
