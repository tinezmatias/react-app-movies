// Vendor
import { render, screen } from '@testing-library/react'
// Component
import Details from '.'

// TODO: TESTS
test('renders learn react link', () => {
  render(<Details />)
  const text = screen.getByText(/details/i)
  expect(text).toBeInTheDocument()
})
