import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import Monsters from './pages/Monsters';
import './App.css';
// import ScrollToTop from './utils/ScrollToTop';
import monstersService from './services/monsters'
import { INITIAL_STATE, CATEGORIES } from './constants/data'
import { ModeType, StateType } from './types/types'
import Layout from './components/navigation/Layout'

class App extends Component<{}, StateType> {
  constructor(props: any) {
    super(props);
    this.state = INITIAL_STATE;
  }

  setMode = (mode: ModeType) => {
    this.setState({ mode: mode })
  }

  getMonsters = () => {
    const { getGoogleAPI, getGoogleHTML, getGoogleScrape } = monstersService;
    const { query } = this.state;
    // TODO: Check for received errors and run another method if the previous one failed
    getGoogleHTML(query)
      .then(res => this.setState({ data: res }))
  }

  addItems = (list: Array<({ title: string, src: string })>) => () => {
    this.setState(state => {
      const data = [...state.data, ...list];

      return { data }
    })
  }

  changeQuery = (name: string) => () => {
    this.setState({ query: `${name}+furry+monster` }, () => this.getMonsters())
  }

  componentDidMount() {
    this.getMonsters()
  }

  render() {
    const { mode, query, data } = this.state;

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
              <Layout mode={this.state.mode} changeQuery={this.changeQuery} setMode={this.setMode}>
                <Monsters query={query} data={data} />
              </Layout>
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
