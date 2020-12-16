import React from 'react';
import PropTypes from 'prop-types';
import Answer from './Answer';

const Question = props => {

	const handleAnswer = ev => {
		const value = ev.target.parentElement.previousSibling.value;
		console.log(value); // TODO Pass this to AnswerValidator
	}

	return (
		<div>
			<div className="w-75 mx-auto bg-light rounded-3 d-flex justify-content-center" style={{ minHeight: "150px" }}>
				<div className="my-auto w-75 text-center">{ props.clue.question }</div>
			</div>
			<div className="w-50 mx-auto mt-3">
				<Answer answer={ handleAnswer } />
			</div>
			<div className="w-75 mx-auto mt-3">{/* TODO Move this to AnswerValidator */}
				<div className="text-center">placeholder for answer feedback</div>
			</div>
		</div>
	)
}

Question.propTypes = {
	clue: PropTypes.object.isRequired
}

export default Question;
