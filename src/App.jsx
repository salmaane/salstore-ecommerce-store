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
import NotFound from './components/NotFound.jsx';
import  Home  from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import CartPage from './pages/CartPage.jsx';
import AccountPage from './pages/AccountPage.jsx';
import ForgotPass from './pages/ForgotPass.jsx';
import ContactPage from "./pages/ContactPage.jsx";
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import TermsOfUse from './pages/TermsOfUse.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout/>} >
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/products/:id" element={<ProductDetails/>} /> 
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/account" element={<AccountPage/>} />
        <Route path="/account/resetpassword" element={<ForgotPass/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-service" element={<TermsOfUse />} />
        <Route path="*" element={<NotFound/>} />
      </Route>
    </>
  ), {
    basename:'/salstore-ecommerce-store/'
  }
);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}
export default App