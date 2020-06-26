import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
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
import { INITIAL_STATE, PATHS} from './constants/data'
import { ModeType, StateType, UserType } from './logic/types'
import { getData } from './constants/dummyGallery';

/*
  App routes are handled by react router. Make sure the app uses the 'Link' component from react-router-dom for all in-app paths.
  DO NOT USE THE ONE FROM MATERIAL-UI for in-app links!
  The one from router handles correctly all redirects from protected or guest pages. The one from material-ui logs the user out.
*/
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
    const {
      // getGoogleAPI, 
      getGoogleHTML,
      // getGoogleScrape 
    } = monstersService;
    const { query } = this.state;
    // TODO: Check for received errors and run another method if the previous one failed
    getGoogleHTML(query)
      .then(res => this.setState({ data: res }))
      .catch(err => this.setState({ data: getData(query) || [] }))
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
    const { root, landing, home, main, login, logout, register } = PATHS;

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
            <Route exact path={root}>
              <Redirect to={landing} />
            </Route>
            <Route exact path={landing}>
              <Landing />
            </Route>
            <Route path={login}>
              <Login
                onLoginSuccess={this.setUser}
                // notificationsProps={notificationsProps}
                mode={this.state.mode}
                changeQuery={this.changeQuery}
                setDarkMode={this.setDarkMode}
              />
            </Route>
            <Route path={register}>
              <Register
                user={this.state.user}
                onSuccess={this.setUser}
                // notificationsProps={notificationsProps}
                mode={this.state.mode}
                changeQuery={this.changeQuery}
                setDarkMode={this.setDarkMode}
              />
            </Route>
            <Route path={logout}>
              <Logout
                user={this.state.user}
                onSuccess={this.clearUser}
                // notificationsProps={notificationsProps}
                mode={this.state.mode}
                changeQuery={this.changeQuery}
                setDarkMode={this.setDarkMode}
              />
            </Route>
            {/* 
              This is a protected page requiring authentication.
              Users who are not logged in will be redirected to Login page
            */}
            <Route path={main}>
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
              This is a page available for guests only. Logged users will be redirected to the main page (see PATHS.main in constants/data)
              It is meant to display general information about the app
            */}
            <Route path={home}>
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
