import React from 'react';

function Footer(){
    
    const currentYear = new Date().getFullYear();

    return (
                     
                <section className="footer">
                    <p className="text">Design & Developed By B2B Owners</p>
                    <ul>
                        <p className="text">Follow us on :</p> 
                        <li><a href="as"><img src="images/facebook.png" alt="" /></a></li>
                        <li><a href="ad"><img src="images/twitter.png" alt="" /></a></li>
                        <li><a href="ab"><img src="images/linkedin.png" alt="" /></a></li>
                    </ul>
                    
                    <p className="copyright"> Copyright © {currentYear} </p>
                </section>
            );
      
}

export default Footer;