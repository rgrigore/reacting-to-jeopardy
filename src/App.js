import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CategoryPage from './components/CategoryPage';


function App()  {
        return (
           <Router>
               {/*<Header />*/}
                <Route exact path="/categories" component={ CategoryPage } />
           </Router>
        );
}

export default App;
