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
	const [correctCount, setCorrectCount] = useState(0);
	const [wrongCount, setWrongCount] = useState(0);

	const quizLength = 10;
	const maxStrikes = 3;

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
			setCategory(props.location.state.category.name);
			setNext({
				get: categoryClue
			});
		} else {
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
			// TODO Win the quiz

			quitQuiz();
		}
	}, [progress])

	useEffect(() => {
		if (wrongCount >= maxStrikes) {
			// TODO Lose the quiz

			quitQuiz();
		}
	}, [wrongCount])

	const incrementCorrect = useCallback(() => {
		setCorrectCount(correctCount + 1);
	}, [correctCount])

	const incrementWrong = useCallback(() => {
		setWrongCount(wrongCount + 1);
	}, [wrongCount])

	const skipButton = () => {
		setWrongCount(wrongCount + 1);
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
		<div className="container mt-5" style={{ backgroundColor: "lightgrey", maxWidth: "900px" }}>
			<div className="row">
				<div className="d-flex justify-content-between mt-3">
					<div className="ms-2">Category: <span className="text-capitalize">{ category }</span></div>
					<div>
						<span className="mr-1" style={{ color: "green" }}>{ correctCount }</span>
						<span> / </span>
						<span className="ml-1" style={{ color: "red" }}>{ wrongCount }</span>
					</div>
					<div className="me-2">Question: { progress } / { quizLength }</div>
				</div>
			</div>
			<div className="row mt-3">
				<Question clue={ clue } counters={{ incrementCorrect, incrementWrong }} />
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

export default QuizPage
