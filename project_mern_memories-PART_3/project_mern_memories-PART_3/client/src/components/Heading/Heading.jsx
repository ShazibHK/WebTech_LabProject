import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import memories from '../../images/memories.png';
import * as actionType from '../../constants/actionTypes';


const Banner = () => {       
    
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/auth');

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

        return ( <div className="banner">
                    <header>
                        <a href="ad" className="logo">F&B Website</a>
                        <div className="toggle1"><a href="/auth">Signup</a></div>
                        
                        <Toolbar >
        {user?.result ? (
          <div>
            <Avatar alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
            <Typography variant="h6">{user?.result.name}</Typography>
            <Button variant="contained" color="secondary" onClick={logout}>Logout</Button>
          </div>
        ) : (
            <div className="toggle2"><a href="/auth">Login</a></div>
        )}
      </Toolbar>
                    </header>
                    <img src="images/img1.jpg" alt="bg" />
                    <div className="content">
                        <h2>Success By Faster Market Reach</h2>
                        <p>Having difficulties selling Food and Beverage products in Goan Market???.
                            Dont Know how to solve this Problem ? Then You have come to the right place.
                            We At B2B solve this problem with our reach in Goan Market. So Read through the Steps below to Get started with this Website!!! 
                        </p>
                    </div>
                    
                 </div>
                ); 
}

export default Banner;