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
                                <i
                                    className="fa fa-pencil-square-o fa-2x text-lightblue"
                                    aria-hidden="true"
                                ></i>
                                <div className="card_inner">
                                    <p class="text-primary-p">Orders Pending</p>
                                    <span Name="font-bold text-title">578</span>
                                </div>
                            </div>

                            <div className="card">
                                <i className="fa fa-check fa-2x text-green" aria-hidden="true"></i>
                                <div className="card_inner">
                                    <p className="text-primary-p">Orders Accepted</p>
                                    <span className="font-bold text-title">2467</span>
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
                                    <span className="font-bold text-title">645</span>
                                </div>
                            </div>
                        </div>
                
                        <div className="charts">
                            <div className="charts__left">
                            <div className="charts__left__title">
                                <div>
                                <h1>Daily Reports</h1>
                                <p>Mapusa, Goa, India</p>
                                </div>
                                <i className="fa fa-inr" aria-hidden="true"></i>
                            </div>
                            <div id="apex1"></div>
                            </div>

                            <div className="charts__right">
                                <div className="charts__right__title">
                                    <div>
                                    <h1>Stats Reports</h1>
                                    <p>Mapusa, Goa, India</p>
                                    </div>
                                    <i className="fa fa-inr" aria-hidden="true"></i>
                                </div>

                                <div className="charts__right__cards">
                                    <div className="card1">
                                    <h1>Income</h1>
                                    <p>₹75,300</p>
                                    </div>

                                    <div className="card2">
                                    <h1>Sales</h1>
                                    <p>₹124,200</p>
                                    </div>

                                    <div className="card3">
                                    <h1>Partners</h1>
                                    <p>13</p>
                                    </div>

                                    <div className="card4">
                                    <h1>Branches</h1>
                                    <p>81</p>
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