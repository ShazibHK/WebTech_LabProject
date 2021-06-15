import React from 'react';

import './style.css';

function Testimonials(){
    return (
        <section className="testimonials">
            <h2 className="heading">What Our Clients say</h2>
            <div className="container">
                <div className="contentBxx">
                    <div>
                        <p>
                            Good Company
                        </p><br/>
                        <h3>Jhony Fernandes</h3>
                    </div>
                </div>
                <div className="contentBx">
                    <div>
                        <p>
                           Good Business deal
                        </p><br/>
                        <h3>Shazib Khattal</h3>
                    </div>
                </div>

            </div>
        </section> 
    );
}

export default Testimonials;