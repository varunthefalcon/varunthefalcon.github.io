import React, { Component } from 'react';
import Typed from 'react-typed';

class Right extends Component {
  varuns = [
    'Varun the Falcon',
    'Varun the idiot',
    'Varun the stupid',
    'Varun the lskdjf;k',
    'Varun the looser'
  ];
  varuns = [
    ' the Falcon',
    ' the idiot',
    ' the stupid',
    ' the lskdjf;k',
    ' the looser'
  ];
  
  render() {
    return (
      <div className="Right">
        <div className ="center-align">
        <h1> 
        <Typed 
                strings={this.varuns}
                    typeSpeed={70}
                    backSpeed={50} 
                    loop >
        </Typed> 
        ...
        </h1>
        <hr />
      </div>
      </div>
    );
  }
}

export default Right;
