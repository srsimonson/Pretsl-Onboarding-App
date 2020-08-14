import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminSupportTicket from './AdminSupportTicket';
import { Table, Header, Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './AdminSupport.css';

// This component displays support tickets on Admin View.
class AdminSupport extends Component {

    componentDidMount = () => { 
        this.props.dispatch({ type: 'GET_TICKETS' })
    };

    render(){
        const supportTicket = this.props.reduxStore.supportReducer;
        return(
            <div>
                <Container>
                    <Container className='supportContainer'>
                        <Header className='supportHead' as='h1'>Admin Support Tickets</Header>
                    </Container>
                    <Table>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Store Name</Table.HeaderCell>
                                <Table.HeaderCell>Store Email</Table.HeaderCell>
                                <Table.HeaderCell>Request Type</Table.HeaderCell>
                                <Table.HeaderCell>Description</Table.HeaderCell>
                                <Table.HeaderCell>Ticket Number</Table.HeaderCell>
                                <Table.HeaderCell>Date Requested</Table.HeaderCell>
                                <Table.HeaderCell width={3}>Status</Table.HeaderCell>
                                <Table.HeaderCell>Actions</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            { supportTicket && supportTicket.map(item => 
                                <AdminSupportTicket item={item} />)}
                        </Table.Body>
                    </Table>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({ reduxStore });
export default connect(mapStateToProps)(AdminSupport);