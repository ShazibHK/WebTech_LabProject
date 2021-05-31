import React from 'react';

import  './style1.css';
import pro from './pro1.png';

function Panel(){
    return(
            <div>
                <div className="sidebar">
                    <div className="profile_info">
                        <img src={pro} className="profile_image" alt="profile pic" />
                        <h4>Username</h4>
                    </div>   
                    <div>
                        <a href="a"><i className="fas fa-desktop"></i><span>Dashboard</span></a>
                        <a href="b"><i className="fas fa-cogs"></i><span>MyDeals</span></a>
                        <a href="c"><i className="fas fa-table"></i><span>Fill Proposal Form</span></a>
                        <a href="d"><i className="fas fa-th"></i><span>Add Products</span></a>
                        <a href="e"><i className="fas fa-info-circle"></i><span>About</span></a> 
                        <a href="f"><i className="fas fa-sliders-h"></i><span>Settings</span></a>
                    </div>  
                </div>


                <div className="cont"> 
                    <div className="cont2">
        
                    </div>
                </div>
            </div>
  

            );

}

export default Panel;