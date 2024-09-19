import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar'
import Products from './Pages/Products'
import Footer from './Components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  

  return (
      <BrowserRouter>
      <Navbar />
      <Products />
      <Footer />
      </BrowserRouter >
  )
}

export default App
