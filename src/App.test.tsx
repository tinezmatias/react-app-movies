import {
  render,
  waitFor,
  waitForElementToBeRemoved
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

const setup = () => render(<App />)

describe('App', () => {
  it('Should navigate to details', async () => {
    const screen = setup()

    await waitForElementToBeRemoved(() => screen.getAllByTestId('skeleton'))

    const buttons = screen.getAllByRole('button')

    userEvent.click(buttons[10])

    await waitFor(() =>
      expect(screen.getByTestId('skeleton')).toBeInTheDocument()
    )

    await waitFor(() =>
      expect(screen.getByTestId('details-card')).toBeInTheDocument()
    )

    await waitFor(() =>
      expect(screen.getByTestId('poster')).toBeInTheDocument()
    )
  })
})
