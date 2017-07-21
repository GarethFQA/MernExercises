import { Component } from 'react';
import { setIdToken, setAccessToken } from '../utils/AuthService';

class Callback extends Component {
	
	componentDidMount() {
		console.log('itsa me, callbackrio');
		setAccessToken();
		setIdToken();
		window.location.href = "/";		
	}
	
	render() {
		return null;
	}
}

export default Callback;