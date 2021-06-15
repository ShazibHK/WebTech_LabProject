import React from "react";
import './style4.css';

function Footer() {
    return (
            
               <footer className="foot">
                    <div className="contai">
                        <div className="row">
                            <div className="footer-col">
                                <h4 className="h4">company</h4>
                                <ul className="ul">
                                    <li className="li"><a className="a" href="kl">about us</a></li>
                                    <li className="li"><a className="a" href="kk">our services</a></li>
                                    <li className="li"><a className="a" href="hj">privacy policy</a></li>
                                    
                                </ul>
                            </div>
                            <div className="footer-col">
                                <h4 className="h4">get help</h4>
                                <ul className="ul">
                                    <li className="li"><a className="a" href="as">FAQ</a></li>
                                    
                                    <li className="li"><a className="a" href="asd">returns</a></li>
                                    
                                    <li className="li"><a className="a" href="asd">payment options</a></li>
                                </ul>
                            </div>
                            <div className="footer-col">
                                <h4 className="h4">follow us</h4>
                                <div className="social-links">
                                    <a className="a" href="gh"><i className="fab fa-facebook-f"></i></a>
                                    <a className="a" href="gj"><i className="fab fa-twitter"></i></a>
                                    <a className="a" href="kl"><i className="fab fa-instagram"></i></a>
                                    <a className="a" href="df"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer> 
            

    );
}

export default Footer;