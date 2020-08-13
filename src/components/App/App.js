import React, { Component } from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import './App.scss';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

// ADMIN imports
import AdminDashboard from '../AdminDashboard/AdminDashboard';
import AdminIndividualStore from '../AdminIndividualStore/AdminIndividualStore';
import AdminNavigation from '../AdminNavigation/AdminNavigation';
import AdminSupport from '../AdminSupport/AdminSupport';
import AdminCustomerOnboarding from '../AdminCustomerOnboarding/AdminCustomerOnboarding';

// CUSTOMER imports
import CustomerDashboard from '../CustomerDashboard/CustomerDashboard';
import CustomerNavigation from '../CustomerNavigation/CustomerNavigation';
import CustomerSupport from '../CustomerSupport/CustomerSupport';
import Locations from '../Locations/Locations';



class App extends Component {

  // retreives current user data
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {
    const isAdmin = this.props.reduxStore.user.administrator
    return (
      <Router>
        <div>
          
        {/* Navigation toggles between Admin or Customer view */}
          {isAdmin ? <AdminNavigation changeRoute={this.changeRoute}/> : <CustomerNavigation changeRoute = {this.changeRoute}/>}

          <Switch>
            {isAdmin ? <Redirect exact from="/home" to="/AdminDashboard" /> : <Redirect exact from="/home" to="/CustomerDashboard" />}
            <Route exact path="/about" component={AboutPage}/>
            <ProtectedRoute exact path="/home" component={UserPage}/>
            
        {/* ADMIN ROUTES */}
            <ProtectedRoute exact path="/AdminDashboard" component={AdminDashboard}/>
            <ProtectedRoute exact path="/AdminIndividualStore" component={AdminIndividualStore}/>
            <ProtectedRoute exact path="/AdminSupport" component={AdminSupport}/>
            <ProtectedRoute exact path="/AdminCustomerOnboarding" component={AdminCustomerOnboarding}/>

        {/* CUSTOMER ROUTES */}
            <ProtectedRoute exact path="/CustomerDashboard" component={CustomerDashboard}/>
            {/* <ProtectedRoute exact path="/CustomerPostOnboarding" component={CustomerPostOnboarding}/> */}
            <ProtectedRoute exact path="/CustomerSupport" component={CustomerSupport}/>
            <ProtectedRoute exact path="/CustomerLocations" component={Locations}/>
        {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />

          </Switch>
          <Footer />
        </div>
      </Router>
  )}
}

const mapStateToProps = (reduxStore) => ({ reduxStore });
export default connect(mapStateToProps)(App);