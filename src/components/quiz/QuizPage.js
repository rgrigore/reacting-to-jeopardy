import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

const QuizPage = props => {

	const [clue, setClue] = useState({
		"id": null,
		"answer": "",
		"question": "",
		"value": null,
		"airdate": "",
		"created_at": "",
		"updated_at": "",
		"category_id": null,
		"game_id": null,
		"invalid_count": null,
		"category": {
			"id": null,
			"title": "",
			"created_at": "",
			"updated_at": "",
			"clues_count": null
		}
	});
	const [next, setNext] = useState({
		get: () => {}
	})


	const randomClue = () => {
		const axios = require('axios').default;
		axios.get("http://jservice.io/api/random")
		.then(response => setClue(response.data[0]));
	}

	const categoryClue = useCallback(() => {
		const axios = require('axios').default;
		axios.get("http://jservice.io/api/clues", { params: { category: props.location.state.category } })
		.then(response => {
			const index = Math.floor(Math.random() * response.data.length);
			setClue(response.data[index]);
		});
	}, [props.location.state])

	useEffect(() => {
		const state = props.location.state;

		if (state != null && state.category != null) {
			console.log("Category: " + props.location.state.category);
			setNext({
				get: categoryClue
			});
		} else {
			console.log("random");
			setNext({
				get: randomClue
			});
		}
	}, [categoryClue, props.location.state]);

	useEffect(() => {
		next.get();
	}, [next])

	return (
		<div className="container-lg" style={{ backgroundColor: "slategrey" }}>
			<div className="container" style={{ backgroundColor: "lightgrey", maxWidth: "900px" }}>
				{ clue.id }<br />
				<button onClick={ next.get }>Next</button>
			</div>
		</div>
	)
}

QuizPage.propTypes = {
	category: PropTypes.number
}

export default QuizPage
