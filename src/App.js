import React, { Component } from 'react';
import './App.css';
import Grid from './components/Grid.js';
import DifficultySelect from './components/DifficultySelect.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      displayLetters: false,
      activeDifficulty: null,
    }
  }

  setActiveDifficulty(e) {
    e.preventDefault();
    //TODO: Will have to make sure this variable is valid when completing input
    const selectedDifficulty = e.input.id; 
    this.setState({ activeDifficulty: selectedDifficulty });
  }
  
  render() {
    return (
      <div className="App">
        <Grid displayLetters={this.state.displayLetters} />
        <DifficultySelect setActiveDifficulty={(e) => this.setActiveDifficulty(e)} activeDifficulty={this.state.activeDifficulty} />
      </div>
    );
  }
}

export default App;
