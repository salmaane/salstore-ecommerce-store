import '../../styles/searchbar.css';
import SearchIcon from '@mui/icons-material/Search';
import { useFiltersContext } from '../../contexts/FiltersContext';
import { useState } from 'react';
import {useNavigate} from "react-router-dom";



function SearchBar({setIsOpen}) {

  const navigate = useNavigate();
  const {setSearch} = useFiltersContext();
  
  const [searchText,setSearchText] = useState('');
  function handleSearchClick(e) {
    e.preventDefault();
    if(searchText == '') return;
    setSearch(searchText);
    setSearchText('');
    navigate("/products");
    window.scrollTo(0,0);
    setIsOpen(false);
  }

  return (
    <form className='search-wrapper'>
        <input 
          value={searchText}
          type="search" 
          placeholder="Search for products"
          onChange={(e)=>setSearchText(e.target.value)}
        />
        <button 
          className='search-button'
          onClick={handleSearchClick}
        >
          <SearchIcon className="search-icon" />
        </button>
    </form>
  )
}

export default SearchBar 