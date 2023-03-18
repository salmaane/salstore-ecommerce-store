import React from 'react'
import {Link} from 'react-router-dom';
import "../styles/notFound.css";

function NotFound() {
  return (
    <div className='notFound-page'>
        <h1>404 - PAGE NOT FOUND</h1>
        <p>
          Sorry, we could not find this page. Please search
          again or navigate to the home page to find what you
          are looking for.
        </p>
        <button onClick={()=>window.scrollTo(0,0)}>
          <Link to="/">Homepage</Link>
        </button>
    </div>
  )
}

export default NotFound