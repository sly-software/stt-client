import React from "react";
import "../css/categories.css";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import LockIcon from '@mui/icons-material/Lock';

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

      <Link
        className="category-link"
        to={`stockTake`}
        style={{ display: "none" }}
      >
        FifoTool
      </Link>

      <Link className="category-link" to={`offers`}>
        <Tooltip title={<LockIcon fontSize="small"/>} placement="right">
          <span>Specials</span>
        </Tooltip>
      </Link>

      <Link
        className="category-link"
        to={`delivery-notes`}
        style={{ display: "block" }}
      >
        <Tooltip title={<LockIcon fontSize="small"/>} placement="right">
          <span>D_Notes</span>
        </Tooltip>
      </Link>
    </>
  );
};

export default Categories;
