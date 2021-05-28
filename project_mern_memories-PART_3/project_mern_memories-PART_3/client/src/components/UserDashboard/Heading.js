import React from 'react';

function Heading(){
    
    return (
        <div>
            <input type="checkbox" id="check" />   
            <header>
                <label htmlFor="check">
                    <i className="fas fa-bars" id="sidebar_btn"></i>
                </label>
                <div className="left_area">
                    <h3>B2B <span>MakeBuzz</span></h3>
                </div> 
                
                <div className="right_area">
                    
                    <a href="abc" className="logout_btn">Logout</a>
                    
                </div>
            </header>
        </div>


    );

   
            
             
}

export default Heading;