import SearchBar from './SearchBar';
import "../../styles/navbar.css"
import { useContext } from 'react';
import {Link} from 'react-router-dom'
// Contexts
import NavbarContext from '../../contexts/NavbarContext';
import {useShoppingCartContext} from "../../contexts/ShoppingCartContext";
// Icons
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';


function Navbar() {
  const navbarRef = useContext(NavbarContext);
  const {cartQuantity} = useShoppingCartContext();
  const quantity = cartQuantity();

  function scrollToTop(e) {
    if(e.target.tagName === 'A') {
      window.scrollTo(0,0);
    }
  }

  return (
    <nav className='navbar' ref={navbarRef}>
        <div>
            <Link to="/"><img src="/assets/logo/logo2.png" alt="logo" className='logo'/></Link>
            <ul className="nav-links" onClick={scrollToTop} >
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
        <SearchBar/>
        <Link to="account" className='login-button'>
          <Person2OutlinedIcon className="account-icon" />
          LOGIN/REGISTER
        </Link>
        <Link to="cart" className='cart-button'>
          <Badge badgeContent={quantity} color="warning" >
            <ShoppingCartOutlinedIcon className="cart-icon" sx={{fontSize: '1.9rem'}}/>
          </Badge>
        </Link>
    </nav>
  )
}

export default Navbar