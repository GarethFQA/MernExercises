import React from 'react';
import ReactDOM from 'react-dom';
import PatternButton from './PatternButton';

export default class App extends React.Component {
	
		constructor(props){
		super(props);
		var gameOrder = [0];	
		var buttonState = ["false","false","false"];
			this.state ={
			gameOrder: gameOrder,
			buttonState: buttonState
		
		}
			
		}
		
		buildSequence(){
			this.addStage();
			this.playSequence();
			
		}
		addStage(){
			
			let newButton = Math.floor((Math.random() * 3));
			let newGameOrder = this.state.gameOrder;
			newGameOrder.push(newButton);
			this.setState({gameOrder: newGameOrder});
			
		}
		
		playSequence(){
			let currentButtons = this.state.buttonState;
			let timing = 2000;
			for (let i=0; i < this.state.gameOrder.length; i++)
			{
				
				setTimeout(this.changeButtonActive.bind(this, i), i*timing);
				setTimeout(this.changeButtonInactive.bind(this, i), (i+1)*timing);
					
			}
			
			
		}
		
		changeButtonActive(cycleNum){
			let currentButtons = this.state.buttonState;
			console.log('A THING' + cycleNum );
			currentButtons[this.state.gameOrder[cycleNum]] = "true";
			this.setState({buttonState: currentButtons});

		}
		
		changeButtonInactive(cycleNum){
			let currentButtons = this.state.buttonState;
			console.log('A THING' + cycleNum );
			currentButtons[this.state.gameOrder[cycleNum]] = "false";
			this.setState({buttonState: currentButtons});
		}
			
		render(){
			
			return(
			<div>	
				<PatternButton buttonNumber="1" buttonLit={this.state.buttonState[0]}/>
				<PatternButton buttonNumber="2" buttonLit={this.state.buttonState[1]}/>
				<PatternButton buttonNumber="3" buttonLit={this.state.buttonState[2]}/>
				<button onClick={this.playSequence.bind(this)}>FIRE!</button>
				<button onClick={this.buildSequence.bind(this)}>FIRE!</button>
			</div>
			);
			
			
		}
		

	
	
	
}