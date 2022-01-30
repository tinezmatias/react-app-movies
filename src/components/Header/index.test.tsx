// Vendor
import { render, screen } from '@testing-library/react'
// Internal
import { Header } from './index'
import {
  TEXT_SEARCH_PLACE_HOLDER,
  TEXT_SUB_TITLE,
  TEXT_TITLE
} from '../../constants'

test('renders learn react link', () => {
  const onChange = jest.fn(() => {})
  render(<Header onChange={onChange} value="" />)
  const input = screen.getByText(TEXT_SEARCH_PLACE_HOLDER)
  const title = screen.getByText(TEXT_TITLE)
  const subtitle = screen.getByText(TEXT_SUB_TITLE)
  expect(input).toBeInTheDocument()
  expect(title).toBeInTheDocument()
  expect(subtitle).toBeInTheDocument()
})
