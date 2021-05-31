import React from 'react';

import  './style1.css';

function Heading(){
    
    return (
        <div className="hd">
            <input type="checkbox" id="check" />   
            <div className="fd">
                <label htmlFor="check">
                    <i className="fas fa-bars" id="sidebar_btn"></i>
                </label>
                <div className="left_area">
                    <h3>B2B <span>MakeBuzz</span></h3>
                </div> 
                
                <div className="right_area">
                    
                    <a href="abc" className="logout_btn">Logout</a>
                    
                </div>
            </div>
        </div>


    );

   
            
             
}

export default Heading;