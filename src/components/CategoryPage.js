import React from 'react';

const CategoryPage = ({ categoriesPerPage, totalCategories, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; 1 <= Math.ceil(totalCategories / categoriesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav aria-label="...">
            <ul className='pagination'>
                <li className="page-item active">
                    <a className="page-link" href="/#">Previous</a>
                </li>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <a onClick={() => paginate(number)} href='/#!' className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
                <li className="page-item active">
                    <a className="page-link" href="/#">Next</a>
                </li>
            </ul>
        </nav>
    )
}

export default CategoryPage;