import React from 'react';

export default class CurrentLocation extends React.Component {

	render(){
		var storeClassName = "";
		if (this.props.address != "Location not found")
		{
			if(this.props.favourite == true)
			{
				storeClassName = "glyphicon glyphicon-star";
			}else if(this.props.favourite == false) {
				storeClassName = "glyphicon glyphicon-star-empty";
			}
		}
		return(
		<div className="col-xs-12 col-md-6 col-md-offset-3 current-location">
		<h4 id="save-location">
		<span className={storeClassName} onClick={this.toggleFavourite.bind(this)} aria-hidden='true'></span>
		{this.props.address}</h4>
		
		
		</div>
		
		);
		
		
	}
	
	toggleFavourite(){
		
		this.props.onFavouriteToggle(this.props.address);
	}
	
}