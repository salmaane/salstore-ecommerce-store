import React, {useRef} from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


function Layout() {
  const navbarRef = useRef(null); 

  return (
    <>
      <header style={{display:'unset'}}>
        <Navbar ref={navbarRef} />
      </header>
      <main>
        <Outlet context={{ref: navbarRef}} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Layout