import { Dispatch } from 'react'

// eslint-disable-next-line no-shadow
export enum ProviderTypes {
  // DATA
  UpdateData = 'DATA_PROVIDER_UPDATE_DATA',
  // UI
  ToggleLoading = 'UI_PROVIDER_TOGGLE_LOADING'
}

// DATA PROVIDER
export type DataPayload = {
  [ProviderTypes.UpdateData]: DataProviderType
}

export type DataProviderActions =
  ActionMap<DataPayload>[keyof ActionMap<DataPayload>]

// UI PROVIDER
export type UiPayload = {
  [ProviderTypes.ToggleLoading]: UiProviderType
}

export type UiProviderActions = ActionMap<UiPayload>[keyof ActionMap<UiPayload>]

// ALL ACTIONS TYPES
export type AppActions = DataProviderActions | UiProviderActions

/**
 * COMMON PROVIDER TYPES
 */

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key
      }
    : {
        type: Key
        payload: M[Key]
      }
}

/**
 *  APPLICATION PROVIDER TYPES
 */

export type AppProviderInitialState = {
  data: DataProviderType
  ui: UiProviderType
}

export type DataProviderType = {
  id?: number
  name?: string
}

export type UiProviderType = {
  isLoading?: boolean
}

// REDUCERS
export type TMainReducer = (
  { data, ui }: AppProviderInitialState,
  action: AppActions
) => {
  data: DataProviderType
  ui: UiProviderType
}

export type TDataReducer = (
  state: DataProviderType,
  action: AppActions
) => DataProviderType

export type TUiReducer = (
  state: UiProviderType,
  action: AppActions
) => UiProviderType

// State
export interface IStateAppContext {
  state: AppProviderInitialState
  dispatch: Dispatch<AppActions>
}
