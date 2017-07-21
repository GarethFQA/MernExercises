import React from 'react';
import CurrentLocation from './CurrentLocation';
import Map from './Map';
import Search from './Search';
import FavouritesList from './FavouritesList';

export default class App extends React.Component {
	constructor(){
		super();
		var favourites = [];
		

	
		this.state ={
			currentAddress: 'QA Academy - Salford quays',
			mapCoordinates: 	{lat: 53.4744280,
								 lng:-2.2865340
						},
			favourites: favourites
		
		}
	}
	
	
searchForAddress(address) {

let self = this;

	GMaps.geocode({

	address: address,

	callback: function(results, status) {

		if(status !== 'OK') {

			self.setState({

				currentAddress : 'Location not found...'

			});

			return;

		}

		let latlng = results[0].geometry.location;

		self.setState({

			currentAddress: results[0].formatted_address,

			mapCoordinates: {

				lat: latlng.lat(),

				lng: latlng.lng()

			}

		});

	}

});

}


	
	render(){
		return(
		<div>
		<h1>Your Google Map Locations</h1>
		<Search onSearch={this.searchForAddress.bind(this)}/>
		<Map lat={this.state.mapCoordinates.lat} lng={this.state.mapCoordinates.lng} />
		<CurrentLocation address={this.state.currentAddress} favourite={this.isAddressInFavourites(this.state.currentAddress)} onFavouriteToggle={this.favouriteToggle.bind(this)}/>
		<FavouritesList favouriteLocations={this.state.favourites} activeLocationAddress={this.state.currentAddress} onClick={this.searchForAddress.bind(this)}/>
		</div>
		);		
		
	}
	
	isAddressInFavourites(currentAddress){
		let searchingFavourites = this.state.favourites;
		
		for (var i = 0; i < searchingFavourites.length; i++) {
			if (searchingFavourites[i].address == currentAddress){
				return true;			
			}
		}
		return false;
	}
		
		
	favouriteToggle(currentAddress){
		
		if(this.isAddressInFavourites(currentAddress) == true){
			this.removeFavourite(currentAddress);
		} else if (this.isAddressInFavourites(currentAddress) == false){
			this.addFavourite(currentAddress);
		}
		
	}
		
	removeFavourite(currentAddress)	{
		
		let removingFavourites = this.state.favourites;
		let favouriteIndex = -1;
		for (var i = 0; i < removingFavourites.length; i++) {
			if (removingFavourites[i].address == currentAddress){
				favouriteIndex = i;
				break;				
			}
		}
		if (favouriteIndex >= 0){
			
			removingFavourites.splice(favouriteIndex, 1);
		}
		this.setState ({favourites : removingFavourites});
		localStorage.favourites = JSON.stringify(removingFavourites);
		
	}
	
	addFavourite(currentAddress){
		let addingFavourites = this.state.favourites;
		addingFavourites.push({address: currentAddress, timestamp: Date.now()});
		
		this.setState ({favourites : addingFavourites});
		localStorage.favourites = JSON.stringify(addingFavourites);
		
	}
		
}