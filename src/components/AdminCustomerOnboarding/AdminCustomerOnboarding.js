import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Header, Icon, Modal, Input, TextArea, Form } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './AdminCustomerOnboarding.scss';


class CustomerOnboarding extends Component {

    state = {
        successOpen: false,
        modalOpen: false,
        store_name: '',
        store_status: '',
        notes: '',
        business_type: '',
        customer_email: ''
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    addStore = () => {
        console.log('in addStore!');
        this.props.dispatch({ type: 'ADD_NEW_STORE', payload: this.state })
        this.setState({
            modalOpen: false,
            store_name: '',
            store_status: '',
            notes: '',
            business_type: '',
            customer_email: ''
        })
        this.successClose();
    }


    autoPopulateForm = () => {
        console.log('autoPopulateForm clicked', this.props.reduxState.individualStoreReducer.id);
        this.setState({
            store_name: 'Pastel Patissere',
            store_status: 'Lead',
            notes: 'Lindsey is expanding her business into her first brick and mortar location, and is looking for a way to expand online presence.',
            business_type: 'Caterer',
            customer_email: 'pastelpatissere@gmail.com',
        })
    }


    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })

    successOpen = () => this.setState({ successOpen: true })

    successClose = () => this.setState({ successOpen: false })

    render() {
        return (
            <div className="customer-onboarding-form">
                <Form>
                <h1 onClick={this.autoPopulateForm}>Customer Onboarding</h1>
                <h3>Store Name</h3>
                <Input className="customer-onboarding-input" name = 'store_name' placeholder = 'Store Name' onChange={this.handleChange} value = {this.state.store_name}></Input>
                <h3>Store Status</h3>
                <select name='store_status' value={this.state.store_status} onChange={this.handleChange}>
                    <option value=''>Select</option>
                    <option value='Lead'>Lead</option>
                    <option value='Prospect'>Prospect</option>
                    <option value='Opportunity'>Opportunity</option>
                    <option value='Customer'>Customer</option>
                    <option value='Past Customer'>Past Customer</option>
                    <option value='Junk Opportunity'>Junk Opportunity</option>
                    <option value='Junk Prospect'>Junk Prospect</option>
                </select>
                <h3>Notes</h3>
                <TextArea className="customer-text-area" name = 'notes' placeholder = 'Notes' onChange = {this.handleChange} value = {this.state.notes}></TextArea>
                <h3>Business Type</h3>
                <select name='business_type' value={this.state.business_type} onChange={this.handleChange}>
                    <option value=''>Select</option>
                    <option value='Ag Co-op'>Ag Co-op</option>
                    <option value='Food Co-op'>Food Co-op</option>
                    <option value='Meat Market'>Meat Market</option>
                    <option value='Ethnic Grocer'>Ethnic Grocer</option>
                    <option value='Organic/Health Foods'>Organic/Health Foods</option>
                    <option value='Caterer'>Caterer</option>
                </select>
                <h3>Customer Email</h3>
                <Input className="customer-onboarding-input" name='customer_email' placeholder = 'Customer Email' onChange={this.handleChange} value={this.state.customer_email}></Input>
                <br/>
                <br/>
                { this.state.store_name === '' || this.state.store_status === '' || this.state.notes === '' || this.state.business_type === '' || this.state.customer_email === '' ?
                    <Modal
                        trigger={<Button onClick={this.handleOpen}>Submit</Button>}
                        open={this.state.modalOpen}
                        onClose={this.handleClose}
                        basic
                        size='small'
                    >
                        <Header icon='browser' content='Input Validation Error!' />
                        <Modal.Content>
                            <h3>Please make sure all inputs have been updated before submission!</h3>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button color='green' onClick={this.handleClose} inverted>
                                <Icon name='checkmark' /> Got it
                            </Button>
                        </Modal.Actions>
                    </Modal>
                :
                    <Modal
                        trigger={<Button onClick={this.successOpen}>Submit</Button>}
                        open={this.state.successOpen}
                        onClose={this.successClose}
                        basic
                        size='small'
                    >
                        <Header icon='browser' content='Success!' />
                        <Modal.Content>
                            <h3>A new lead has been added!</h3>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button color='green' onClick={this.addStore} inverted>
                                <Icon name='checkmark' /> Got it
                            </Button>
                        </Modal.Actions>
                    </Modal>
                }
                </Form>
            </div>
        )
    }
}

const store = reduxState => ({
    reduxState
})

export default connect(store)(CustomerOnboarding);