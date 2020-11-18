import React, { Component } from 'react';
import varunLogo from '../assets/media/sasuke.jpg';
import FontAwesome from "react-fontawesome";
import { Link } from 'react-router-dom'

// const googleplus = "https://plus.google.com/+VarunSFalcon";
const github = "https://github.com/varunthefalcon";
const linkedin = "https://www.linkedin.com/in/varun-thefalcon";
// const facebook = "https://www.facebook.com/varunthefalcon";

class Left extends Component {

  handlesurprise = () => {
    alert("Thank you for visiting !!!!");
  }

  render() {
    return (
      <div className="center-align falconLeft">
        <div className= "falconLeftContent">
            <img className="falconLogo hoverable circle" src={varunLogo } alt="" />
            <div link="white" className= "falconLeftCareerContent ">
             <h4  className="links"><Link style={{color:"#fff"}}  to="/timeline">My Timeline</Link></h4>
              <h4 className="links" ><Link style={{color:"#fff"}} to="/project">Projects</Link></h4>
            </div>
            <div >
            <a target = "__blank" href={github} ><FontAwesome  className="socialMedia links " name='github-square' size='2x'/> </a>
            <a target = "__blank" href={linkedin} ><FontAwesome  className="socialMedia links " name='linkedin-square' size='2x'/> </a>
            <a onClick ={ this.handlesurprise } ><FontAwesome  className="socialMedia links" name='address-book' size='2x'/> </a>
            </div>
            </div>
      </div>
    );
  }
}

export default Left;
