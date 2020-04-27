import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
	const [message, setMessage] = useState(
		{name: ["aishu", "arun", "sharann"],
		 age: [22,27,19]
		}
	);
	let persons = [];
	for(let i=0; i<message.name.length; i++) {
		let element = <Person name={message.name[i]} age={message.age[i]}/>
		persons.push(element);
	}
	const buttonHandler = () => {
		setMessage(
			{name: ["aishwarya", "arunkumar", "shivsharann"],
		 	age: [22,27,19]
			}
		);
	}
	return (
	    <div className="App">
	     <h1>Hi, I'm react App</h1>
	     <button onClick = {buttonHandler}>Switch Name </button>
	     	{persons}
	    </div>
	    //React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Did I get it right?'), React.createElement('h2', null, 'YES! I did!!'))
	  );
}

export default App;
