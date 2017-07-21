import React from 'react';

export default class CurrentLocation extends React.Component {

	render(){
		return(
		<div className="col-xs-12 col-md-6 cold-md-offset-3 current-location">
		<h4 id="save-location">{this.props.address}</h4>
		
		
		</div>
		
		);
		
		
	}
	
}