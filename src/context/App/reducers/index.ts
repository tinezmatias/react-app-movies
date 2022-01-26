// Internal
import dataReducer from './reducer-data'
import uiReducer from './reducer-ui'
// Types
import { TMainReducer } from '../types'

const mainReducer: TMainReducer = ({ data, ui }, action) => ({
  data: dataReducer(data, action),
  ui: uiReducer(ui, action)
})

export default mainReducer
