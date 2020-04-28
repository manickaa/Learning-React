import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons : [
		{ name: 'Aish', age: 23},
		{ name: 'Arun', age:26}
		],
		otherState: 'some other value',
		showPersons: false
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

	// changeNameHandler = (event) => {
	// 	this.setState( {
	// 		persons : [
	// 	{ name: 'Aish', age: 23},
	// 	{ name: event.target.value, age:26}
	// 	]
	// 	} )
	// }

	deletePersonHandler = (personIndex) => {
		const persons = this.state.persons;
		persons.splice(personIndex, 1)
		this.setState({persons:persons})

	}
	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState( { 
			showPersons: !doesShow
		})
	}
	render() {
		const style = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer'
		};

		let persons = null;

		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person,index) => {
						return <Person 
							name={person.name} 
							age={person.age} 
							click={() => this.deletePersonHandler(index)} />
					})}
	     	</div>	
			);
		}

		return (
	    <div className="App">
	     <h1>Hi, I'm react App</h1>
	     <button
	     	style={style} 
	     	onClick={this.togglePersonsHandler}>Toggle Persons 
	     </button>
	     {persons}
	    </div>
	    //React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Did I get it right?'), React.createElement('h2', null, 'YES! I did!!'))
	  );
	}
}

export default App;
