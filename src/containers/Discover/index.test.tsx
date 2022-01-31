// Vendor
import {
  render,
  waitFor,
  waitForElementToBeRemoved
} from '@testing-library/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
// Component
import Discover from '.'
// Internal
import { DataProvider } from '../../provider'
import { AppProvider } from '../../context'
import { TEXT_SUB_TITLE, TEXT_TITLE } from '../../constants'

function WrapperDiscover() {
  return (
    <AppProvider>
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Discover />} />
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </AppProvider>
  )
}

const setup = () => render(<WrapperDiscover />)

describe('Discover', () => {
  it('Should render', () => {
    const screen = setup()

    const title = screen.getByText(TEXT_TITLE)
    const subtitle = screen.getByText(TEXT_SUB_TITLE)
    const input = screen.getByRole('textbox')

    expect(input).toBeInTheDocument()
    expect(title).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
  })

  it('Should type on the search input', () => {
    const screen = setup()

    const input = screen.getByRole('textbox')

    const text = 'terminator'
    userEvent.type(input, text)

    expect(input).toHaveValue(text)
  })

  it('Should select stars', () => {
    const screen = setup()

    const stars = screen.getAllByRole('checkbox')

    userEvent.click(stars[4])

    expect(stars[4]).toHaveProperty('checked', true)
  })

  it('Should render loading', () => {
    const screen = setup()

    const loader = screen.getAllByTestId('skeleton')

    expect(loader[0]).toBeInTheDocument()
  })

  it('Should wait for movies', async () => {
    const screen = setup()

    await waitForElementToBeRemoved(() => screen.getAllByTestId('skeleton'))

    const input = screen.getByRole('textbox')

    userEvent.clear(input)

    await waitFor(() => screen.getAllByRole('button'))

    const buttons = screen.getAllByRole('button')

    expect(buttons[0]).toBeInTheDocument()
  })
})
