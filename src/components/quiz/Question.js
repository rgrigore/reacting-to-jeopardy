import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Answer from './answer/Answer';
import AnswerValidator from './answer/AnswerValidator';

const Question = props => {

	const [userAnswer, setUserAnswer] = useState("");
	const [hidden, setHidden] = useState(true);

	const handleAnswer = ev => {
		const element = document.getElementById("answer-field");
		setUserAnswer(element.value);
		element.value = "";
		setHidden(false);
		setTimeout(() => {
			props.nextQuestion();
		}, 3000);
	}

	useEffect(() => {
		if (props.changeQuestion) {
			setHidden(true);
		}
	}, [props.changeQuestion])

	return (
		<div>
			<div className="w-75 mx-auto bg-light rounded-3 d-flex justify-content-center" style={{ minHeight: "150px" }}>
				<div className="my-auto w-75 text-center">{ props.clue.question }</div>
			</div>
			<div className="w-50 mx-auto mt-3" hidden={ !hidden }>
				<Answer answer={ handleAnswer } />
			</div>
			<div className="w-75 mx-auto mt-3" hidden={ hidden }>
				<AnswerValidator
					answers={{ user: userAnswer, correct:props.clue.answer }}
					incrementCorrect={ props.incrementCorrect }
					incrementWrong={ props.incrementWrong }
					check={ !hidden }
				/>
			</div>
		</div>
	)
}

Question.propTypes = {
	clue: PropTypes.object.isRequired,
	// counters: PropTypes.object.isRequired
	incrementCorrect: PropTypes.func.isRequired,
	incrementWrong: PropTypes.func.isRequired,
	changeQuestion: PropTypes.bool.isRequired,
	nextQuestion: PropTypes.func.isRequired
}

export default Question;
