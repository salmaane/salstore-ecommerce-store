import SearchBar from './SearchBar';
import "../styles/navbar.css"
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <div>
            <Link to="/"><img src="/assets/logo/logo2.png" alt="logo" className='logo'/></Link>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
        <SearchBar/>
    </nav>
  )
}

export default Navbar