import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import React from 'react';
import Context from './Context';

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
        <Context>
          <Route
            path="/main"
            component={ () => <Home username={ username } /> }
          />
          <Route
            exact
            path="/"
            component={() => <Login saveUser={ this.saveUser } /> }
          />
        </Context>
      </BrowserRouter>
    );
  }
}

export default App;
