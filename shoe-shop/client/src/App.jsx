import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './pages/Home/Home'
import Products from './pages/Products/Products'
import Product from './pages/Product/Product'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Outlet, Route, Routes } from 'react-router'
import Slider from './components/Slider/Slider'
import Cart from './components/Cart/Cart'



const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout/>,
//     Children: [
//       {
//         path: "/",
//         element: <Home/>,
//       },
//       {
//         path: "/products/:id",
//         element: <Products/>
//       }, 
//            {
//         path: "/product/:id",
//         element:<Product/>
//       },
//     ]
//   },

// ])

function App() {


  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route
          path='/'
          element={<Home />} />
        <Route
          path='/products'
          element={<Products />} />
                  <Route
          path='/product/:id'
          element={<Product />} />
           <Route
          path='/cart'
          element={<Cart />} />
      </Route>

    </Routes>
  )
}

export default App
