import React from 'react';
import { Link } from 'react-router';

export default class FilmLinks extends React.Component {
	render(){
		return (
		<nav>
		<ul className="vertical medium-horizontal menu items">
			<li><Link to="/films/SW4" activeClassName="active">Star Wars: Episode IV - A New Hope</Link></li>
			<li><Link to="/films/SW5" activeClassName="active">Star Wars: Episode V - The Empire Strikes Back</Link></li>
			<li><Link to="/films/SW6" activeClassName="active">Star Wars: Episode VI - The Return of the Jedi</Link></li>
		</ul>	
		</nav>
		
		);	
		
	}
}

