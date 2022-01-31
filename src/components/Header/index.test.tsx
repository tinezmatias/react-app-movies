// Vendor
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
// Internal
import { Header } from './index'
import { TEXT_SUB_TITLE, TEXT_TITLE } from '../../constants'
import { DataProvider } from '../../provider'

const mockedDispatch = jest.fn()

jest.mock('../../hooks/contexts/usePopularityFilter', () => {
  const usePopularityFilter = () => ({
    dispatchFilter: mockedDispatch,
    currentFilterValue: 2
  })

  return { usePopularityFilter }
})

const setup = (value = '') => {
  const onChange = jest.fn()

  const screen = render(<Header onChange={onChange} value={value} />, {
    wrapper: DataProvider
  })

  return {
    screen,
    onChange
  }
}

describe('Header', () => {
  it('Should render', () => {
    const { screen } = setup()

    const title = screen.getByText(TEXT_TITLE)
    const subtitle = screen.getByText(TEXT_SUB_TITLE)
    const input = screen.getByRole('textbox')

    expect(input).toBeInTheDocument()
    expect(title).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
  })

  it('Should type on the search input', () => {
    const { screen, onChange } = setup()

    const input = screen.getByRole('textbox')

    const text = 'terminator'
    userEvent.type(input, text)

    expect(onChange).toBeCalled()
    expect(onChange).toBeCalledTimes(text.length)
  })

  it('Should should select stars', () => {
    const { screen } = setup()

    const stars = screen.getAllByRole('checkbox')

    userEvent.click(stars[4])

    expect(stars[4]).toHaveProperty('checked', true)
    expect(mockedDispatch).toBeCalled()
    expect(mockedDispatch).toBeCalledWith(0)
  })
})
