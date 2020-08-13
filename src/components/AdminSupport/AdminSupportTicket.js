import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { Button, Table, Modal, Header, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './AdminSupport.css';

class AdminSupportTicket extends Component {

    state = {
        modalOpen: false,
        ticket_status: '',
        updateStatus: '',
        ticketId: '',
        isArchived: ''
    }

    componentDidMount(){
        this.setState({
            ticket_status: this.props.item.ticket_status,
            ticketId: this.props.item.id,
            isArchived: this.props.item.isarchived,
        })
    }

    updateStatus = (event) => {
        this.setState({
            updateStatus: event.target.value
        })
        setTimeout(() => {
            this.props.dispatch({
                type: 'UPDATE_TICKET_STATUS',
                payload: this.state,
            })
        }, 1000);
    }

    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })

    archive = () => {
        this.setState({
            isArchived: !this.props.item.isarchived
        })
        setTimeout(() => {
            this.props.dispatch({
                type: 'UPDATE_TICKET_STATUS',
                payload: this.state,
            })
        }, 500);
        this.handleClose();
    }

    render(){
        return(
            <Table.Row key={this.props.item.id} className="row-hover">
                <Table.Cell>{this.props.item.store_name}</Table.Cell>
                <Table.Cell>{this.props.item.customer_email}</Table.Cell>
                <Table.Cell>{this.props.item.request_type}</Table.Cell>
                <Table.Cell>{this.props.item.request_body}</Table.Cell>
                <Table.Cell>{this.props.item.id}</Table.Cell> 
                <Table.Cell>
                    <Moment format="YYYY/MM/DD">
                        {this.props.item.request_date}
                    </Moment>
                </Table.Cell>
                <Table.Cell>
                    <select name="updateStatus" value = {this.props.item.ticket_status} onChange={this.updateStatus}>
                        <option value="New Request">New Request</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Resolved">Resolved</option>
                    </select>
                </Table.Cell>
                <Table.Cell>
                    <Modal
                        trigger={<Button basic color='red' value={this.props.item.id} onClick={this.handleOpen}>ARCHIVE</Button>}
                        open={this.state.modalOpen}
                        onClose={this.handleClose}
                        basic
                        size='small'
                    >
                        <Header icon='browser' content='Are you sure?' />
                        <Modal.Content>
                            <h3>Do you want to archive this ticket?</h3>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button color='red' onClick={this.handleClose} inverted>
                                <Icon name='x' />No
                            </Button>
                            <Button color='green' onClick={this.archive} inverted>
                                <Icon name='checkmark' />Yes
                            </Button>
                        </Modal.Actions>
                    </Modal>
                    
                </Table.Cell>
            </Table.Row>
        )
    }
}

const store = reduxState => ({
    reduxState
})

export default connect(store)(AdminSupportTicket);