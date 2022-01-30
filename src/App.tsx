// Vendor
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// Internal
import Discover from './containers/Discover'
import Details from './containers/Details'
import { DataProvider } from './provider'
import { AppProvider } from './context'

function App() {
  return (
    <AppProvider>
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Discover />} />
            <Route path="/movie/:movieid" element={<Details />} />
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </AppProvider>
  )
}

export default App
