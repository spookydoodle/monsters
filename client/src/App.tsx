import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import Monsters from './pages/Monsters';
import './App.css';
import ScrollToTop from './utils/ScrollToTop';
import monstersService from './services/monsters'

class App extends Component<{}, { query: string, data: Array<{ title: string, src: string }> }> {
  constructor(props: any) {
    super(props);
    this.state = {
      query: "furry+monster",
      data: [],
    };
    this.changeQuery = this.changeQuery.bind(this)
    this.getMonsters = this.getMonsters.bind(this)
  }

  getMonsters = async () => {
    // let res = await monstersService.getGoogleScrape('furry+monster');
    let res = await monstersService.getGoogleHTML(this.state.query);
    // let res = await monstersService.getGoogleAPI('furry+monster');
    this.setState({ data: res })
}

  changeQuery = (name: string) => {
    this.setState({ query: `${name}+furry+monster` }, () => this.getMonsters())
  }

  componentDidMount() {
    this.getMonsters()
  }

  render() {
    const { query, data } = this.state;

    return (
      <Router>
        {/* <ScrollToTop> */}
          <div className="App">
            <Switch>
              {/*
                A Switch will iterate through all routes and return
                on the first match.
                The order matters - the most generic paths should
                be at the very end.
              */}
              <Route path="/monsters">
                <Monsters query={query} data={data} changeQuery={this.changeQuery} />
              </Route>
              <Route path="/">
                <Landing />
              </Route>
            </Switch>
          </div>
        {/* </ScrollToTop> */}
      </Router>
    )
  }
}

export default App;
