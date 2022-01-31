// Vendor
import { render } from '@testing-library/react'
// Internal
import { MovieCardLoader, MovieDetailsLoader, PageLoader } from './index'

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

test('PageLoader should render', () => {
  const screen = render(<PageLoader />)

  const loader = screen.getByTestId('skeleton')

  expect(loader).toBeInTheDocument()
})
