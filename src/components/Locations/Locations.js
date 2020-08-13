import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Header, Button, Container, Modal, Icon, Input, Form } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './Locations.css';

class Locations extends Component {

  componentDidMount = () => {
    this.props.dispatch({ type: "GET_LOCATIONS" });
  };

    state = {
      store_id: "",
      storeName: "",
      address: "",
      timezone: "",
      phoneNumber: "",
      email: "",
      pointOfContact: "",
      tablets_quantity: "",
      printers_quantity: "",
      tablet_stands_quantity: "",
      modalOpen: false,
    };

  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      store_id: this.props.reduxState.locationsReducer[0].store_id,
      [propertyName]: event.target.value,
    });
  };

  handleSave() {
    this.setState({
      store_id: "",
      storeName: "",
      address: "",
      timezone: "",
      phoneNumber: "",
      email: "",
      pointOfContact: "",
      tablets_quantity: "",
      printers_quantity: "",
      tablet_stands_quantity: "",
      modalOpen: false,
    });
    this.props.dispatch({
      type: "POST_LOCATION",
      payload: this.state
    });
    this.handleClose();
  }

  handleEdit() {
    this.setState({ mode: "edit" });
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  autoPopulateForm = () => {
    console.log('autoPopulateForm clicked', this.props);
    this.setState({
        store_id: this.props.reduxState.locationsReducer[0].store_id,
        storeName: `Lindsey's Patisserie on Grand`,
        address: "1355 Central Ave., Minneapolis, MN; 55418",
        timezone: "Central",
        phoneNumber: "651-554-3682",
        email: "patisserieoncentral@gmail.com",
        pointOfContact: "Jack",
        tablets_quantity: 2,
        printers_quantity: 1,
        tablet_stands_quantity: 2,
    })
}

  render() {
    const location = this.props.reduxState.locationsReducer;
    const view = this.state.mode === "view";
    return (
      <div>
        {console.log(this.props.reduxState.locationsReducer, 'this.state')}
        <Container>
          <Modal
            closeIcon
            trigger={<Button className = 'locationButton' onClick={this.handleOpen}>Add Location</Button>}
            open={this.state.modalOpen}
            onClose={this.handleClose}
          >
            <Header as='h1' content='Add New Location' onClick={this.autoPopulateForm} />
            <Modal.Content>
              <Form>
                <Form.Field>
                  <Input
                    label='Store Name'
                    type="text"
                    name="storeName"
                    onChange={this.handleInputChangeFor("storeName")}
                    value={this.state.storeName}
                  />
                </Form.Field>
                <Form.Field>
                  <Input
                    label='Address'
                    name="address"
                    onChange={this.handleInputChangeFor("address")}
                    value={this.state.address}
                  />
                </Form.Field>
                <Form.Field>
                  <Input
                    label='Timezone'
                    name="timezone"
                    onChange={this.handleInputChangeFor("timezone")}
                    value={this.state.timezone}
                  />
                </Form.Field>
                <Form.Field>
                  <Input
                    label='Phone Number'
                    name="phoneNumber"
                    onChange={this.handleInputChangeFor("phoneNumber")}
                    value={this.state.phoneNumber}
                  />
                </Form.Field>
                <Form.Field>
                  <Input
                    label='E-mail'
                    name="email"
                    onChange={this.handleInputChangeFor("email")}
                    value={this.state.email}
                  />
                </Form.Field>
                <Form.Field>
                  <Input
                    label='Point Of Contact'
                    name="pointOfContact"
                    onChange={this.handleInputChangeFor("pointOfContact")}
                    value={this.state.pointOfContact}
                  />
                </Form.Field>
                <Form.Field>
                  <Input
                    label='Tablet Quantity'
                    name="tablets_quantity"
                    onChange={this.handleInputChangeFor("tablets_quantity")}
                    value={this.state.tablets_quantity}
                  />
                </Form.Field>
                <Form.Field>
                  <Input
                    label='Printer Quantity'
                    name="printers_quantity"
                    onChange={this.handleInputChangeFor("printers_quantity")}
                    value={this.state.printers_quantity}
                  />
                </Form.Field>
                <Form.Field>
                  <Input
                    label='Tablet Stand Quantity'
                    name="tablet_stands_quantity"
                    onChange={this.handleInputChangeFor("tablet_stands_quantity")}
                    value={this.state.tablet_stands_quantity}
                  />
                </Form.Field>
              </Form>
            </Modal.Content>
            <Modal.Actions>
              <Button onClick={this.handleSave}>
                <Icon name='checkmark' />Add Location
                            </Button>
            </Modal.Actions>
          </Modal>         
        <Header className='locationsHead' as='h1'>Locations</Header>
        <Table className="locations">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Store Name</Table.HeaderCell>
              <Table.HeaderCell>Address</Table.HeaderCell>
              <Table.HeaderCell>Timezone</Table.HeaderCell>
              <Table.HeaderCell>Phone Number</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Point of Contact</Table.HeaderCell>
              <Table.HeaderCell>Tablets Quantity</Table.HeaderCell>
              <Table.HeaderCell>Printers Quantity</Table.HeaderCell>
              <Table.HeaderCell>Tablet Stands Quantity</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
          {location &&
            location.map((item) => (
              <Table.Row key={item.id} className="row-hover">
                <Table.Cell>{item.store_name}</Table.Cell>
                <Table.Cell>{item.address}</Table.Cell>
                <Table.Cell>{item.timezone}</Table.Cell>
                <Table.Cell>{item.phone_number}</Table.Cell>
                <Table.Cell>{item.location_email}</Table.Cell>
                <Table.Cell>{item.point_of_contact}</Table.Cell>
                <Table.Cell>{item.tablets_quantity}</Table.Cell>
                <Table.Cell>{item.printers_quantity}</Table.Cell>
                <Table.Cell>{item.tablet_stands_quantity}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        </Container>
      </div>
    );
  }
}

const store = reduxState => ({
    reduxState
})

export default connect(store)(Locations);