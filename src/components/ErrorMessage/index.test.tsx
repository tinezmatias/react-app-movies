// Vendor
import { render, screen } from '@testing-library/react'
// Internal
import { ErrorMessage } from './index'
import { TEXT_ERROR_MESSAGE } from '../../constants'

test('renders learn react link', () => {
  render(<ErrorMessage />)
  const text = screen.getByText(TEXT_ERROR_MESSAGE)
  expect(text).toBeInTheDocument()
})
