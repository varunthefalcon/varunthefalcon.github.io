import React, { Component } from 'react';
import '../node_modules/materialize-css/dist/css/materialize.css';
import '../node_modules/materialize-css/dist/js/materialize.js';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Left from "./components/left";
import Right from "./components/right";
import Todo from "./extendedProjects/sambar/todo";
import Recipe from "./extendedProjects/nugget/";
import { Switch, Route } from "react-router-dom";
import './assets/css/App.css';


const RouteSplitter = () => (
  <Switch>
  <Route exact path='/sambar' component={Todo}/>
  <Route exact path='/nuggets' component={Recipe}/>
  <Route path='/' component={Main}/>
  </Switch>
);

class Main extends Component {
  render() {
    return (
  <div className="row">
  <div className="col s4 falconLeft falconAnimatedGradient">
    <Left />
  </div>
  <div className="col s8">
    <Right />
  </div>
</div>
);
  }
}

class App extends Component {
  componentDidMount(){
    console.log("Full Source code is in my Portfolio repository");
  }
  render() {
    return (
      <RouteSplitter />
    );
  }
}

export default App;
