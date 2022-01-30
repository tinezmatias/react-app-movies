// Vendor
import { useContext } from 'react'
// Internal
import { IStateAppContext } from '../../types'
import { AppContext } from '../../context'

export const useAppContext = (): IStateAppContext => {
  const state = useContext(AppContext)

  if (!state) {
    throw new Error('AppContext should we used under the app provider')
  }

  return { ...state }
}
