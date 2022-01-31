// Vendor
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
// Internal
import { DetailsContainer } from './index'

const mockedUsedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate
}))

const setup = () =>
  render(
    <DetailsContainer image="" darkBg>
      <h1>Test</h1>
    </DetailsContainer>,
    { wrapper: MemoryRouter }
  )

describe('Details Container', () => {
  it('Should render', () => {
    const screen = setup()

    const text = screen.getByText(/test/i)

    expect(text).toBeInTheDocument()
  })
})
