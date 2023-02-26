import React, {useRef} from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import NavbarContext from '../contexts/NavbarContext';

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