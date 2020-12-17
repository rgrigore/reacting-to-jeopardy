import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

const AnswerValidator = props => {

	const validate = useCallback(() => {
		const correctWords = props.answers.correct.split(" ");
		const userWords = props.answers.user.split(" ");
		
		for (const word of correctWords) {
			let found = false;

			for (const word2 of userWords) {
				if (word === word2) {
					found = true;
					break;
				}
			}

			if (!found) {
				return false;
			}
		}

		return true;
	}, [props.answers]);

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
		);
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
