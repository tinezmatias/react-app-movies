// Vendor
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
// Internal
import { MovieCard } from './index'
// Mocks
import { MOVIE } from './__mocks__/data'

const setup = (movie = MOVIE) => {
  const onClick = jest.fn(() => {})
  const screen = render(<MovieCard onClick={onClick} movie={movie} />)
  return { screen, onClick }
}

describe('Movie Card', () => {
  it('Should render', () => {
    const { screen } = setup()
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('Should click', () => {
    const { screen, onClick } = setup()
    const button = screen.getByRole('button')

    userEvent.click(button)

    expect(onClick).toBeCalled()
    expect(onClick).toBeCalledWith(MOVIE)
  })
})
