import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Monsters from './pages/Monsters';
import Register from './pages/Register'
import Login from './pages/Login'
import Logout from './pages/Logout'
import ScrollToTop from './utils/ScrollToTop';
import authService from './services/authService';
import monstersService from './services/monsters'
import { INITIAL_STATE } from './constants/data'
import { ModeType, StateType, UserType } from './typings/types'

class App extends Component<{}, StateType> {
  constructor(props: any) {
    super(props);
    this.state = INITIAL_STATE;
  }

  resolveWhoAmI = (user: UserType) => {
    this.setState({ user, whoAmIRequestDone: true })
  }

  clearUser = () => {
    this.setState({ user: undefined })
  }

  setUser = (user: UserType) => {
    this.setState({ user })
  }

  setDarkMode = (mode: ModeType) => {
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
    authService.whoAmI().then(({ user }) => {
      this.resolveWhoAmI(user);
    });

    this.getMonsters()
  }

  render() {
    const { mode, query, data } = this.state;

    return (
      <Router>
        <ScrollToTop>
          <Switch>
            {/*
                A Switch will iterate through all routes and return
                on the first match.
                The order matters - the most generic paths should
                be at the very end.
              */}
              
            <Route exact path="/">
              <Landing />
            </Route>
            <Route path="/login">
              <Login
                onLoginSuccess={this.setUser}
              // notificationsProps={notificationsProps}
              />
            </Route>
            <Route path="/register">
              <Register
                user={this.state.user}
                onSuccess={this.setUser}
              // notificationsProps={notificationsProps}
              />
            </Route>
            <Route path="/logout">
              <Logout
                user={this.state.user}
                onSuccess={this.clearUser}
              // notificationsProps={notificationsProps}
              />
            </Route>
            {/* 
              This is a protected page requiring authentication.
              Users who are not logged in will be redirected to Login page
            */}
            <Route path="/monsters">
              <Monsters
                user={this.state.user}
                query={query}
                data={data}
                mode={this.state.mode}
                changeQuery={this.changeQuery}
                setDarkMode={this.setDarkMode}
              />
            </Route>
            {/* 
              This is a page available for guests only. Logged users will be redirected to '/monsters'
              It is meant to display general information about the app
            */}
            <Route path="/home">
              <Home
                user={this.state.user}
                query={query}
                data={data}
                mode={this.state.mode}
                changeQuery={this.changeQuery}
                setDarkMode={this.setDarkMode}
              />
            </Route>
          </Switch>
        </ScrollToTop>
      </Router>
    )
  }
}

export default App;
