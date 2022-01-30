// Vendor
import { render, screen } from '@testing-library/react'
// Internal
import { SubTitle } from './index'

test('renders learn react link', () => {
  render(<SubTitle text="This is the subtitle" />)
  const text = screen.getByText(/this is the subtitle/i)
  expect(text).toBeInTheDocument()
})
