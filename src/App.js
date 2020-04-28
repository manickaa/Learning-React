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

	changeNameHandler = (event) => {
		this.setState( {
			persons : [
		{ name: 'Aish', age: 23},
		{ name: event.target.value, age:26}
		]
		} )
	}

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState( { 
			showPersons: !doesShow
		});
	}
	render() {
		const style = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer'
		};

		return (
	    <div className="App">
	     <h1>Hi, I'm react App</h1>
	     <button
	     	style={style} 
	     	onClick={this.togglePersonsHandler}>Toggle Persons </button>
	     	{ this.state.showPersons === true ?
	     	<div>
	     		<Person 
	     		name={this.state.persons[0].name} 
	     		age={this.state.persons[0].age}
	     		click={this.buttonHandler.bind(this, 'Manickaa')} />
	     		<Person 
	     		name={this.state.persons[1].name} 
	     		age={this.state.persons[1].age}
	     		changed={this.changeNameHandler} />
	     	</div> : null
	     }
	    </div>
	    //React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Did I get it right?'), React.createElement('h2', null, 'YES! I did!!'))
	  );
	}
}

export default App;
