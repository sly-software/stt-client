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

      <Link className="category-link" to={`stockTake`} style={{ display: "none"}}>
        FifoTool
      </Link>

      <Link className="category-link" to={`offers`}>
        Specials
      </Link>

      <Link className="category-link" to={`delivery-notes`} style={{ display: "none"}}>
        DNs
      </Link>
    </>
  );
};

export default Categories;
