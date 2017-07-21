import React from 'react';
import ReactDOM from 'react-dom';

export default class PatternButton extends React.Component {
	
		constructor(props){
		super(props);

				
		}
		
		
	
			
		render(){
			var isActiveButton = "";
			
			
			if (this.props.buttonLit == "true")
			{ isActiveButton = "_active"}
			var butID = 'button_' + this.props.buttonNumber + isActiveButton;
			
			return(
			<div>
			<div className='button' id={butID}>
			<p>Button: {this.props.buttonNumber}</p>
			<p>{this.props.buttonLit}</p>
			</div>
			</div>
			);
			
			
		}
		

	
	
	
}