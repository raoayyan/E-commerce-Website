import "./category-preview.style.scss";
import { Link } from "react-router-dom";
import ProdCard from "../prod-card/prod-card,component";
const Categorypreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link className="title" to={title}>{title.toUpperCase()}</Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProdCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};
export default Categorypreview;
