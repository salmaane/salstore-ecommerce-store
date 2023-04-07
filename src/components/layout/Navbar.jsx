import SearchBar from './SearchBar.jsx';
import "../../styles/navbar.css"
import { useContext } from 'react';
import {Link} from 'react-router-dom'
import { useState } from 'react';
// Contexts
import NavbarContext from '../../contexts/NavbarContext.jsx';
import {useShoppingCartContext} from "../../contexts/ShoppingCartContext.jsx";
// Icons
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


function Navbar() {
  const navbarRef = useContext(NavbarContext);
  const {cartQuantity} = useShoppingCartContext();
  const quantity = cartQuantity();
  function scrollToTop(e) {
    if(e.target.tagName === 'A') {
      window.scrollTo(0,0);
      setIsOpen(false);
    }
  }

  const [isOpen,setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <nav className='navbar' ref={navbarRef}>
        <MenuIcon 
          className='menu-icon'
          sx={{scale:'130%',marginBottom:'.3rem'}}
          onClick={()=> setIsOpen(true)}
        />
        <Link to="/"><img src={import.meta.env.BASE_URL+"/assets/logo/logo2.png"} alt="logo" className='logo'/></Link>
        <div className={isOpen ? "navigation is-open" : "navigation"}>
          <CloseIcon
           className='close-icon'
           sx={{scale:'130%',marginBottom:'.3rem'}}
           onClick={()=> setIsOpen(false)} 
          />
          <div>
              <ul className="nav-links" onClick={scrollToTop} >
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/products">Products</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
              </ul>
          </div>
          <SearchBar setIsOpen={setIsOpen}/>
          <Link 
            to="account" 
            className='login-button' 
            onClick={()=>window.scrollTo(0,0)}
          >
            <Person2OutlinedIcon className="account-icon"/>
            <p class="login-text" onClick={()=>setIsOpen(false)}>LOGIN/REGISTER</p>
          </Link>
        </div>
        <Link to="cart" className='cart-button' onClick={()=>window.scrollTo(0,0)}>
          <Badge badgeContent={quantity} color="warning" >
            <ShoppingCartOutlinedIcon className="cart-icon" sx={{fontSize: '1.9rem'}}/>
          </Badge>
        </Link>
    </nav>
  )
}

export default Navbar