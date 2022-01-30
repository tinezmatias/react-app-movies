// Vendor
import { render } from '@testing-library/react'
// Internal
import { DetailsCard } from './index'

test('renders learn react link', () => {
  // TODO: MOCK MOVIE
  const movie: any = {}
  const component = render(<DetailsCard movie={movie} />)
  expect(component).toBeInTheDocument()
})
