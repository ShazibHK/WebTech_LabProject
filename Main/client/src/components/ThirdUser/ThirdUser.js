import React from "react";
import Header from "./Heading";
import Cards  from "./Cards";
import Footer from "./Footer";
import Copyright from "./Copyright";
import DisplayProducts from "../DisplayProducts/DisplayProducts";
import decode from 'jwt-decode';

function ThirdUser() {

  return (
    <div>
      <Header />
      <DisplayProducts/>
      <Footer />
      <Copyright />
      
    </div>
  );
}

export default ThirdUser;