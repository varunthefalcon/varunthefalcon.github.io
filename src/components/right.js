import React, { Component } from 'react';
import Typed from 'react-typed';
import { Switch, Route } from "react-router-dom";
import Swot from "./swot";
import Timeline from "./timeline";

const Main = () => (
  <Switch>
  <Route exact path='/swot' component={Swot}/>
  <Route exact path='/timeline' component={Timeline}/>
  </Switch>
);

const varuns = [
  'Varun the Falcon',
  'Varun the foodie',
  'Varun the idiot',
  'Varun the cyclist',
  'Varun the noobie',
  'Varun the animer lover',
  'Varun the procastinator',
  'Varun the beer lover',
  'Varun is just Varun '
];

class Right extends Component {

  render() {
    return (
      <div className="falconRight">
        <div className ="falconRightTop center-align">
        <h1> 
        <Typed 
                strings={varuns}
                    typeSpeed={70}
                    backSpeed={50} 
                    loop >
        </Typed> 
        ...
        </h1>
        <hr />
      </div>
      <div className="falconRightBottom">
        <Main/>
      </div>
      </div>
    );
  }
}

export default Right;
