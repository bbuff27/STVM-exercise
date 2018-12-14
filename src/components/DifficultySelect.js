import React, { PureComponent } from 'react';
import Difficulty from './Difficulty';
import '../styles/DifficultySelect.css';

class DifficultySelect extends PureComponent {
	render() {
		const { allDifficulties } = this.props;
		return (
			<section className="difficulty-select">
				{allDifficulties.map(difficulty => (
					<Difficulty difficulty={difficulty} />
				))}
				<button type="button" onClick={this.handleDisplay}>
					Flash
				</button>
			</section>
		);
	}
}

export default DifficultySelect;
