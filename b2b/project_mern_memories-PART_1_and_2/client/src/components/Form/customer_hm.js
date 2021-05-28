import React from 'react';
import s from './style1.css';
import pro1 from './pro1.png';

const display = () =>{
    return (
        <div>
            <html>
                <head>
                    <meta charset="utf-8"/>
                    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                    <title>User Profile</title>
                    
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <link rel="stylesheet" href="style1.css"/>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
                </head>
                
                <body>
                <input type="checkbox" id="check"/>   
                <header>
                    <label for="check">
                        <i className="fas fa-bars" id="sidebar_btn"></i>
                    </label>
                    <div className="left_area">
                        <h3>B2B <span>MakeBuzz</span></h3>
                    </div> 
                    <div className="right_area">
                            <a href="#" className={s.logout_btn}>Logout</a>
                    </div>
                </header>


               
                <div className={s.mobile_nav}>
                    <div className={s.nav_bar}>
                        <img src={pro1} className={s.mobile_profile_image} alt="profile pic"/>
                        <i className="fa fa-bars  nav_btn"></i>

                    </div>
                    <div className={s.mobile_nav_items}>
                        <a href="#"><i className="fas fa-desktop"></i><span>Dashboard</span></a>
                        <a href="#"><i className="fas fa-cogs"></i><span>MyDeals</span></a>
                        <a href="#"><i className="fas fa-table"></i><span>Fill Proposal Form</span></a>
                        <a href="#"><i className="fas fa-th"></i><span>Add Products</span></a>
                        <a href="#"><i className="fas fa-info-circle"></i><span>About</span></a> 
                        <a href="#"><i className="fas fa-sliders-h"></i><span>Settings</span></a>

                    </div>    
                </div>
                  

                <div className={s.sidebar}>
                        <div className={s.profile_info}>
                            <img src={pro1} className={s.profile_image} alt="profile pic"/>
                            <h4>Username</h4>
                        </div>   
                        <div>
                        <a href="#"><i className="fas fa-desktop"></i><span>Dashboard</span></a>
                        <a href="#"><i className="fas fa-cogs"></i><span>MyDeals</span></a>
                        <a href="#"><i className="fas fa-table"></i><span>Fill Proposal Form</span></a>
                        <a href="#"><i className="fas fa-th"></i><span>Add Products</span></a>
                        <a href="#"><i className="fas fa-info-circle"></i><span>About</span></a> 
                        <a href="#"><i className="fas fa-sliders-h"></i><span>Settings</span></a>
                        </div>  
                </div>


                <div className ={s.content}>

                </div>

              </body> 
            </html>


               
            
        
        </div>

    );
};

export default display;