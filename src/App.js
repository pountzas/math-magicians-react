import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CalculatorLink from './pages/CalculatorLink';
import Quote from './pages/Quote';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/calculator">
              <CalculatorLink />
            </Route>
            <Route path="/quote">
              <Quote />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
