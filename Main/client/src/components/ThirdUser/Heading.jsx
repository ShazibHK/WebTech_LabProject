import React, { useState, useEffect } from 'react';
import './style4.css';
import decode from 'jwt-decode';

function Header() {
  
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  return (
    <div>
      <input type="checkbox" id="check"/>
      <nav className="navr">
        <div className="icon">B2B Makebuzz
        </div>
        <div className="search_box">
          <a class="search" href="DisplayOrdersCustomers">My orders</a>
        </div>

        <ol style={{color:'white'}}>
          User: {user?.result?.name}
        </ol>

        <label for="check" className="bar">
          <span className="fa fa-bars" id="bars"></span>
          <span className="fa fa-times" id="times"></span>
        </label>
      </nav>
    </div>
  );
}

export default Header;
