import React, { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { MyContext } from '../Context';

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
    const { history } = this.props;
    const { saveUser } = this.context;
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
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

Login.contextType = MyContext;

export default withRouter(Login);
