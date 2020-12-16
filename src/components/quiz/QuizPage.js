import React, { useState, useEffect, useCallback } from 'react';

import Question from './Question';

import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

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

	const skipButton = () => {
		// TODO Register strike
		next.get();
	}

	const invalidButton = () => {
		const axios = require('axios').default;
		axios.post(`http://jservice.io/api/invalid?id=${ clue.id }`);
		next.get();
	}

	const quitButton = () => {
		// TODO Go back to HomePage
	}

	return (
		<div className="container" style={{ backgroundColor: "lightgrey", maxWidth: "900px" }}>
			<div className="row">
				<Question clue={ clue } />
			</div>
			<div className="row mt-3">
				<div className="d-flex justify-content-center">
					<ButtonGroup variant="contained" color="primary" size="small" aria-label="contained primary button group">
						<Button onClick={ skipButton }>Skip</Button>
						<Button onClick={ invalidButton }>Invalid</Button>
						<Button onClick={ quitButton }>Quit</Button>
					</ButtonGroup>
				</div>
			</div>
		</div>
	)
}

export default QuizPage
