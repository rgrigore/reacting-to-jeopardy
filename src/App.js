import React from 'react';
import HomePage from './components/HomePage';
import Container from "@material-ui/core/Container";
import Header from "./components/layout/Header";
import {BrowserRouter as Router, Route} from "react-router-dom";
import About from "./components/About";


function App() {
  return (
      <Router>
        <Container>
          <Header />
          <Route exact path={"/about"}>
            <About />
          </Route>
          <Route exact path={"/"}>
            <HomePage />
          </Route>
        </Container>
      </Router>
  );
}

export default App;
