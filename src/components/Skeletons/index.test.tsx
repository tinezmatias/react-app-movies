// Vendor
import { render } from '@testing-library/react'
// Internal
import { MovieCardLoader, MovieDetailsLoader } from './index'

test('MovieCardLoader should render', () => {
  const screen = render(<MovieCardLoader />)

  const loader = screen.getByTestId('skeleton')

  expect(loader).toBeInTheDocument()
})

test('MovieDetailsLoader should render', () => {
  const screen = render(<MovieDetailsLoader />)

  const loader = screen.getByTestId('skeleton')

  expect(loader).toBeInTheDocument()
})
