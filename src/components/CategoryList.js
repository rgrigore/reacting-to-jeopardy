import React from 'react';
import PropTypes from 'prop-types';
import Alert from "react-bootstrap/Alert";
import CardColumns from 'react-bootstrap/CardColumns';


import CategoryItem from './CategoryItem';

const CategoryList = props => {
    if (!props.loading) {
        return (
            <CardColumns className="pt-4 pl-5 pb-5 row">
                { props.categories.map(category => (
                    <CategoryItem key={ category.id } category={ category } />
                )) }
            </CardColumns>
        )
    } else {
        return (
            <Alert variant={"dark"}>
                Loading!
            </Alert>
        )
    }
}

CategoryList.propTypes = {
    categories: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

export default CategoryList
