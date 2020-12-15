import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css';


class CategoryList extends React.Component {

   
    constructor(props) {

        super(props);

        this.state = {
            items: [],
            isLoaded: false
        }

    }

    /**
     * componentDidMount
     *
     * Fetch json array of objects from given url and update state.
     */
    componentDidMount() {
        
        fetch('http://jservice.io/api/categories?&count=50')
        //'http://jservice.io/api/clues?&category='
        //'https://jsonplaceholder.typicode.com/users'
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json,
                    isLoaded: true, 
                })
            }).catch((err) => {
                console.log(err);
            });

    }

    
    render() {

        const { isLoaded, items } = this.state;

        if (!isLoaded)
            return <div>Loading...</div>;

        return (
            
                //<ul>
                    

                        <div className="CategoryList">
                            <div className="card">
                                {items.map(item => (
                                <React.Fragment key={item.id}>
                                    <div className="card-header">
                                        Category ID: {item.id}
                                    </div>
                                    <div className="card-body">
                                    <h5 className="card-title">Name of the Category of Questions is: </h5>
                                    <p className="card-text">{item.title}</p>
                                    <Link to="/category" className="btn btn-primary">Go to Questions!</Link>
                                    </div>
                                </React.Fragment>))};
                            </div>
                        </div>

                //        {/*<li key={item.id}>
                //            {/*Name: {item.name} | Email: {item.email}*/}
                //            {/*Category: {item.category} |*/}
                //            {/*Category: {item.title}  */}
                //            {/*Answer: {item.answer}*/}
                //        {/*</li>*/}*/}

                //    {/*))}
                //</ul>*/}
        );

    }

}

export default CategoryList;
