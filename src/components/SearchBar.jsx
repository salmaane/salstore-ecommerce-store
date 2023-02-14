import '../styles/searchbar.css';
import SearchIcon from '@mui/icons-material/Search';



function SearchBar() {

  // still need to implement search functionality

  return (
    <div className='search-wrapper'>
        <input type="search" placeholder="Search for products"/>
        <button className='search-button'>
          <SearchIcon className="search-icon" />
        </button>
    </div>
  )
}

export default SearchBar