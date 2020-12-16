import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const AnswerValidator = props => {

	const [message, setMessage] = useState("");
	const [background, setBackground] = useState("");

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

	useEffect(() => {
		if (props.check) {
			if (validate()) {
				props.counters.incrementCorrect();
				setMessage("Correct answer!");
				setBackground("alert-success");
			} else {
				props.counters.incrementWrong();
				setMessage("Answer: " + props.answers.correct);
				setBackground("alert-danger");
			}
		}
	}, [props.answers.correct, props.check, props.counters, validate])
	
	return (
		<div className={ "text-center alert " + background } role="alert">
			{ message }
		</div>
	)
}

AnswerValidator.propTypes = {
	answers: PropTypes.object.isRequired,
	counters: PropTypes.object.isRequired,
	check: PropTypes.bool.isRequired
}

export default AnswerValidator
