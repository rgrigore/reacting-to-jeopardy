import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import QuizPage from './components/quiz/QuizPage';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Link to="/quiz">random</Link><br />{/* TODO Remove this */}
				<Link to={{ pathname: "/quiz", state: { category: 1 } }}>category</Link>{/* TODO Remove this */}

				<Switch>
					<Route path="/quiz" component={ QuizPage } />
				</Switch>
			</BrowserRouter>
		</div>
	)
}

export default App;
