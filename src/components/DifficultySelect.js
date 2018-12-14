import React, { PureComponent } from 'react';
import Difficulty from './Difficulty';
import '../styles/DifficultySelect.css';

class DifficultySelect extends PureComponent {
	render() {
		const {
			allDifficulties,
			setActiveDifficulty,
			activeDifficulty
		} = this.props;
		return (
			<section className="difficulty-select">
				{allDifficulties.map(difficulty => (
					<Difficulty
						difficulty={difficulty}
						setActiveDifficulty={setActiveDifficulty}
						activeDifficulty={activeDifficulty}
						key={difficulty.description}
					/>
				))}
				<button type="button" onClick={this.handleDisplay}>
					Flash
				</button>
			</section>
		);
	}
}

export default DifficultySelect;
