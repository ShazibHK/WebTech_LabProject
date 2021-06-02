import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component {
    render() {
      return (
        <div className="Home">
            <div className="container">
            <nav className="navbar">
              <div className="nav_icon" onclick="toggleSidebar()">
                <i className="fa fa-bars" aria-hidden="true"></i>
              </div>
              <div className="navbar__left">
                <a className="active_link" href="#">Admin</a>
              </div>
              <div className="navbar__right">
                <a href="#">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-clock-o" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <img width="30" src="assets/avatar.svg" alt="" />
                </a>
              </div>
            </nav>
  
            <main>
              <div className="main__container">
              
  
                <div className="main__title">
                  <img src="assets/hello.svg" alt="" />
                  <div className="main__greeting">
                    <h1>Hello Admin</h1>
                    <p>Welcome to your admin dashboard</p>
                  </div>
                </div>
  
                
  
                
                <div className="main__cards">
                  <div className="card">
                    <i
                      className="fa fa-pencil-square-o fa-2x text-lightblue"
                      aria-hidden="true"
                    ></i>
                    <div className="card_inner">
                      <p className="text-primary-p">Orders Pending</p>
                      <span className="font-bold text-title">578</span>
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
  
            <div id="sidebar">
              <div className="sidebar__title">
                <div className="sidebar__img">
                  <h1>B2B MakeBuzz</h1>
                </div>
                <i
                  onclick="closeSidebar()"
                  className="fa fa-times"
                  id="sidebarIcon"
                  aria-hidden="true"
                ></i>
              </div>
  
              <div className="sidebar__menu">
                <div className="sidebar__link active_menu_link">
                  <i className="fa fa-home"></i>
                  <a href="/dashboard">Dashboard</a>
                </div>
                <div className="sidebar__link">
                  <i className="fa fa-user-secret" aria-hidden="true"></i>
                  <a href="#">Proposal Request</a>
                </div>
                <div className="sidebar__link">
                  <i className="fa fa-handshake-o"></i>
                  <a href="#">Partners</a>
                </div>
                <div className="sidebar__link">
                  <i className="fa fa-truck"></i>
                  <a href="#">Tracking</a>
                </div>
                
                <div className="sidebar__logout">
                  <i className="fa fa-power-off"></i>
                  <a href="#">Log out</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default Home;