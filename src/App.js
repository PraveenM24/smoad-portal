import React, { useEffect } from 'react';
import { useStateValue } from './utils/StateProvider';
import { actionTypes } from "./utils/Reducer";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Login from './pages/Login';
import Home from './pages/Home';
import Users from './pages/Users';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {

  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    if (user) {
      AsyncStorage.setItem('USER', JSON.stringify({
        user:`${user}`
      }));
    }else{
      AsyncStorage.getItem('USER').then((value) => {
        if (value) {
          value = JSON.parse(value)
          dispatch({
            type: actionTypes.SET_USER,
            user: value.user,
          })
        }
      });
    }
  }, [user]);

  return (
    <div>
      <Router>
        {!user ? (
          <Route path="/">
            <Login/>
          </Route>
        ):(
          <div className="app">
          <Sidebar/>
          <div className="app__body">
            <Navbar/>           
            <Switch>
              <Route path="/users">
                <Users/>
              </Route>
              <Route exact path="/">
                <Home/>
              </Route>
            </Switch>
          </div>
          </div>
        )}
      </Router>
    </div>
  );
}

export default App;
