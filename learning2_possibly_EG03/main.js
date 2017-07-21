import React from 'react';

import ReactDOM from 'react-dom';

import {Header, Content} from './App';




	ReactDOM.render(
		<Header />, document.querySelector('header'));
		
	ReactDOM.render(
		<Content />, document.querySelector('#content'));