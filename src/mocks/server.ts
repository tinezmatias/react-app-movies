// Vendor
import { setupServer } from 'msw/node'
// Internal
import { handlers } from './handlers'

export const server = setupServer(...handlers)
