import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom';

// Layouts
import Layout from './layouts/Layout.jsx';

// Pages
import NotFound from './components/NotFound';
import  Home  from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import CartPage from './pages/CartPage.jsx';



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout/>} >
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/products/:id" element={<ProductDetails/>} /> 
        <Route path="/cart" element={<CartPage/>} />
      </Route>
      <Route path="*" element={<NotFound/>} />
    </>
  )
);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}
export default App