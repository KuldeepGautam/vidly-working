import React from "react";
import PropsTypes from "prop-types";
import _ from "lodash";

const Pagination = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  const totalCount = Math.ceil(itemsCount / pageSize);
  if (totalCount === 1) return null;
  const pages = _.range(1, totalCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={currentPage === page ? "page-item active" : "page-item"}
          >
            <a onClick={() => onPageChange(page)} className="page-link">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

PropsTypes.Pagination = {
  itemsCount: PropsTypes.number.isRequired,
  pageSize: PropsTypes.number.isRequired,
  currentPage: PropsTypes.number.isRequired,
  onPageChange: PropsTypes.func.isRequired,
};

export default Pagination;
