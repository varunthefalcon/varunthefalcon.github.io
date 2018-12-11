import React, { Component } from 'react';
import '../node_modules/materialize-css/dist/css/materialize.css';
import '../node_modules/materialize-css/dist/js/materialize.js';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Left from "./components/left";
import Right from "./components/right";
import Todo from "./extendedProjects/sambar/todo";
import Recipe from "./extendedProjects/nugget/";
import Choco from "./extendedProjects/choco";
import { Switch, Route } from "react-router-dom";
import './assets/css/App.css';

const main = () => {
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

class App extends Component {
  componentDidMount(){
    console.log("Full Source code is in my Portfolio repository");
  }
  render() {
    return (
      <Switch>
  <Route exact path={process.env.PUBLIC_URL +'/sambar'} component={Todo}/>
  <Route exact path={process.env.PUBLIC_URL +'/nuggets'} component={Recipe}/>
  <Route exact path={process.env.PUBLIC_URL +'/choco'} component={Choco}/>
  <Route path={process.env.PUBLIC_URL + "/"} component={main}/>
  </Switch>
    );
  }
}

export default App;
