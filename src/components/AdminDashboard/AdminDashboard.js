import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { Table, Button, Header, Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './AdminDashboard.css';

class AdminDashboard extends Component {

    // on mount component populates global store
    componentDidMount = () => { 
        this.props.dispatch ({ type: 'GET_STORES' });
        this.props.dispatch ({ type: 'GET_USER_LIST' });
        this.props.dispatch ({ type: 'GET_TICKETS' })
      };
    
    // updates individual store reducer to contain intended store and routes to individual store view
    viewStore = (event) => {
        const storeId = event.target.value
        this.props.dispatch({ type: 'GET_INDIVIDUAL_STORE', payload: storeId });
        this.props.history.push('/AdminIndividualStore');
    }

    render(){
        return(
            <div>
                <Container className='adminDashContainer'>
                <Header as='h1' className='adminDashHead'>Admin Dashboard</Header>
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Actions</Table.HeaderCell>
                            <Table.HeaderCell>Store Name</Table.HeaderCell>
                            <Table.HeaderCell>User</Table.HeaderCell>
                            <Table.HeaderCell>Email</Table.HeaderCell>
                            <Table.HeaderCell>Status</Table.HeaderCell>
                            <Table.HeaderCell>Date Joined</Table.HeaderCell>
                            <Table.HeaderCell>Notes</Table.HeaderCell>
                            <Table.HeaderCell>Business Type</Table.HeaderCell>
                            <Table.HeaderCell>Customer Active</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.props.reduxState.storeReducer.map(store => {
                            return(
                                <Table.Row key={store.id} className="row-hover">
                                    <Table.Cell><Button value={store.id} onClick={this.viewStore}>View Profile</Button></Table.Cell>
                                    <Table.Cell>{store.store_name}</Table.Cell>
                                    <Table.Cell>{store.user_id}</Table.Cell>
                                    <Table.Cell>{store.customer_email}</Table.Cell>
                                    <Table.Cell>{store.store_status}</Table.Cell>
                                    <Table.Cell><Moment format="YYYY/MM/DD">{store.date_joined}</Moment></Table.Cell>
                                    <Table.Cell className="notes-cell">{store.notes}</Table.Cell>
                                    <Table.Cell>{store.business_type}</Table.Cell>
                                    {store.active_customer === true ?
                                        <Table.Cell>True</Table.Cell>
                                        :
                                        <Table.Cell>False</Table.Cell>
                                    }
                                </Table.Row>
                            )
                        })}
                    </Table.Body>
                </Table>
            </Container>    
            </div>
        )
    }
}

const store = reduxState => ({
    reduxState
})

export default connect(store)(AdminDashboard);