// Vendor
import { render, screen } from '@testing-library/react'
// Component
import Details from '.'

test('renders learn react link', () => {
  render(<Details />)
  const text = screen.getByText(/details/i)
  expect(text).toBeInTheDocument()
})
