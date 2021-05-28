import React from 'react';

function Mobilesidepanel() {
    
    return (
            <div className="mobile_nav">
            <div className="nav_bar">
                <img src="images/pro1.png" className="mobile_profile_image" alt="profile pic" />
                <i className="fa fa-bars  nav_btn"></i>

            </div>
            <div className="mobile_nav_items">
                <a href="ab"><i className="fas fa-desktop"></i><span>Dashboard</span></a>
                <a href="ad"><i className="fas fa-cogs"></i><span>MyDeals</span></a>
                <a href="af"><i className="fas fa-table"></i><span>Fill Proposal Form</span></a>
                <a href="ad"><i className="fas fa-th"></i><span>Add Products</span></a>
                <a href="ad"><i className="fas fa-info-circle"></i><span>About</span></a> 
                <a href="ad"><i className="fas fa-sliders-h"></i><span>Settings</span></a>

            </div>    
        </div>  
);
                

        


                     
}

export default Mobilesidepanel;