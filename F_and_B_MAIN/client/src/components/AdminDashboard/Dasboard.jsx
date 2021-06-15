import React, { useState, useEffect } from 'react';
import ag from './hello.svg';
import as from './avatar.svg';
import './styles.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Analytics from './Analytics';
import { getNotification } from '../../actions/notifications';
import { Link, useHistory, useLocation } from 'react-router-dom';
import * as actionType from '../../constants/actionTypes';
import decode from 'jwt-decode';
function AdminDashboard() {
  
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();


  useEffect(() => {
    dispatch(getNotification());
  }, [dispatch]);

  useEffect(() => {
    getNotification();
  },[]);


  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  
  const notifications = useSelector((state) => state.notifications);
  const deals = useSelector((state) => state.deals);
  
  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/');

    setUser(null);
  };

  console.log(deals)
  return (
    <div className="conta">
      <nav className="navbar">
        <div className="nav_icon">
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
        <div className="navbar__left">
          <a className="active_link" href="dr">Admin</a>
        </div>
        <div className="navbar__right">
          <a href="ad">
            <i className="fa fa-search" aria-hidden="true"></i>
          </a>
          <a href="df">
            <i className="fa fa-clock-o" aria-hidden="true">{user?.result.name}</i>
          </a>
          <a href="rt">
            <img width="30" src={as} alt="" />
          </a>
        </div>
      </nav>
      <main>
        <div className="main__container">
          

          <div className="main__title">
            <img src={ag} alt="" />
            <div className="main__greeting">
              <h1>Hello Admin</h1>
              <p>Welcome to your admin dashboard</p>
            </div>
          </div>

          <div className="main__cards">
            <div className="card">
              <i
                className="fa fa-clock fa-2x text-lightblue"
                aria-hidden="true"
              ></i>
              <br></br>
              <div className="card_inner">
                <p class="text-primary-p">Deal Proposal Pending</p>
                <span Name="font-bold text-title">{!notifications.length?"0":notifications.length}</span>
              </div>
            </div>

            <div className="card">
              <i className="fa fa-check fa-2x text-green" aria-hidden="true"></i>
              <br></br>
              <div className="card_inner">
                <p className="text-primary-p">Orders Accepted</p>
                <span className="font-bold text-title"><Analytics  accepted="accepted"/></span>
              </div>
            </div>

            <div className="card">
              <i
                className="fa fa-ban fa-2x text-red"
                aria-hidden="true"
              ></i>
              <br></br>
              <div className="card_inner">
                <br></br>
                <p className="text-primary-p">Orders Rejected</p>
                <span className="font-bold text-title"><Analytics  rejected="rejected"/></span>
              </div>
            </div>

            <div className="card">
              <i
                className="fa fa-shopping-bag fa-2x text-green"
                aria-hidden="true"
              ></i>
              <br></br>
              <div className="card_inner">
                <p className="text-primary-p">Number of Products</p>
                <span className="font-bold text-title"><Analytics  number="number"/></span>
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
                  <p>73</p>
                </div>

                <div className="card4">
                  <h1>Branches</h1>
                  <p>81</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </main>

      <br/><br/>
      <div id="sidebar">
        <div className="sidebar__title">
          <div className="sidebar__img">
            <h1>B2B MAKEBUZZ</h1>
          </div>
          <i
            
            className="fa fa-times"
            id="sidebarIcon"
            aria-hidden="true"
          ></i>
        </div><br/><br/>

        <div className="sidebar__menu">
          <div className="sidebar__link active_menu_link">
            <i className="fa fa-home"></i>
            <a href="dashboard.html">Dashboard</a>
          </div>
          <div className="sidebar__link">
            <i className="fa fa-user-secret" aria-hidden="true"></i>
            <a href="Deals">Proposal Request</a>
          </div>
          <div className="sidebar__link">
            <i className="fa fa-handshake"></i>
            <a href="Partners">Partners</a>
          </div>
          <div className="sidebar__link">
            <i className="fa fa-truck"></i>
            <a href="hj">Tracking</a>
          </div>
          
          <br/><br/><br/>
          <div className="sidebar__logout">
            <i className="fa fa-power-off"></i>
            <a href="" onClick={()=>logout()}>Log out</a>
          </div>
        </div>
      </div>
    </div>  
  );
}

export default AdminDashboard;
