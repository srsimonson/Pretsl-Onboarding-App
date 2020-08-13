import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
// import './Nav.css';

const CustomerNavigation = (props) => (
  <div className="nav">
    <Link to="/home">
      {/* <h2 className="nav-title">Customer Nav Bar</h2> */}
      <img className="logo-nav" src="https://get.pretsl.com/wp-content/uploads/2020/06/Pretsl-New-Logo-1.11-White-Opt.png" alt="pretsl logo"></img>
    </Link>
    <div className="nav-right">
      {!props.user.id && <Link className="nav-link" to="/home">'Login / Register'</Link>}
      {/* Always show this link since the about page is not protected */}
      {props.user.id && <Link className="nav-link" to="/CustomerDashboard">Dashboard</Link>}
      {props.user.id && <Link className="nav-link" to="/CustomerSupport">Support</Link>}
      {props.user.id && <Link className="nav-link" to="/CustomerLocations">Locations</Link>}
      <LogOutButton className="nav-link"/>
    </div>
  </div>
);

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(CustomerNavigation);