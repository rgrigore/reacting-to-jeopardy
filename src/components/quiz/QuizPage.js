import React, { useState, useEffect, useCallback } from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

import Question from './Question';

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
	const [category, setCategory] = useState("");
	const [next, setNext] = useState({
		get: () => {}
	})
	const [progress, setProgress] = useState(1);

	const quizLength = 10;

	const quitQuiz = () => {
		// TODO Go back to HomePage
	}

	const randomClue = () => {
		const axios = require('axios').default;
		axios.get("http://jservice.io/api/random")
		.then(response => setClue(response.data[0]));
	}

	const categoryClue = useCallback(() => {
		const axios = require('axios').default;
		axios.get("http://jservice.io/api/clues", { params: { category: props.location.state.category.id } })
		.then(response => {
			const index = Math.floor(Math.random() * response.data.length);
			setClue(response.data[index]);
		});
	}, [props.location.state])

	useEffect(() => {
		const state = props.location.state;

		if (state != null && state.category != null) {
			// console.log("Category: " + props.location.state.categoryId);
			setCategory(props.location.state.category.name);
			setNext({
				get: categoryClue
			});
		} else {
			// console.log("random");
			setCategory("random");
			setNext({
				get: randomClue
			});
		}

		setProgress(1);
	}, [categoryClue, props.location.state]);

	useEffect(() => {
		next.get();
	}, [next])

	useEffect(() => {
		if (progress > quizLength) {
			// console.log("dead"); // Debug
			// TODO Lose the quiz

			// quitQuiz(); // TODO uncomment
		}
	}, [progress])

	const skipButton = () => {
		// TODO Register strike
		setProgress(progress + 1);
		next.get();
	}

	const invalidButton = () => {
		const axios = require('axios').default;
		axios.post(`http://jservice.io/api/invalid?id=${ clue.id }`);
		next.get();
	}

	const quitButton = () => {
		quitQuiz();
	}

	return (
		<div className="container" style={{ backgroundColor: "lightgrey", maxWidth: "900px" }}>
			<div className="row">
				<div className="d-flex mt-3">
					<div className="ms-2 me-auto" style={infoAreaStyle}>Category: <span className="text-capitalize">{ category }</span></div>
					<div className="me-2" style={infoAreaStyle}>Question: { progress } / { quizLength }</div>
				</div>
			</div>
			<div className="row mt-3">
				<Question clue={ clue } />
			</div>
			<div className="row mt-3">
				<div className="mb-3 d-flex justify-content-center">
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

// const containerStyle = {
// 	background: 'rgba(224, 224, 224, 0.3)',
// 	maxWidth: "900px",
// };

const infoAreaStyle = {
	background: 'rgba(224, 224, 224, 1)',
	borderRadius: '15px',
	border: '1px solid #A9A9A9',
	paddingRight: '10px',
	paddingLeft: '10px'
}

export default QuizPage
