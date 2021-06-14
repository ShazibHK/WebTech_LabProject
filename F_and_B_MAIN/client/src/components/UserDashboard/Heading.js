import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import * as actionType from '../../constants/actionTypes';
import  './style1.css';

function Heading(){
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
    
  
  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

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
                    
                    <a onClick={()=>{logout()}}className="logout_btn">Logout</a>
                    
                </div>
            </div>
        </div>
    ); 
}

export default Heading;