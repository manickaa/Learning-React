//Functional Component
import React, {Component} from 'react';

import Person from './Person/Person';


class Persons extends Component {
	// static getDerivedStateFromProps(props, state) {
	// 	console.log('Persons.js getDerivedStateFromProps');
	// 	return state;
	// }
	shouldComponentUpdate(nextProps, nextstate) {
		console.log('Persons.js shouldComponentUpdate');
		//here persons is array, which are reference types. So the pointers are compared here
		//refer https://academind.com/learn/javascript/reference-vs-primitive-values/
		if(nextProps.persons !== this.props.persons) {
			return true;
		} else {
			return false;
		}
	}
	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('Persons.js getSnapshotBeforeUpdate');
		return {message: 'SnapShot!'};
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('Persons.js componentDidUpdate');
		console.log(snapshot);
	}

	componentWillUnmount() {
		console.log('Persons.js componentWillUnmount');
	}
	render() {
		console.log('Persons.js rendering...');
		return this.props.persons.map((person,index) => {

		return (
			<Person 
				name={person.name} 
				age={person.age} 
				key={person.id}
				click={() => this.props.clicked(index)} 
				changed={(event) => this.props.changed(event, person.id)} />
			);
		});
	}
}

export default Persons;