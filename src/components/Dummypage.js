import React, { useContext, useEffect ,useState} from 'react'
import { Routes,Route, useNavigate,Link } from 'react-router-dom';
import "./dash.css"
const Dashboard = () => {
    return(
        <>
        <Link to="/login">
          <button id="bucli">Client</button>
        </Link>
        <Link  to="/sublogin">
          <button id="busub">Sub User</button>
        </Link>
        <Link  to="/Superlogin">
          <button id="busuper">Super Admin</button>
        </Link>
       </>
    )
}

export default Dashboard;