import React, { Component } from 'react';
import mimo from '../assets/media/mimo.png';
import portfolio from '../assets/media/project3.png';
import atm from '../assets/media/atm.png';
import arduino from '../assets/media/arduino.png';
import $ from 'jquery'; 

class Project extends Component {

  componentDidMount() {
    
    $(document).ready(function(){
      $('.collapsible').collapsible();
    });
}

  render() {

    return (
      <div className="falconRight">
        <div className ="falconRightTop  ">
        <ul className="collapsible">
        <li>
        <div className="collapsible-header"> Final year Project<span className="badge">2016</span></div>
        <div className="collapsible-body">
        <div className="row">
        <div className="col s4">
        <div>
        <img className="projectImage hoverable" src={mimo} alt="" />
        </div>
        </div>
        <div className="col s8">
        <div>
<span>
The aim of our project is to increase the network parameters of the LTE
systems using Massive MIMO technology. MIMO uses more number anten-
nas that provides better throughput.By having more number of antennas,for
example higher than 8 antennas in both sides will lead to massive MIMO sys-
tem.By increasing the number of antennas to 32x32 or more may provide more
throughput to achieve better 4G.
</span>                 
<div>
<br/><b>Softwares : </b><span>MatLab</span>
</div>  
<div>
<br/><b>tl;dr : </b><span>Just abstract of project</span>
</div>     
</div>
        </div>
        </div>
        </div>
      </li>


      <li>
      <div className="collapsible-header active"> Automated Tile Placing Machine​<span className="badge">2015</span></div>
      <div className="collapsible-body">
      <div className="row">
      <div className="col s4">
      <div>
      <a target="__blank" href="https://youtu.be/MvbP5nATXR4"><img className="projectImage hoverable" src={atm} alt="" /></a>
      </div>
      </div>
      <div className="col s8">
      <div>
<span>
This project aims to mnimize the time and work power required in laying tiles in the construction industry. This model is inspired from the dot printers and modelled in Maya 3D software. It is a fully automated mechanism where the only manual work for the workers will be to load tiles and concrete.
</span><div>
<br/><b>Softwares : </b><span>Autodesk Maya</span>
</div>  
<div>
<br/><b>tl;dr : </b><span>Just came as an idea and modelled, didnt go any other phase. Dropped</span>
        </div>     
</div>
      </div>
      </div>
      </div>
    </li>
    <li>
          <div className="collapsible-header "> Arduino Projects​<span className="badge">2014</span></div>
          <div className="collapsible-body">
          <div className="row">
          <div className="col s4">
          <div>
          <a target="__blank" href="https://youtu.be/yy7_7NTUhwI"><img className="projectImage hoverable" src={arduino} alt="" /></a>
          </div>
          </div>
          <div className="col s8">
          <div>
<span>
Arduino is the first time we got exposed to coding in a fun way. We tried small DIY like <b>Line follower, Accident Alert System, GPRS-Burglar alarm</b>. Everything was a mini project kind of played around with Arduino and learnt basics of coding.
</span>                 
<div>
<br/><b>Softwares : </b><span>Arduino</span>
</div>
<div>
            <br/><b>tl;dr : </b><span>Just abstract of project</span>
            </div>     
</div>
          </div>
          </div>
          </div>
        </li>
        <li>
            <div className="collapsible-header "> My Portfolio<span className="badge">2017</span></div>          
              <div className="collapsible-body">
              <div className="row">
              <div className="col s4">
              <div>
              <a target="__blank" href="/sambar"><img className="projectImage hoverable" src={portfolio} alt="" /></a>
              </div>
              </div>
              <div className="col s8">
              <div>
    <span>
    Arduino is the first time we got exposed to coding in a fun way. We tried small DIY like <b>Line follower, Accident Alert System, GPRS-Burglar alarm</b>. Everything was a mini project kind of played around with Arduino and learnt basics of coding.
    </span>                 
    <div>
    <br/><b>Softwares : </b><span>Arduino</span>
    </div>
    <div>
                <br/><b>tl;dr : </b><span>Just abstract of project</span>
                </div>     
    </div>
              </div>
              </div>
              </div>
            </li>
      </ul>
            
      </div>
      </div>
    );
  }
}

export default Project;
