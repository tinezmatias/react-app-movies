// Vendor
import { render } from '@testing-library/react'
// Internal
import { MoviesList } from './index'

test('renders learn react link', () => {
  const component = render(<MoviesList />)

  expect(component).toBeInTheDocument()
})
