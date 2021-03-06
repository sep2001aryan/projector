import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import MobileNav from './Components/MobileNav';
import Login from './Components/Login';
import Register from './Components/Register';
import { Switch, Route } from 'react-router-dom';
import Events from './Components/Events';
import Home from './Components/Home';
import { SuspenseWithPerf } from 'reactfire';
import ResetPassword from './Components/ResetPassword';



function App() {
    return (
        <React.Fragment>
        <Navbar />
        <MobileNav />
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/resetpassword">
              <ResetPassword />
            </Route>
            <Route path="/aboutus">
              <h1>About</h1>
            </Route>
            <Route path="/events">
              <Events />
            </Route>
            <Route path="/login">
              <SuspenseWithPerf fallback={<p>please Wait...</p>} traceId={'Logging In'}>
                <Login />
              </SuspenseWithPerf>
            </Route>
            <Route path="/register">
              <Register />
            </Route>
             <Route path="/contact">
              <h1>Contact us</h1>
            </Route>
            <Route path="/termsandconditions">
              <h1>Terms and conditions</h1>
            </Route>
          </Switch>
      </React.Fragment>
    );
}

export default App;