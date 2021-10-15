import React, { Component } from 'react';
import { createContext } from 'react';
import PropTypes from 'prop-types';

export const MyContext = createContext();

class Context extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
    this.saveUser = this.saveUser.bind(this);
  }

  saveUser(username) {
    this.setState({ username });
  }

  render() {
    const { children } = this.props;
    const { username } = this.state;
    const contextValue = {
      saveUser: this.saveUser,
      username,
    };
    return (
      <MyContext.Provider value={ contextValue }>
        { children }
      </MyContext.Provider>
    );
  }
}

Context.propTypes = {
  children: PropTypes.any,
};

export default Context;
