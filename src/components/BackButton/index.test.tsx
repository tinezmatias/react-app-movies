// Vendor
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
// Internal
import { BackButton } from './index'

const mockedUsedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate
}))

const setup = () => render(<BackButton />, { wrapper: MemoryRouter })

describe('back button', () => {
  it('Should render', () => {
    const screen = setup()

    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()
  })

  test('Should click', () => {
    const screen = setup()

    const button = screen.getByRole('button')

    userEvent.click(button)

    expect(mockedUsedNavigate).toBeCalled()
    expect(mockedUsedNavigate).toBeCalledTimes(1)
    expect(mockedUsedNavigate).toBeCalledWith(-1)
  })
})
