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
		const { value: difficulty } = e.target;
		const { activeDifficulty } = this.state;
		if (difficulty !== activeDifficulty) {
			this.setState({ activeDifficulty: difficulty });
		}
		return null;
	};

	handleShowLetters = () => {
		this.setState({ displayLetters: true });
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
