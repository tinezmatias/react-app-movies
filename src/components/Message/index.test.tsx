// Vendor
import { render, screen } from '@testing-library/react'
// Internal
import { Message } from './index'
import { TEXT_EMPTY_MOVIES } from '../../constants'

test('Message component should render', () => {
  render(<Message text={TEXT_EMPTY_MOVIES} />)
  const text = screen.getByText(TEXT_EMPTY_MOVIES)
  expect(text).toBeInTheDocument()
})
