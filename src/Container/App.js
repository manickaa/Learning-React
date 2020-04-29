import React, { Component } from 'react';
import './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
//import ErrorBoundary from '../Components/ErrorBoundary/ErrorBoundary';

class App extends Component {
	constructor(props) {
		super(props);
		console.log('[App.js] constructor');
	}

	state = {
		persons : [
		{ id: '1', name: 'Aish', age: 23},
		{ id: '2', name: 'Arun', age:26}
		],
		otherState: 'some other value',
		showPersons: false
	}

	static getDerivedStateFromProps(props, state) {
		console.log('[App.js] getDerivedStateFromProps', props);
		return state;
	}

	componentDidMount() {
		console.log('[App.js] componentDidMount');
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('App.js shouldComponentUpdate');
		return true;
	}

	componentDidUpdate() {
		console.log('App.js componentDidUpdate');
	}

	buttonHandler = (newName) => {
		//console.log("was clicked");
		this.setState( {
			persons : [
		{ name: newName, age: 23},
		{ name: 'Arunkumar', age:26}
		]
		} )
	}

	changeNameHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex(p => {
			return p.id === id; 
		});

		const person = {
			...this.state.persons[personIndex]
		};

		person.name = event.target.value;

		const persons = [...this.state.persons];
		persons[personIndex] = person;

		this.setState( {
			persons: persons
		} )
	}

	deletePersonHandler = (personIndex) => {
		//this is a bad practice, since the persons is just a pointer to the persons state
		//const persons = this.state.persons;
		const persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({persons:persons});

	}

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState( { 
			showPersons: !doesShow
		})
	}
	render() {
		
		console.log('[App.js] render');

		let persons = null;

		if (this.state.showPersons) {
			persons = 
				<Persons 
					persons={this.state.persons}
					clicked={this.deletePersonHandler}
					changed={this.changeNameHandler} />	;
		}

		return (
	    <div className="App">
	    	<Cockpit title={this.props.appTitle}
	    	clicked={this.togglePersonsHandler} /> 
	     	{persons}
	    </div>
	    //React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Did I get it right?'), React.createElement('h2', null, 'YES! I did!!'))
	  );
	}
}

export default App;

