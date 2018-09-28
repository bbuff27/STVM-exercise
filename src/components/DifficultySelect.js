import React, { Component } from 'react';
import '../styles/DifficultySelect.css';

class DifficultySelect extends Component {
  render() {
    return (
      <section className="difficulty-select">
        <input type="radio" id="baby"/>
        <label htmlFor="easy">S(Baby)</label><br/>
        
        <input type="radio" id="easy"/>
        <label htmlFor="easy">S/T(Easy)</label><br/>
        
        <input type="radio" id="intermediate"/>
        <label htmlFor="easy">S/T/U(Intermediate)</label><br/>
        
        <input type="radio" id="hard"/>
        <label htmlFor="easy">S/T/U/X(Hard)</label><br/>
        
        <input type="radio" id="expert"/>
        <label htmlFor="easy">S/T/U/X/L(Expert)</label><br/>

        <button type="submit">Flash</button>
      </section>
    );
  }
}

export default DifficultySelect;