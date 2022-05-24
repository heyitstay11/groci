import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import About from './pages/About'
import Products from './pages/Products'
import Blog from './pages/Blog'
import Faq from './pages/Faq'
import Contact from './pages/Contact'

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}  />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/about' element={<About />} />
      <Route path='/products' element={<Products />}/>
      <Route path='/blog' element={<Blog />}/>
      <Route path='/faq' element={<Faq />}/>
      <Route path='/contact' element={<Contact />}/>
    </Routes> 
    <Footer />
    </>
  )
}

export default App;