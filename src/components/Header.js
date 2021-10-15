import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { username } = this.props;
    return (
      <header>
        <p>{ `Username: ${username}` }</p>
      </header>
    )
  }
}

Header.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Header;
