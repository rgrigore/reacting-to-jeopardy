import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

const AnswerValidator = props => {

	const validate = useCallback(() => {
		const correctWords = props.answers.correct.replace(/<\/*[^>]+>/im, "").toLowerCase().split(" ");
		const userWords = props.answers.user.replace(/<\/*[^>]+>/im, "").toLowerCase().split(" ");
		
		let found = Array(correctWords.length).fill(false);
		for (let i = 0; i < correctWords.length; i++) {
			for (const word2 of userWords) {
				if (correctWords[i] === word2) {
					found[i] = true;
					break;
				}
			}
		}

		return found.every(v => v === true);
	}, [props.answers])

	if (props.check) {
		if (validate()) {
			// props.incrementCorrect();
			return (
				<div className="text-center alert alert-success" role="alert">
					Correct answer!
				</div>
			)
		} else {
			// props.incrementWrong();
			return (
				<div className="text-center alert alert-danger" role="alert">
					{ "Answer: " + props.answers.correct }
				</div>
			)
		}
	} else {
		return (
			<div className="text-center alert alert-danger" role="alert"></div>
		)
	}
}

AnswerValidator.propTypes = {
	answers: PropTypes.object.isRequired,
	// counters: PropTypes.object.isRequired,
	check: PropTypes.bool.isRequired,
	incrementCorrect: PropTypes.func.isRequired,
	incrementWrong: PropTypes.func.isRequired
}

export default AnswerValidator
