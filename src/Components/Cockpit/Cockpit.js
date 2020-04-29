import React from 'react';
import './Cockpit.css'

const cockpit = (props) => {
	
	return (
		<div>
		<h1>{props.title}</h1>
	     <button id="toggle" 
	     	onClick={props.clicked}>Toggle Persons 
	     </button>
	    </div>
	);	

}

export default cockpit;