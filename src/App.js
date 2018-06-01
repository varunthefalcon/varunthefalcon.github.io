import React, { Component } from 'react';
import '../node_modules/materialize-css/dist/css/materialize.css';
import '../node_modules/materialize-css/dist/js/materialize.js';
import '../node_modules/font-awesome/css/font-awesome.min.css';
// import $ from 'jquery';
import Left from "./components/left";
import Right from "./components/right";

import './assets/css/App.css';

class App extends Component {
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

export default App;
