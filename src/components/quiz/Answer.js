import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const Answer = props => {
	return (
		<div className="d-flex">
			<input id="answer-field" className="col-10 rounded-3 text-center" type="text" placeholder="Answer"></input>
			<Button variant="contained" color="primary" onClick={ props.answer }>Submit</Button>
		</div>
	)
}

Answer.propTypes = {
	answer: PropTypes.func.isRequired
}

export default Answer;
