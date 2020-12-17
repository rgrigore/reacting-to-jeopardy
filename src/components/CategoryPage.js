// import React from 'react';

// const CategoryPage = ({ categoriesPerPage, totalCategories, paginate }) => {
//     const pageNumbers = [];

//     for (let i = 1; 1 <= Math.ceil(totalCategories / categoriesPerPage); i++) {
//         pageNumbers.push(i);
//     }

//     return (
//         <nav aria-label="...">
//             <ul className='pagination'>
//                 <li className="page-item active">
//                     <a className="page-link" href="/#">Previous</a>
//                 </li>
//                 {pageNumbers.map(number => (
//                     <li key={number} className='page-item'>
//                         <a onClick={() => paginate(number)} href='/#!' className='page-link'>
//                             {number}
//                         </a>
//                     </li>
//                 ))}
//                 <li className="page-item active">
//                     <a className="page-link" href="/#">Next</a>
//                 </li>
//             </ul>
//         </nav>
//     )
// }

// export default CategoryPage;

import React, { useEffect, useState } from 'react'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

import CategoryList from './CategoryList';

const CategoryPage = () => {

    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([]);

    const count = 27;

    useEffect(() => {
        setLoading(true);
        const axios = require("axios").default;
        axios.get("http://jservice.io/api/categories", {
            params: {
                count: count,
                offset: offset
            }
        })
        .then(response => {
            setCategories(response.data);
            setLoading(false);
        })
    }, [offset])

    const changePage = direction => {
        setOffset(offset + count * direction);
    }

    return (
        <div className="container">
            <div>
                <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                    <Button onClick={ changePage.bind(null, -1) } disabled={ offset === 0 }>Previous</Button>
                    <Button onClick={ changePage.bind(null, 1) }>Next</Button>
                </ButtonGroup>
            </div>
            <div>
                <CategoryList categories={ categories } loading={ loading } />
            </div>
        </div>
    )
}

export default CategoryPage
