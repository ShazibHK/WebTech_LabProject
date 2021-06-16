import React, { useState, useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getDeals } from '../../actions/deals';
import Deals from '../Deals/Deals';
import AddProduct from '../Form/AddProduct';
import './style1.css';
import prr from './pro1.png';

function Mobilesidepanel() {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    

const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    useEffect(() => {
    


      dispatch(getDeals());
    }, [currentId, dispatch]);
  
    const token = user?.token;
    const auth = useSelector((state) => state.auth);
    return (
            <div className="mobile_nav">
            <div className="nav_bar">
                <img src={prr} className="mobile_profile_image" alt="profile pic" />
                <i className="fa fa-bars  nav_btn"></i>

            </div>
            <div className="mobile_nav_items">
                <a href="UserDashboard"><i className="fas fa-desktop"></i><span>Dashboard</span></a>
                <a href="Deals"><i className="fas fa-cogs"></i><span>MyDeals</span></a>
                <a href="ProposalForm"><i className="fas fa-table"></i><span>Fill Proposal Form</span></a>
                {!user?.result?.dealAccept?
                    <a style={{ opacity:'0.2'}}><i className="fas fa-th"></i><span>Cannot add product</span></a>:
                    <a href="ProductAndForm"><i className="fas fa-th"></i><span>Add Products</span></a>}
                <a href="ad"><i className="fas fa-info-circle"></i><span>About</span></a> 
                <a href="ad"><i className="fas fa-sliders-h"></i><span>Settings</span></a>

            </div>    
        </div>  
);
                

        


                     
}

export default Mobilesidepanel;