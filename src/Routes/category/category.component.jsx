import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import './category.style.scss'
import ProdCard from '../../component/prod-card/prod-card,component';

import { CategoriesContext } from '../../context/categories.context';


const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);
  
    useEffect(() => {
      setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);
  
    return (
      <Fragment>
        <h2 className='category-title'>{category.toUpperCase()}</h2>
        <div className='category-container'>
          {products &&
            products.map((product) => (
              <ProdCard key={product.id} product={product} />
            ))}
        </div>
      </Fragment>
    );
  };
  
  export default Category;