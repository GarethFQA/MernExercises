import React from 'react';
import moment from 'moment';

export default class FavouriteItems extends React.Component{
	
	
	handleClick(e){
		this.props.onClick(this.props.address);
		
	}
	
	render(){
		
		let lgiClassName = "list-group-item";
		
		if(this.props.active == true){
			lgiClassName += " active-location";
		}
		
		return(
			<a className={lgiClassName} onClick={this.handleClick.bind(this)}>{this.props.address}
			<span className='createdAt' >{moment(this.props.timestamp).fromNow()}
			<span className='glyphicon glyphicon-menu-right'></span>
			</span>
			</a>
		);
		
	}
	
}