import { Route, Routes } from 'react-router-dom'
import { Navbar, Footer, PrivateRoute} from './components'
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
  Orders,
  SearchResults } from './pages';
import { ToastContainer } from 'react-toastify';
import { Suspense, lazy } from 'react';
import { useLoading, Audio } from '@agney/react-loading';

const AddProduct = lazy(() => import('./pages/AddProduct'));
const EditProduct = lazy(() => import('./pages/EditProduct'));
const SingleOrder = lazy(() => import('./pages/SingleOrder'));
const SingleProduct = lazy(() => import('./pages/SingleProduct'));
const Checkout = lazy(() => import('./pages/Checkout'));
const Admin = lazy(() => import('./pages/Admin'));



const App = () => {
  const { containerProps, indicatorEl } = useLoading({
      loading: true,
      indicator: <Audio width="50" />
  });

  return (
    <>
      <ToastContainer />
      <Navbar />
      <Suspense fallback={<section className='loader-wrapper'  {...containerProps}>
                              <div className="loader-content">
                                  { indicatorEl }
                                  <h2>Loading Please wait ....</h2>
                              </div>
                          </section>}>
        <Routes>
          <Route path='/' element={<Home />}  />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<About />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/admin' element={<PrivateRoute><Admin /></PrivateRoute>} />
          <Route path='/checkout' element={<PrivateRoute><Checkout /></PrivateRoute>} />
          <Route path='/products' element={<Products />}/>
          <Route path='/products/:id' element={<SingleProduct />} />
          <Route path='/search/:searchTerm' element={<SearchResults />} />
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