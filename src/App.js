import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from "./components/login/Login";
import Signup from "./components/signup/signup";
import Error from "./components/error/error";
import Navigation from "./components/navigation/navigation";
import Footer from "./components/footer/footer";

class App extends Component {

  render() {
    return (      
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/signup" component={Signup} />
            <Route component={Error} />  
          </Switch>

        </div>

      </BrowserRouter>

    );
  }
}

export default App;
