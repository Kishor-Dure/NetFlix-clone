import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import {auth} from './firebase';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ProfileScreen from './Screens/ProfileScreen';
import {useDispatch, useSelector} from 'react-redux';
import {logout, login, selectUser} from './features/userSlice';

function App() {
const user = useSelector(selectUser);
 const dispatch = useDispatch();

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }));
      } else {
        dispatch(logout());
      }
    });
      return unsubscribe;
  },[dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
            <LoginScreen />
          ): (
            <Switch>
              <Route path='/profile'>
                <ProfileScreen />
              </Route>
              <Route path="/">
              <HomeScreen />
              </Route>  
            </Switch>
      )}
      </Router> 
    </div>
  );
}

export default App;
