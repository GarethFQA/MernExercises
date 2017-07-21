import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';

export default class Upload extends React.Component{
	
  uploadWidget = () => {
    window.cloudinary.openUploadWidget(
      { cloud_name: 'unicodeveloper',
        upload_preset: 'b9ej8dr5',
        tags: ['miniflix']
      },
      function(error, result) {
          console.log("This is the result of the last upload", result);
      });
  }
  
  render() {
	  
	  return (
	  
		<div>
			<Nav />
			<h3 className="text-center">UIpload Your 20-second Video in a Jiffy</h3>
			<hr />
			
			<div className="col-sm-12">
				<div className="jumbotron text-center">
					<button onClick={this.uploadWidget} className="btn btn-lg btn-info"> Upload Video</button>
				</div>
			</div>
		
		</div>
	  
	  
	  );
	  
	  
  }
	
}