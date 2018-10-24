import React, { Component } from 'react';
import ReactDom from 'react-dom';

class ContactList extends Component {
	render() {
		const people = [
		{ name: "Tyler"},
		{ name: "Caro"},
		{ name: "Leo"}
		]
	}
	
	const element = <ol>{people.map((person) => (
		<li key= {people.name}>{people.name}</li>
	))}</ol>
}

ReactDom.render(
	element,
	getElementById('root')
)