import React from 'react';

const CategoryItem = ({ categories, loading}) => {
    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div className='row mb-4'>
            {categories.map(category => (
                <div key={category.id} className="card">
                    <div className="card-body">
                        <h5 className="card-title"><a href="/#" style={linkStyle}>{category.title}</a></h5>
                            <p className="card-text">No. of questions: 
                                <span className="badge badge-info" style={{ color: 'blue'}}>
                                {category.clues_count}
                                </span>
                            </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

const linkStyle = {
    color: '#f2222',
    textDecoration: 'none'
}


export default CategoryItem;
