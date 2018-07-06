import React, { Component } from 'react';
import 'react-vertical-timeline-component/style.min.css';

class Timeline extends Component {
  render() {
    return (
      <div className="falconTimeline">
<div className="timeline">
<div className="entry">
  <div className="title">
    <h3>1995 - 2008</h3>
  </div>
  <div className="body">
    <p>Usual Life ;-)</p>
    <ul>
      <li>Born on 23'rd July 1995</li>
      <li>As a kid dreamt of being a teacher and painter</li>
      <li>Can't remember much (-__-)</li>
    </ul>
  </div>
</div>
<div className="entry">
  <div className="title">
    <h3>2009 - 2010</h3>
  </div>
  <div className="body">
    <p>School life</p>
    <ul>
      <li>Studied at John Dewey Matriculation Higher secondary school, villupuram</li>
      <li>Got 442/500 in SSLC</li>
      <li>Got 2nd place in District level Yoga Competition</li>
    </ul>
  </div>
</div>
<div className="entry">
  <div className="title">
    <h3>2010 - 2012</h3>
  </div>
  <div className="body">
    <p>High School life</p>
    <ul>
      <li>Studied at A.K.T Academy Matriculation Higher secondary school, kallakurichi</li>
      <li>Got 1054/1200 and 182.25 Engineering Aggregate</li>
      <li>Got 4 th place in State level Yoga Competition</li>
    </ul>
  </div>
</div>
<div className="entry">
  <div className="title">
    <h3>2012 - 2016</h3>
  </div>
  <div className="body">
    <p>College life</p>
    <ul>
      <li>Studied ECE at Anand Institute of Higher Technology, Chennai</li>
      <li>Got CGPA of 6.2* </li>
      <li>Final Year project is on Analysing MIMO Antennas for various modulations</li>
      <li>Few mini projects on home automation, Accident alert system,  burglar alarm, line follower using Arduino(coding was fun)</li>
      <li>Started lastminutebooks.in for leveraging the availability of used books from seniors to juniors(Didnt work out (-__-) )</li>
      <li>Got 2nd place in interCollege Chess Competition and represented my college in IntraCollege competitions</li>
    </ul>
  </div>
</div>

<div className="entry">
  <div className="title">
    <h3>2016 - Present</h3>
  </div>
  <div className="body">
    <p>Work life</p>
    <ul>
      <li>Worked as Technical consultant in Sutherland Global Services in 2016</li>
      <li>Worked as Application Developer (Magento ReactJs) in Contus in 2017 - 2018.</li>
      <li>Completed 3 customisation projects in Magento and 1 ReactJs project, which expanded my programming horizons. </li>
      <li>Very much Interested and looking for opportunities in AR / VR related technologies </li>
      <li>Currently (self)studying 3D modelling(blender), Unity and A-frame(web).  </li>
    </ul>
  </div>
</div>

</div>

      </div>
    );
  }
}

export default Timeline;