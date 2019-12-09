import React, { useState, useEffect, Fragment } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Navbar from "./components/navBar/navbar";
import Users from "./components/users/users";
import SearchForm from "./components/search/search";
import Alert from "./components/alert/alert";
import User from "./components/users/user";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import NotFound from "./components/pages/notFound";

function App() {
  let githubClientId;
  let githubClientSecret;
  if (process.env.NODE_ENV !== "production") {
    githubClientId = process.env.APP_CLIENT_ID;
    githubClientSecret = process.env.APP_CLIENT_SECRET;
  } else {
    githubClientId = process.env.CLIENT_ID;
    githubClientSecret = process.env.CLIENT_SECRET;
  }
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  const fireAlert = msg => {
    setAlert(msg);
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://api.github.com/users?client_id=${githubClientId}&client_secret=${githubClientSecret}`
      );
      setUsers(res.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  // Search User
  const searchUsers = async name => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${name}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    setUsers(res.data.items);
    setLoading(false);
  };

  // Clear Users
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

  //Get A User
  const getUser = async username => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    setUser(res.data);
    setLoading(false);
  };

  //Get Repos
  const getRepos = async username => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    setRepos(res.data);
    setLoading(false);
  };

  return (
    <BrowserRouter>
    <Switch>
      <div className='App'>
        <Navbar />

        <div className='container'>
          <Alert alert={alert} />
          <Route
            exact
            path='/'
            render={props => (
              <Fragment>
                <SearchForm
                  fireAlert={fireAlert}
                  searchUsers={searchUsers}
                  clearUsers={clearUsers}
                  showClear={users.length > 0 ? true : false}
                />
                <Users loading={loading} users={users} />
              </Fragment>
            )}
          />
          <Route
            exact
            path='/user/:username'
            render={props => (
              <User
                {...props}
                getUser={getUser}
                user={user}
                loading={loading}
                repos={repos}
                getRepos={getRepos}
              />
            )}
          />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
        </div>
      </div>
     </Switch>
     </BrowserRouter>
  );
}

export default App;