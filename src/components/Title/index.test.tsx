// Vendor
import { render, screen } from '@testing-library/react'
// Internal
import { Title } from './index'

test('renders learn react link', () => {
  render(<Title text="This is the title" />)
  const text = screen.getByText(/this is the title/i)
  expect(text).toBeInTheDocument()
})
