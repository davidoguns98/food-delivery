/* eslint-disable react/prop-types */
import React, { useState } from "react";

const PaginatedList = ({ items }) => {
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const itemsPerPage = 8; // Number of items per page

  // Calculate the starting and ending index of items to show for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Function to go to the next page
  const nextPage = () => {
    if (currentPage * itemsPerPage < items.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to go to the previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Render the paginated list and the pagination controls
  return (
    <div>
      <div>
        {currentItems.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>

      {/* Pagination controls
      <div>
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button
          onClick={nextPage}
          disabled={currentPage * itemsPerPage >= items.length}
        >
          Next
        </button>
      </div>
       */}
    </div>
  );
};

export default PaginatedList;
