// Vendor
import { render } from '@testing-library/react'
// Internal
import { BackButton } from './index'

test('renders learn react link', () => {
  const component = render(<BackButton />)
  expect(component).toBeInTheDocument()
})
