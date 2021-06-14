import React from 'react';
import  './style.css';

import fb from './facebook.png';
import twt from './twitter.png';
import lkd from './linkedin.png';

function Footer(){
    
    const currentYear = new Date().getFullYear();

    return (
                     
                <section className="footer">
                    <p className="text">Design & Developed By B2B Owners</p>
                    <ul>
                        <p className="text">Follow us on :</p> 
                        <li><a href="as"><img src={fb} alt="" /></a></li>
                        <li><a href="ad"><img src={twt} alt="" /></a></li>
                        <li><a href="ab"><img src={lkd} alt="" /></a></li>
                    </ul>
                    
                    <p className="copyright"> Copyright © {currentYear} </p>
                </section>
            );
      
}

export default Footer;