// Vendor
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
// Internal
import { StarsFilter } from './index'
import { DataProvider } from '../../provider'

const mockedDispatch = jest.fn()

jest.mock('../../hooks/contexts/usePopularityFilter', () => {
  const usePopularityFilter = () => ({
    dispatchFilter: mockedDispatch,
    currentFilterValue: 2
  })

  return { usePopularityFilter }
})

const setup = () => {
  const screen = render(<StarsFilter />, {
    wrapper: DataProvider
  })

  return screen
}

describe('Stars filter', () => {
  it('Should render', () => {
    const screen = setup()

    const star = screen.getByTestId('rating-2')

    expect(star).toBeInTheDocument()
  })

  it('Should should select stars', () => {
    const screen = setup()

    const stars = screen.getAllByRole('checkbox')

    userEvent.click(stars[4])

    expect(stars[4]).toHaveProperty('checked', true)
    expect(mockedDispatch).toBeCalled()
    expect(mockedDispatch).toBeCalledWith(0)
  })
})
