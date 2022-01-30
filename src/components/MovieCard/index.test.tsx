// Vendor
import { render, screen } from '@testing-library/react'
// Internal
import { MovieCard } from './index'
import { TEXT_SEARCH_PLACE_HOLDER } from '../../constants'

test('renders learn react link', () => {
  const onChange = jest.fn(() => {})
  // TODO: MOCK MOVIE
  const movie: any = {}

  render(<MovieCard onClick={onChange} movie={movie} />)
  const text = screen.getByText(TEXT_SEARCH_PLACE_HOLDER)
  expect(text).toBeInTheDocument()
})
