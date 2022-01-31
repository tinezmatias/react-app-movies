// Vendor
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
// Internal
import { IMovie } from '../../types'
import { MoviesList } from './index'
// Mocks
import { MOVIE } from './__mocks__/data'

const mockedUsedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate
}))

const setup = ({
  movies,
  isLoading
}: {
  movies?: IMovie[]
  isLoading?: boolean
}) => {
  const screen = render(<MoviesList isLoading={isLoading} movies={movies} />, {
    wrapper: MemoryRouter
  })
  return screen
}

describe('Movies List', () => {
  it('Should render skeletons', () => {
    const screen = setup({ isLoading: true })

    const loaders = screen.getAllByTestId('skeleton')

    expect(loaders.length).toEqual(20)
    expect(loaders[0]).toBeInTheDocument()
  })

  it('Should render one movie', () => {
    const screen = setup({ isLoading: false, movies: [MOVIE] })

    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()
  })
})
