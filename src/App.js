import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './components/HomescreenComponent/HomeScreen';
import Login from './components/LoginComponent/Login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';


function App() {

  const user = null;
  // const user = useSelector(selectUser);
  const dispatch = useDispatch();
  console.log(useSelector(selectUser));

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth) {
        console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email
          })
        )
      } else {
        //Logged off
        dispatch(logout);
      }
    });
    return unsubscribe;
  },[]);


  return (
    <div className="app">

   
      <Router>

        {!user ? (
          <Login />

        ) : (
          <Switch>
            <Route exact path="/">
                {/*Home Screen*/}
                <HomeScreen />
            </Route>
          </Switch>
        )
        
        
        }

    

      </Router>
    </div>
  );
}

export default App;
