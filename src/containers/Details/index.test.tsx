// Vendor
import { render } from '@testing-library/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// Component
import Details from '.'
// Internal
import { DataProvider } from '../../provider'
import { AppProvider } from '../../context'

function WrapperDiscover() {
  return (
    <AppProvider>
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Details />} />
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </AppProvider>
  )
}

const setup = () => render(<WrapperDiscover />)
test('Details', () => {
  const screen = setup()

  const poster = screen.getByTestId('poster')

  expect(poster).toBeInTheDocument()
})
