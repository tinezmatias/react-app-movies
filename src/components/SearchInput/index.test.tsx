// Vendor
import { render, screen } from '@testing-library/react'
// Internal
import { SearchInput } from './index'
import { TEXT_SEARCH_PLACE_HOLDER } from '../../constants'

test('renders learn react link', () => {
  const onChange = jest.fn(() => {})
  render(<SearchInput onChange={onChange} value="" />)
  const text = screen.getByText(TEXT_SEARCH_PLACE_HOLDER)
  expect(text).toBeInTheDocument()
})
