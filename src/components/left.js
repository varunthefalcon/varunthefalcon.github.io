import React, { Component } from 'react';
import varunLogo from '../assets/media/varunLogo.jpg';
// import varunLogo from '../assets/logo.svg';
import FontAwesome from "react-fontawesome";

class Left extends Component {
  render() {
    return (
      <div className="center-align falconLeft">
        <div className= "falconLeftContent">
            <img className="falconLogo circle" src={varunLogo } alt="" />
            <div className= "falconLeftCareerContent ">
              <h4>Profession</h4>
              <h4>Friends</h4>
              <h4>Hobbies</h4>
            </div>
            <div >
            <FontAwesome  className="socialMedia" name='google-plus-square' size='2x'/> 
            <FontAwesome  className="socialMedia" name='github-square' size='2x'/> 
            <FontAwesome  className="socialMedia" name='linkedin-square' size='2x'/> 
            <FontAwesome  className="socialMedia" name='facebook-square' size='2x'/> 
            </div>
            </div>
      </div>
    );
  }
}

export default Left;
