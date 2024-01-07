import React from "react";
import "../css/categories.css";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <>
      <p className="category-header">CATEGORIES</p>

      <Link className="category-link" to={`stocked/chemicals`}>
        Chemicals
      </Link>

      <Link className="category-link" to={`services`}>
        Services
      </Link>

      <Link className="category-link" to={`offers`}>
        Offers
      </Link>

      <Link className="category-link" to={`stockTake`}>
        FIFO
      </Link>
    </>
  );
};

export default Categories;
