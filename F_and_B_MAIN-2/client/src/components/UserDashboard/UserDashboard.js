import React, { useState, useEffect } from 'react';
import Heading from './Heading';
import Panel from './Panel';
import Sidepanel from './Sidepanel.jsx';
import decode from 'jwt-decode';
import Dashboard from '../AdminDashboard/Dasboard.jsx';
import { Profiler } from 'react';

const UserDashboard = () => {
const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
console.log(user.result.admin)
  return (
    <div>
    {user.result.admin==="true"?
    <Dashboard />
    :
    <>
    <Heading />
    <Panel />
    <Sidepanel />
    </>
    }
    
    </div>
  );
};

export default UserDashboard;
