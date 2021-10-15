import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class Home extends Component {
  render() {
    const { username } = this.props;
    return (
      <div>
        <Header username={ username }/>
        Home Page
      </div>
    )
  }
}

Home.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Home;
