import React, {useRef} from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar.jsx';
import Footer from '../components/layout/Footer.jsx';
import NavbarContext from '../contexts/NavbarContext.jsx';

function Layout() {
  const navbarRef = useRef(null); 

  return (
    <>
      <NavbarContext.Provider value={navbarRef}>
        <header style={{display:'unset'}}>
          <Navbar/>
        </header>
        <main>
          <Outlet/>
        </main>
      </NavbarContext.Provider>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Layout