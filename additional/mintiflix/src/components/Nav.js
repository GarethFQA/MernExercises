import React, { Component } from 'react';
import { Link } from 'react-router';
import { login, logout, isLoggedIn } from '../utils/AuthService';
import '../App.css';

export default class Nav extends React.Component {
	render(){
		return (
		<div className="nav_bar">
		<div className="nav_name">
		<Link to="/" className="nav_name_logo">Mintiflix</Link>
		</div>
		<div className="nav_main">
		<Link to="/" className="nav_main_link">All Videos</Link>
		{
		( isLoggedIn() ) ? <Link to="/upload" className="nav_main_link">Upload Video</Link> : ''
		}
		
		</div>
		<div className="nav_right">
		{
		(isLoggedIn()) ? ( <button className="btn btn-danger log" onClick={() => logout()}>Log out </button> ) : ( <button className="btn btn-info log" onClick={() => login()}>Log In</button> )
		}
		</div>
		</div>
		
		);	
		
	}
}