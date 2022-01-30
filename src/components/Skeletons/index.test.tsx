// Vendor
import { render } from '@testing-library/react'
// Internal
import { MovieCardLoader, MovieDetailsLoader } from './index'

test('renders learn react link', () => {
  const component = render(<MovieCardLoader />)

  expect(component).toBeInTheDocument()
})

test('renders learn react link', () => {
  const component = render(<MovieDetailsLoader />)

  expect(component).toBeInTheDocument()
})
