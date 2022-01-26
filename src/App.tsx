// Vendor
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// Internal
import Discover from './containers/Discover'
import Details from './containers/Details'
// Styles
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Discover />} />
        <Route path="/movie/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
