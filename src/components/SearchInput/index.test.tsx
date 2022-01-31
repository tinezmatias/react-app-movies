// Vendor
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
// Internal
import { SearchInput } from './index'

const setup = (value = '') => {
  const onChange = jest.fn()

  const screen = render(<SearchInput onChange={onChange} value={value} />)

  return {
    screen,
    onChange
  }
}

describe('Search input', () => {
  it('Should render', () => {
    const { screen } = setup()

    const input = screen.getByRole('textbox')

    expect(input).toBeInTheDocument()
  })
  it('Should render with initial value', () => {
    const text = 'initial'
    const { screen } = setup('initial')

    const input = screen.getByRole('textbox')

    expect(input).toBeInTheDocument()
    expect(input).toHaveValue(text)
  })

  it('Should type', () => {
    const { screen, onChange } = setup()

    const input = screen.getByRole('textbox')

    userEvent.type(input, 'terminator')

    expect(input).toBeInTheDocument()
    expect(onChange).toHaveBeenCalled()
  })
})
