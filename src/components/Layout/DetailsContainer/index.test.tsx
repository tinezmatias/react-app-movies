// Vendor
import { render, screen } from '@testing-library/react'
// Internal
import { DetailsContainer } from './index'

test('renders learn react link', () => {
  render(
    <DetailsContainer image="" darkBg>
      <h1>Test</h1>
    </DetailsContainer>
  )

  const text = screen.getByText(/test/i)

  expect(text).toBeInTheDocument()
})
