import React, { Component } from 'react';
import './App.css';
import Grid from './components/Grid.js';
import DifficultySelect from './components/DifficultySelect.js';

class App extends Component {
	constructor() {
		super();
		this.state = {
			displayLetters: false,
			activeDifficulty: null
		};
	}

	setActiveDifficulty = e => {
		console.log(e.target);
		// //TODO: Will have to make sure this variable is valid when completing input
		// const selectedDifficulty = e.input.id;
		// this.setState({ activeDifficulty: selectedDifficulty });
	};

	render() {
		const { displayLetters, activeDifficulty } = this.state;
		const allDifficulties = [
			{ description: 'Baby', letters: 'S' },
			{ description: 'Easy', letters: 'S/T' },
			{ description: 'Intermediate', letters: 'S/T/U' },
			{ description: 'Hard', letters: 'S/T/U/X' },
			{ description: 'Expert', letters: 'S/T/U/X/L' }
		];
		return (
			<div className="App">
				<Grid displayLetters={displayLetters} />
				<DifficultySelect
					setActiveDifficulty={this.setActiveDifficulty}
					activeDifficulty={activeDifficulty}
					allDifficulties={allDifficulties}
				/>
			</div>
		);
	}
}

export default App;
