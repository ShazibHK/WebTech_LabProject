import React from 'react';


function Client(){
    return(
        <section className="client">
        <h2 className="heading">Our Clients</h2>
        <p className="text">
            Since we are a newly launched B2B company in Goa. We have a very few Clients
            as of now , but we have helped them reach out thier prdoucts in Goan Market.
        </p>
        <div className="imgBx">
            <img src="images/brand1.png" alt="b1" />
            <img src="images/brand3.png" alt="b2" />
            <img src="images/brand4.png" alt="b3" />
            <img src="images/brand5.png" alt="b4" />
        </div>
    </section>
    );
}
export default Client;