import React from 'react';
import {IndexLink, Link} from 'react-router';

export function MainNav() {
  return (
    <div className="top-bar-right" id="menu">
		<h6 className="hide">Site Navigation</h6>
		<ul className="vertical medium-horizontal menu">
			<li><IndexLink to="/" className="pageLink">Home</IndexLink></li>
			<li><Link to="/films" className="pageLink">Films</Link></li>
			<li><Link to="/actors" className="pageLink">Actors</Link></li>
		</ul>	
    </div>
  );
}