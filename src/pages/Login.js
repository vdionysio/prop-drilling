import React, { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleClick() {
    const { saveUser, history } = this.props;
    const { username } = this.state;
    saveUser(username);
    history.push('/main');
  }
  handleChange({target}) {
    const { value } = target;
    this.setState({ username: value });
  }
  render() {
    return (
      <form>
        <label htmlFor="username" onChange={ this.handleChange }>
          username
          <input type="text" name="username"/>
        </label>
        <label>
          password
          <input type="password" name="password"/>
        </label>
        <button type="button" onClick={ this.handleClick }>
          Login
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  saveUser: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default withRouter(Login);
