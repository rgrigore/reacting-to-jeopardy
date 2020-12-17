import React, { useState, useEffect} from 'react';
import axios from 'axios';
import CategoryItem from './CategoryItem';
import CategoryPage from './CategoryPage';



const CategoryList = () => {
    const [ categories, setCategories ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ categoriesPerPage ] = useState(12);

    useEffect(() => {
        const fetchCategories = async () => {
            setLoading(true);
            const res = await axios.get('http://jservice.io/api/categories?&count=100');
            setCategories(res.data);
            setLoading(false);
        }

        fetchCategories();
    }, []);

    //Get categories
    const indexOfLastCategory = currentPage * categoriesPerPage;
    const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
    const currentCategories = categories.slice(indexOfFirstCategory, indexOfLastCategory);

    //Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className='container mt-5'>
            <CategoryItem categories={currentCategories} 
                        loading={loading} />
            <CategoryPage categoriesPerPage={categoriesPerPage} 
                    totalCategories={categories.length} 
                    paginate={paginate} />
        </div>
    )
}

export default CategoryList; 