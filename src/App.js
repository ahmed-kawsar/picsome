import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Cart from './pages/Cart'
import Photos from './pages/Photos'

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route index element={<Photos />} />
        <Route path='cart' element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App
