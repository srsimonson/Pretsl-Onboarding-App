import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone'
import { Button } from 'semantic-ui-react';

// imports semantic UI styling theme
import 'semantic-ui-css/semantic.min.css';

// imports ViewContract component
import ViewContract from '../ViewContract/ViewContract'

class CustomerDashboardPreonboarding extends Component {

    state = {
        id: this.props.store.id,
        store_name: this.props.store.store_name,
        customer_email: this.props.store.customer_email,
        store_status: this.props.store.store_status,
        date_joined: this.props.store.date_joined,
        notes: this.props.store.notes,
        business_type: this.props.store.business_type,
        contract: this.props.store.contract,
        moonclerk_url: this.props.store.moonclerk_url,
        active_customer: this.props.store.active_customer,
        store_inventory: ''
    }

    // sends uploaded files to AWS S3 Bucket
    onDrop = (acceptedFiles) => {
        console.log('onDrop:', acceptedFiles);
        const upload = acceptedFiles[0];
        this.setState({
            store_inventory: acceptedFiles
        })
        this.props.dispatch({ 
            type: 'UPDATE_AWS_BUCKET',
            payload: this.state })
    }

    render(){
        const file = '../../public/images/PRETSL Android Icon.png'
        const type = 'png'
        return(
            <div>
                <h2 className="store-name">{this.props.store.store_name}</h2>
                <div className="customerPreonboardingDisplay">
                    {/* Render date joined, then email, then render view contract at the bottom of the page */}
                    {/* <div className="dateJoinedDiv">Date: {this.props.reduxState.clientStoreReducer.date_joined} </div> */}
                    <div className="emailDisplayDiv">
                        <h3>Email:</h3>
                         {this.props.store.customer_email}</div>
                    <div className="contractViewButton">
                        <h3>Contract</h3>
                            <ViewContract
                                file={file}
                                type={type}/>
                <h3>Inventory:</h3>
                <Dropzone onDrop={this.onDrop}>
                    {({getRootProps, getInputProps}) => (
                        <section className="dropzone-style">
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <p>CLICK HERE or DRAG AND DROP <br/>files to upload your inventory</p>
                            </div>
                        </section>
                    )}
                </Dropzone>
                    </div>
                </div>
            </div>
        )
    }
}

const store = reduxState => ({
    reduxState
})

export default connect(store)(CustomerDashboardPreonboarding);