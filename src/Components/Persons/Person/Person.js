import React, {Component, Fragment} from 'react';
import './Person.css';
import Aux from '../../../hoc/Auxillary';

class Person extends Component {
	render() {
		console.log('Person.js rendering...');
	return (
		<Aux>
		<div className = "Person">
			<p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old!!! </p>
			<input type="text" onChange={this.props.changed} value={this.props.name}/>
		</div>
		</Aux>
	);
	}
}


export default Person;