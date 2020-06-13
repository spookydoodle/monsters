import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import Monsters from './pages/Monsters';
import './App.css';
import ScrollToTop from './utils/ScrollToTop';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <Router>
        <ScrollToTop>
          <div className="App">
            <Switch>
              {/*
                A Switch will iterate through all routes and return
                on the first match.
                The order matters - the most generic paths should
                be at the very end.
              */}
              <Route path="/monsters/monsters">
                <Monsters />
              </Route>
              <Route path="/monsters">
                <Landing />
              </Route>
            </Switch>
          </div>
        </ScrollToTop>
      </Router>
    )
  }
}

export default App;
