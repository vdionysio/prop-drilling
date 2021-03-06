import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    }
    this.saveUser = this.saveUser.bind(this);
  }

  saveUser(username) {
    this.setState({ username });
  }

  render () {
    const { username } = this.state;
    return (
      <BrowserRouter>
        <Route
          path="/main"
          component={ () => <Home username={ username } /> }
        />
        <Route
          exact
          path="/"
          component={() => <Login saveUser={ this.saveUser } /> }
        />
      </BrowserRouter>
    );
  }
}

export default App;
