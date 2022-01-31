// Vendor
import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// Internal
import { DataProvider } from './provider'
import { AppProvider } from './context'
import { PageLoader } from './components'
// Client code splitting
const Discover = React.lazy(() => import('./containers/Discover'))
const Details = React.lazy(() => import('./containers/Details'))

function App() {
  return (
    <AppProvider>
      <DataProvider>
        <Suspense fallback={<PageLoader />}>
          <BrowserRouter>
            <Routes>
              <Route path="*" element={<Discover />} />
              <Route path="/movie/:movieid" element={<Details />} />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </DataProvider>
    </AppProvider>
  )
}

export default App
