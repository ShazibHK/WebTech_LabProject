import React from "react";
import './style4.css';

function Header() {
  return (
    <div>
      <input type="checkbox" id="check"/>
      <nav className="navr">
        <div className="icon">B2B Makebuzz</div>
        <div className="search_box">
          <input type="search" class="search" placeholder="Search Here"/>
          <span className="fa fa-search"></span>
        </div>

        <ol className="ol">
          <li className="li"><a className="a" href="ad">Home</a></li>
          <li className="li"><a className="a" href="af">Login</a></li>
          <li className="li"><a className="a" href="gh">SignUp</a></li>
          
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
