import React, { Component } from 'react';
import {connect} from 'react-redux';

import { Input, Modal } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './RegisterPage.scss';

class RegisterPage extends Component {
  state = {
    username: '',
    password: '',
  };

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({type: 'REGISTRATION_INPUT_ERROR'});
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  getUsers = () => {
    setTimeout(() => {
      this.props.dispatch({
        type: 'GET_USER_LIST',
      })
    }, 750);
  }

  render() {
    return (
      <div>
        {this.props.errors.registrationMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.registrationMessage}
          </h2>
        )}
        <form onSubmit={this.registerUser}>
          <h1>Create New Credentials</h1>
          <div>
            <label htmlFor="username">
              Username:
              <Input className="login-input"
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password:<br/>
              <Input className="login-input"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </label>
          </div>
          <div>
          <Modal
            trigger={<input
              className="register"
              type="submit"
              name="submit"
              value="Register"
              onClick={this.getUsers}
            />}
            header='Reminder!'
            content='Congrats! New customer created. Remember to email your new client the username and password created for them!'
            actions={[{ key: 'done', content: 'Done', positive: true }]}
          />
          </div>
        </form>
        <center>
          {/* <button
            type="button"
            className="link-button"
            onClick={() => {this.props.dispatch({type: 'SET_TO_LOGIN_MODE'})}}
          >
            Login
          </button> */}
        </center>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(RegisterPage);

