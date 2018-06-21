import React, { Component } from 'react';
// import varunLogo from '../assets/media/varunLogo.jpg';
import varunLogo from '../assets/logo.svg';
import FontAwesome from "react-fontawesome";
import { Link } from 'react-router-dom'

class Left extends Component {
  render() {
    return (
      <div className="center-align falconLeft">
        <div className= "falconLeftContent">
        <p> dont wanna scare with my dp </p>
            <img className="falconLogo circle" src={varunLogo } alt="" />
            <div link="white" className= "falconLeftCareerContent ">
             <h4><Link to="/timeline">My Timeline</Link></h4>
              <h4><Link to="/hobbies">Hobbies</Link></h4>
              <h4><Link to="/swot">S.W.O.T</Link></h4>
            </div>
            <div >
            <a href="/"><FontAwesome  className="socialMedia" name='google-plus-square' size='2x'/> </a>
            <a href="/"><FontAwesome  className="socialMedia" name='github-square' size='2x'/> </a>
            <a href="/"><FontAwesome  className="socialMedia" name='linkedin-square' size='2x'/> </a>
            <a href="/"><FontAwesome  className="socialMedia" name='facebook-square' size='2x'/> </a>
            </div>
            </div>
      </div>
    );
  }
}

export default Left;
