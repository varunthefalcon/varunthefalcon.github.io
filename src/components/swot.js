import React, { Component } from 'react';
import placeholder from '../assets/media/office.jpg';

class Swot extends Component {

  render() {
    return (
      <div className="Right_swot">
            <div className="row">
            <div className="col s6">

            <div className="card small">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src={placeholder} />
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
              <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
          </div>
                  
            </div>
            <div className="col s6">

            <div className="card small">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src={placeholder} />
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
              <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
          </div>


            </div>
        </div>
        <div className="row">
                <div className="col s6">
                
                <div className="card small">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src={placeholder} />
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
              <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
          </div>

                </div>
                <div className="col s6">
                <div className="card small">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src={placeholder} />
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
              <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
          </div>

                </div>
            </div>
      </div>
    );
  }
}

export default Swot;
