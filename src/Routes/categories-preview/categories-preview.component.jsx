import { Fragment, useContext } from "react";
import { CategoriesContext } from "../../context/categories.context";


import Categorypreview from "../../component/category-preview/category-preview.component";
const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
           const products = categoriesMap[title];

           return(
            <Categorypreview key={title} title={title} products={products} />
           )
       
      })}
      </Fragment>
  );
};

export default CategoriesPreview;


// <Fragment key={title}>
// <h2>{title}</h2>
// <div className="products-container">
//   {categoriesMap[title].map((product) => (
//     <ProdCard key={product.id} product={product}></ProdCard>
//   ))}
// </div>
// </Fragment>