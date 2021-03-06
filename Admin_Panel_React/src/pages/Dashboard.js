import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Dashboard extends React.Component {
    render() {
      return (
        <div className="Dashboard">
            <div class="container">
      <nav class="navbar">
        <div class="nav_icon" onclick="toggleSidebar()">
          <i class="fa fa-bars" aria-hidden="true"></i>
        </div>
        <div class="navbar__left">
          <a class="active_link" href="#">Admin</a>
        </div>
        <div class="navbar__right">
          <a href="#">
            <i class="fa fa-search" aria-hidden="true"></i>
          </a>
          <a href="#">
            <i class="fa fa-clock-o" aria-hidden="true"></i>
          </a>
          <a href="#">
            <img width="30" src="assets/avatar.svg" alt="" />
          </a>
        </div>
      </nav>

      <main>
        <div class="main__container">

          <div class="main__title">
            <img src="assets/hello.svg" alt="" />
            <div class="main__greeting">
              <h1>Hello Admin</h1>
              <p>Welcome to your dashboard</p>
            </div>
          </div>

          
          <div class="main__cards">
            <div class="card">
              <i
                class="fa fa-pencil-square-o fa-2x text-lightblue"
                aria-hidden="true"
              ></i>
              <div class="card_inner">
                <p class="text-primary-p">Orders Pending</p>
                <span class="font-bold text-title">578</span>
              </div>
            </div>

            <div class="card">
              <i class="fa fa-check fa-2x text-green" aria-hidden="true"></i>
              <div class="card_inner">
                <p class="text-primary-p">Orders Accepted</p>
                <span class="font-bold text-title">2467</span>
              </div>
            </div>

            <div class="card">
              <i
                class="fa fa-ban fa-2x text-red"
                aria-hidden="true"
              ></i>
              <div class="card_inner">
                <p class="text-primary-p">Orders Rejected</p>
                <span class="font-bold text-title">340</span>
              </div>
            </div>

            <div class="card">
              <i
                class="fa fa-shopping-bag fa-2x text-green"
                aria-hidden="true"
              ></i>
              <div class="card_inner">
                <p class="text-primary-p">Number of Products</p>
                <span class="font-bold text-title">645</span>
              </div>
            </div>
          </div>
         
          <div class="charts">
            <div class="charts__left">
              <div class="charts__left__title">
                <div>
                  <h1>Daily Reports</h1>
                  <p>Mapusa, Goa, India</p>
                </div>
                <i class="fa fa-inr" aria-hidden="true"></i>
              </div>
              <div id="apex1"></div>
            </div>

            <div class="charts__right">
              <div class="charts__right__title">
                <div>
                  <h1>Stats Reports</h1>
                  <p>Mapusa, Goa, India</p>
                </div>
                <i class="fa fa-inr" aria-hidden="true"></i>
              </div>

              <div class="charts__right__cards">
                <div class="card1">
                  <h1>Income</h1>
                  <p>???75,300</p>
                </div>

                <div class="card2">
                  <h1>Sales</h1>
                  <p>???124,200</p>
                </div>

                <div class="card3">
                  <h1>Partners</h1>
                  <p>73</p>
                </div>

                <div class="card4">
                  <h1>Branches</h1>
                  <p>81</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </main>

      <div id="sidebar">
        <div class="sidebar__title">
          <div class="sidebar__img">
            <h1>B2B MakeBuzz</h1>
          </div>
          <i
            onclick="closeSidebar()"
            class="fa fa-times"
            id="sidebarIcon"
            aria-hidden="true"
          ></i>
        </div>

        <div class="sidebar__menu">
          <div class="sidebar__link active_menu_link">
            <i class="fa fa-home"></i>
            <a href="/dashboard">Dashboard</a>
          </div>
          <div class="sidebar__link">
            <i class="fa fa-user-secret" aria-hidden="true"></i>
            <a href="#">Proposal Request</a>
          </div>
          <div class="sidebar__link">
            <i class="fa fa-handshake-o"></i>
            <a href="#">Partners</a>
          </div>
          <div class="sidebar__link">
            <i class="fa fa-truck"></i>
            <a href="#">Tracking</a>
          </div>
          
          <div class="sidebar__logout">
            <i class="fa fa-power-off"></i>
            <a href="#">Log out</a>
          </div>
        </div>
      </div>
    </div>
        </div>

      );
    }
}

export default Dashboard;