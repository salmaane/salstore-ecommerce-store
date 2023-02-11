import React from 'react'
import {Link} from 'react-router-dom';

function NotFound() {
  return (
    <>
        <h1>Page Not Found!</h1>
        <p>return to <Link to="/">Homepage</Link></p>
    </>
  )
}

export default NotFound