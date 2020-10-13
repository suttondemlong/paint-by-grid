import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

  return (
    <div className="nav">
      <Link className="nav-links" to="/" >Home</Link>
      <Link className="nav-links" to="/gallery" >Gallery</Link>
    </div>
  );
}

export default Header;