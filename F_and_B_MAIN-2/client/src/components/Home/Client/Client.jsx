import React from 'react';

import  './style.css';

import brand1 from './brand1.png';
import brand2 from './brand3.png';
import brand3 from './brand4.png';
import brand4 from './brand5.png';
function Client(){
    return(
        <section className="client">
        <h2 className="heading">Our Clients</h2>
        <p className="text">
            Since we are a newly launched B2B company in Goa. We have a very few Clients
            as of now , but we have helped them reach out thier prdoucts in Goan Market.
        </p>
        <div className="imgBx">
            <img src={brand1} alt="b1" />
            <img src={brand2} alt="b2" />
            <img src={brand3} alt="b3" />
            <img src={brand4} alt="b4" />
        </div>
    </section>
    );
}
export default Client;