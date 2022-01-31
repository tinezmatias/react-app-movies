// Vendor
import {
  render,
  waitFor,
  waitForElementToBeRemoved
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
// Internals
import App from './App'

const setup = () => render(<App />)

describe('App', () => {
  it('Should navigate to details', async () => {
    const screen = setup()

    await waitForElementToBeRemoved(() => screen.getAllByTestId('skeleton'))

    const buttons = screen.getAllByRole('button')

    userEvent.click(buttons[10])

    await waitForElementToBeRemoved(() => screen.getByTestId('skeleton'))

    await waitFor(() => screen.getByTestId('details-card'), { timeout: 15000 })

    await waitFor(() =>
      expect(screen.getByTestId('poster')).toBeInTheDocument()
    )
  })
})
