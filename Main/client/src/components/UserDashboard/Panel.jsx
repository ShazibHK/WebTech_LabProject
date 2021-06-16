import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import decode from 'jwt-decode';
import * as actionType from '../../constants/actionTypes';
import './style1.css';
import pro from './pro1.png';
import { getUsers } from '../../actions/auth';
function Panel() {

    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
     
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
      dispatch(getUsers());
      setUser(JSON.parse(localStorage.getItem('profile')));
    }, [currentId, dispatch]);
  
    const auth = useSelector((state) => state.auth);
    
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
        
        <div>
            <div className="sidebar">
                <div className="profile_info">
                    <img src={pro} className="profile_image" alt="profile pic" />
                    <h4>{user?.result?.name}</h4>
                </div>
                <div>
                    <a href="UserDashboard"><i className="fas fa-desktop"></i><span>Dashboard</span></a>
                    <a href="ProposalForm"><i className="fas fa-table"></i><span>Fill Proposal Form</span></a>
                    {!user?.result?.dealAccept?
                    <a style={{ opacity:'0.2'}}><i className="fas fa-th"></i><span>Cannot add product</span></a>:
                    <a href="ProductAndForm"><i className="fas fa-th"></i><span>Add Products</span></a>}
                </div>
            </div>


            <div className="cont">
                <main>
                        <div className="main__cards">
                            
                            <div className="card">
                                <i className="fa fa-check fa-2x text-green" aria-hidden="true"></i>
                                <div className="card_inner">
                                    <p className="text-primary-p">Deal Accepted</p>
                                    <span className="font-bold text-title">{user?.result?.dealAccept?"Yes":"No"}</span>
                                </div>
                            </div>

                            <div className="card">
                                <i
                                    className="fa fa-ban fa-2x text-red"
                                    aria-hidden="true"
                                ></i>
                                <div className="card_inner">
                                    <p className="text-primary-p">Orders Rejected</p>
                                    <span className="font-bold text-title">340</span>
                                </div>
                            </div>

                            <div className="card">
                                <i
                                    className="fa fa-shopping-bag fa-2x text-green"
                                    aria-hidden="true"
                                ></i>
                                <div className="card_inner">
                                    <p className="text-primary-p">Number of Products</p>
                                    <span className="font-bold text-title">10</span>
                                </div>
                            </div>
                        </div>
                
                        <div className="charts">
                            

                            <div className="charts__left">
                                <div className="charts__right__left">
                                    <div>
                                    <h1>Stats Reports</h1>
                                    <p>Mapusa, Goa, India</p>
                                    </div>
                                    <i className="fa fa-inr" aria-hidden="true"></i>
                                </div>

                                <div className="charts__right__cards">
                                    <div className="card1">
                                    <h1>Sales</h1>
                                    <p>₹7,180</p>
                                    </div>

                                    <div className="card2">
                                    <h1>Commision Given</h1>
                                    <p>2%</p>
                                    </div>

                                    <div className="card3">
                                    <h1>Partners</h1>
                                    <p>1</p>
                                    </div>

                                    <div className="card4">
                                    <h1>Branches</h1>
                                    <p>2</p>
                                    </div>
                                </div>
                            </div>
                        </div>    
                </main>   
            </div>
        </div>


    );

}

export default Panel;