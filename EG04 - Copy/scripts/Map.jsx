import React from 'react';

export default class Map extends React.Component {

		constructor(props){
		super(props);
		this.state ={markerDetails: {}
				
		}
		}
	render(){
		return(
		<div className="map-overlay">
			<p>Loading...</p>
			<div id="map"></div>
			<button onClick={this.addMapsMarker.bind(this)}>Load Marker</button>
		</div>
		);
	}

	componentDidMount(){this.componentDidUpdate();}
	componentDidUpdate(){
		var maps = new GMaps({el:"#map",lat:(this.props.lat),lng:(this.props.lng)});
		maps.addMarker({lat: this.state.markerDetails.lat, lng: this.state.markerDetails.lng, title: this.state.markerDetails.title});
		
		
		
	}
	addMapsMarker(){
		this.setState ({markerDetails:{lat: 53.475774, lng: -2.286531, title: 'Roundabout'}});
		
	}
}