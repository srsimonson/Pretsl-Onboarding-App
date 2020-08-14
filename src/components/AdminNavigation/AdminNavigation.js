import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';

const AdminNavigation = (props) => (
  <div className="nav">
    <Link to="/home"></Link>
    <img className="logo-nav" src="https://get.pretsl.com/wp-content/uploads/2020/06/Pretsl-New-Logo-1.11-White-Opt.png" alt="pretsl logo"></img>
    <div className="nav-right">
      
        {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
      {props.user.id === false && <Link className="nav-link" to="/home">'Login / Register'</Link>}
      
      <Link className="nav-link" to="/AdminDashboard">Dashboard</Link>
      <Link className="nav-link" to="/AdminCustomerOnboarding">Onboarding</Link>
      <Link className="nav-link" to="/AdminSupport">Support</Link>
      {/* <Link className="nav-link" to="/about">About</Link> */}
      <LogOutButton className="nav-link"/>
    </div>
  </div>
);

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(AdminNavigation);
