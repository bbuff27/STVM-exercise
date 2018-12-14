import React, { PureComponent } from 'react';

class Difficulty extends PureComponent {
	render() {
		const {
			difficulty: { description, letters },
			activeDifficulty,
			setActiveDifficulty
		} = this.props;
		const lowerCaseDescription = description.toLowerCase();
		return (
			<React.Fragment>
				<input
					type="radio"
					value={lowerCaseDescription}
					checked={description.toLowerCase() === activeDifficulty}
					onClick={setActiveDifficulty}
				/>
				<label htmlFor={lowerCaseDescription}>
					{letters}({description})
				</label>
				<br />
			</React.Fragment>
		);
	}
}

export default Difficulty;
