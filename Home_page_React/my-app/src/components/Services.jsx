import React from 'react';


function Services(){
    return(  <section className="services">
                <h2 className="heading">Steps to Make a Deal Happen!!!</h2>
                <p className="text">
                   Want to know how this works? Just follow the steps Below and it will get you started.
                   This process is very user friendly and anyone can use it. This Business process is simple to understand
                   what we do is once a company is registered , the company has to fill a proposal form which will accept accordingly.
                   The terms and conditions will be displayed once you are registered.
                </p>
                <div className="container">
                    <div className="serviceBx">
                        <div>
                            <img src="images/icon1.png" alt="icon1"/>
                            <h2>Step 1</h2>
                            <p>Sign Up/Login</p>
                        </div>
                    </div>  
                    <div className="serviceBx"> 
                        <div>
                            <img src="images/icon2.png" alt="icon1" />
                            <h2>Step 2</h2>
                            <p>Fill Proposal Form</p>
                            <p>Wait for Approval</p>
                            <p>Add Your Product details</p>

                        </div>
                    </div> 
                    <div className="serviceBx">   
                        <div>
                            <img src="images/icon3.png" alt="icon1"/>
                            <h2>Step 3</h2>
                            <p>Download Invoice</p>
                            <p>Done</p>
                        </div>
                    </div>
                </div>
                
                
            </section>
        );    
}

export default Services;