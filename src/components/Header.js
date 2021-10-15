import React, { Component } from 'react';
import { MyContext } from '../Context';

class Header extends Component {
  render() {
    const { username } = this.context;
    return (
      <header>
        <p>{ `Username: ${username}` }</p>
      </header>
    );
  }
}

Header.contextType = MyContext;

export default Header;
