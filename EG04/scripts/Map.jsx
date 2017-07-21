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
			
		</div>
		);
	}

	componentDidMount(){this.componentDidUpdate();}
	componentDidUpdate(){
		var maps = new GMaps({el:"#map",lat:(this.props.lat),lng:(this.props.lng)});
		
		
		
	}
	addMapsMarker(){
		this.setState ({markerDetails:{lat: 53.475774, lng: -2.286531, title: 'Roundabout'}});
		
	}
}