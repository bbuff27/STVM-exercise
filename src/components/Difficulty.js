import React, { PureComponent } from 'react';

class Difficulty extends PureComponent {
	render() {
		const {
			difficulty: { description, letters },
			handleRadioSelect
		} = this.props;
		const lowerCaseDescription = description.toLowerCase();
		return (
			<div onChange={handleRadioSelect}>
				<input type="radio" value={lowerCaseDescription} />
				<label htmlFor={lowerCaseDescription}>
					{letters}({description})
				</label>
				<br />
			</div>
		);
	}
}

export default Difficulty;
