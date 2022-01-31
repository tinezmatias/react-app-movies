// Vendor
import { render } from '@testing-library/react'
// Internal
import { Footer } from './index'

const setup = () => render(<Footer />)

describe('Details Container', () => {
  it('Should render', () => {
    const screen = setup()

    const github = screen.getByTestId('github')
    const linkedin = screen.getByTestId('linkedin')

    expect(github).toBeInTheDocument()
    expect(linkedin).toBeInTheDocument()
  })
})
