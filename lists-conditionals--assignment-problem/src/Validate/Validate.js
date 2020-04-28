import React, { Component } from 'react';

const validate = (props) => {
	let validationMessage = "Text long enough";
	
	if(props.length <= 5) {
		validationMessage = "Text too short!";
	}
	return (
		<div>
		<p>
		{validationMessage}
		</p>
		</div>
	);

};

export default validate