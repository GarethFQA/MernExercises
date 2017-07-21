import React from 'react';
import FavouriteItems from './FavouriteItems';

export default class FavouritesList extends React.Component {
		
  render(){
		let self = this;
		
		let favouriteLocations = this.props.favouriteLocations.map(function(location) {
	  let active = self.props.activeLocationAddress === location.address;

      return <FavouriteItems address={location.address} key={location.timestamp} timestamp={location.timestamp}
          active={active} onClick={self.props.onClick.bind(this)} />;
    });
	
	if(!favouriteLocations.length)
	{
		return null;
	}
		return (
		<div className='list-group col-xs-12 col-md-6 col-md-offset-3'>
		<span className='list-group-item active'>Saved Locations</span>
		{favouriteLocations}
		
		</div>
		);
	}
}