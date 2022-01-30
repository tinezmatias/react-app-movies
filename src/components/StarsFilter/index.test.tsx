// Vendor
import { render, screen } from '@testing-library/react'
// Internal
import { StarsFilter } from './index'

test('renders learn react link', () => {
  render(<StarsFilter />)
  const star = screen.getByTestId('rating-2')
  expect(star).toBeInTheDocument()
})
