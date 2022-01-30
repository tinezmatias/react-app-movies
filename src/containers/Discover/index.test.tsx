// Vendor
import { render, screen } from '@testing-library/react'
// Component
import Discover from '.'
// TODO: TESTS
test('renders learn react link', () => {
  render(<Discover />)
  const text = screen.getByText(/discover/i)
  expect(text).toBeInTheDocument()
})
