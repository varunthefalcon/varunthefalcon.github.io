import React, { Component } from 'react';
import Splaceholder from '../assets/media/S.png';
import Wplaceholder from '../assets/media/W.png';
import Oplaceholder from '../assets/media/O.png';
import Tplaceholder from '../assets/media/T.png';

class Swot extends Component {

  render() {
    return (
      <div className="Right_swot">
            <div className="row">
            <div className="col s6">

            <div className=" hoverable card small">
            <div className="card-image waves-effect waves-block waves-light">
              <img  className="activator" src={Splaceholder} alt="" />
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">Strength<i className="right">x</i></span>
              <li>My Creativity</li>
              <li>Ability to grasp new concepts</li>
              <li>Strong communication skill</li>
              <li>Collaborate well with Teams</li>
            </div>
          </div>
                  
            </div>
            <div className="col s6">

            <div className=" hoverable card small">
            <div className="card-image waves-effect waves-block waves-light">
              <img  className="activator" src={Wplaceholder} alt="" />
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">Weakness<i className="right">x</i></span>
              <li>Little procastinative</li>              
              <li>Obsessed for perfection</li>

            </div>
          </div>


            </div>
        </div>
        <div className="row">
                <div className="col s6">
                <div className=" hoverable card small">
            <div className="card-image waves-effect waves-block waves-light">
              <img  className="activator" src={Oplaceholder} alt="" />
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">Opportunity<i className="right">x</i></span>
                  <li>Interest towards new technologies</li>
                  <li>Strong logical and analytical skills</li>
                  <li>Good mathematical and problem solving skills</li>
                  <li> flexible to any work environment </li>
              </div>
          </div>

                </div>
                <div className="col s6">
                <div className=" hoverable card small">
            <div className="card-image waves-effect waves-block waves-light">
              <img  className="activator" src={Tplaceholder} alt="" />
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">Threat<i className="right">x</i></span>
                <li>lastminute approach</li>            
                <li>procastinativeness</li>
            </div>
          </div>

                </div>
            </div>
      </div>
    );
  }
}

export default Swot;
