import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import VarunLogo from '../assets/logo.svg';
import 'react-vertical-timeline-component/style.min.css';

class Timeline extends Component {
  render() {
    return (
      <div className="falconTimeline">
<div className="timeline">
<div className="entry">
  <div className="title">
    <h3>2014 - Present</h3>
    <p>Title, Company</p>
  </div>
  <div className="body">
    <p>Voluptatibus veniam ea reprehenderit atque reiciendis non laborum adipisci ipsa pariatur omnis.</p>
    <ul>
      <li>Rerum sit libero possimus amet excepturi</li>
      <li>Exercitationem enim dolores sunt praesentium dolorum praesentium</li>
      <li>Modi aut dolores dignissimos sequi sit ut aliquid molestias deserunt illo</li>
    </ul>
  </div>
</div>
<div className="entry">
  <div className="title">
    <h3>2010 - Present</h3>
    <p>Title, Company</p>
  </div>
  <div className="body">
    <p>Voluptatibus veniam ea reprehenderit atque reiciendis non laborum adipisci ipsa pariatur omnis.</p>
    <ul>
      <li>Rerum sit libero possimus amet excepturi</li>
      <li>Exercitationem enim dolores sunt praesentium dolorum praesentium</li>
      <li>Modi aut dolores dignissimos sequi sit ut aliquid molestias deserunt illo</li>
    </ul>
  </div>
</div>
<div className="entry">
  <div className="title">
    <h3>2009 - 2010</h3>
    <p>Title, Company</p>
  </div>
  <div className="body">
    <p>Voluptatibus veniam ea reprehenderit atque reiciendis non laborum adipisci ipsa pariatur omnis.</p>
    <ul>
      <li>Rerum sit libero possimus amet excepturi</li>
      <li>Exercitationem enim dolores sunt praesentium dolorum praesentium</li>
      <li>Modi aut dolores dignissimos sequi sit ut aliquid molestias deserunt illo</li>
    </ul>
  </div>
</div>
<div className="entry">
  <div className="title">
    <h3>2006 - 2008</h3>
    <p>Title, Company</p>
  </div>
  <div className="body">
    <p>Voluptatibus veniam ea reprehenderit atque reiciendis non laborum adipisci ipsa pariatur omnis.</p>
    <ul>
      <li>Rerum sit libero possimus amet excepturi</li>
      <li>Exercitationem enim dolores sunt praesentium dolorum praesentium</li>
      <li>Modi aut dolores dignissimos sequi sit ut aliquid molestias deserunt illo</li>
    </ul>
  </div>
</div>

</div>

      </div>
    );
  }
}

export default Timeline;