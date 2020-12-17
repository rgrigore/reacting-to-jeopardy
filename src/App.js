import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CategoryList from './components/CategoryList';
//import Header from './components/Header';


function App()  {
        return (
           <Router>
               {/*<Header />*/}
                <Route exact path="/categoryList" component={ CategoryList } />
                    <CategoryList />
           </Router>
        );
}

export default App;
