import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { Grid } from 'semantic-ui-react';

// imports view contract component
import ViewContract from '../ViewContract/ViewContract';

// import semantic UI styling theme
import 'semantic-ui-css/semantic.min.css';

// This component displays a customer's information after they have been onboarded
class CustomerDashboardPostonboarding extends Component {
    render(){
        return(
            <div>
                <h2 className="store-name">{this.props.store.store_name}</h2>
                <div className="customerPostonboardingDisplay">
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={8} className="left-column">
                                <h3>Date Joined</h3>
                                    <div className="dateJoinedDiv">
                                        <Moment format="YYYY/MM/DD">
                                        {this.props.store.date_joined}
                                        </Moment>
                                    </div>
                                <h3>Email</h3>
                                    <div className="emailDisplayDiv">
                                        <p>{this.props.store.customer_email}</p>
                                    </div>
                                <h3>Business Type</h3>
                                    <div className="emailDisplayDiv">
                                        <p>{this.props.store.business_type}</p>
                                    </div>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <h3>MoonClerk URL</h3>
                                <a target="_blank" href={String(this.props.store.moonclerk_url)}>{String(this.props.store.moonclerk_url)}</a>
                                <h3>Contract</h3>
                                    
                                    <ViewContract />
                                <h3>Active Customer?</h3>
                                    <p>{String(this.props.store.active_customer)}</p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
             </div>
        )
    }
}

const store = reduxState => ({
    reduxState
})

export default connect(store)(CustomerDashboardPostonboarding);