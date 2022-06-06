import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import 
{ Home, 
  Register, 
  Login, 
  About,
  Products, 
  Blog, 
  Faq, 
  Contact, 
  Cart,
  Orders } from './pages';
import { ToastContainer } from 'react-toastify';
import { Suspense, lazy } from 'react';
import { useLoading, Audio } from '@agney/react-loading';
import PrivateRoute from './components/PrivateRoute';

const AddProduct = lazy(() => import('./pages/AddProduct'));
const EditProduct = lazy(() => import('./pages/EditProduct'));
const SingleOrder = lazy(() => import('./pages/SingleOrder'));
const SingleProduct = lazy(() => import('./pages/SingleProduct'));
const Checkout = lazy(() => import('./pages/Checkout'));



const App = () => {
  const { containerProps, indicatorEl } = useLoading({
      loading: true,
      indicator: <Audio width="50" />
  });
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Suspense fallback={<section {...containerProps}> { indicatorEl } </section>}>
        <Routes>
          <Route path='/' element={<Home />}  />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<About />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<PrivateRoute><Checkout /></PrivateRoute>} />
          <Route path='/products' element={<Products />}/>
          <Route path='/products/:id' element={<SingleProduct />} />
          <Route path='/add-product' element={<PrivateRoute><AddProduct /></PrivateRoute>}/>
          <Route path='/edit-product/:id' element={<PrivateRoute><EditProduct /></PrivateRoute>}/>
          <Route path='/orders' element={<Orders />}/>
          <Route path='/orders/:id' element={<SingleOrder />}/>
          <Route path='/blog' element={<Blog />}/>
          <Route path='/faq' element={<Faq />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes> 
      </Suspense>
      <Footer />
    </>
  )
}

export default App;