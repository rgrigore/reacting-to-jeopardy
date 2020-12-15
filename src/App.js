import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CategoryList from './components/CategoryList';
import Header from './components/Header';


class App extends Component {
    
    render() {

        

        return (
           <Router>
               <Header />
                <Route path="/categoryList" render={props => (
                    <React.Fragment>
                        <CategoryList />
                    </React.Fragment>
                )} />
           </Router>
        );

    }

}

export default App;
