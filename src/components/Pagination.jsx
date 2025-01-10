const Pagination = ({ onPageChange, currentPage, totalPosts, pageSize }) => {
  const totalPages = Math.ceil(totalPosts / pageSize); // Calculate total pages
   

  
  // Handle rendering of page numbers
  const renderPaginationLinks = () => {
    const pageLinks = [];
    for (let i = 1; i <= totalPages; i++) {
      pageLinks.push(
        <li
          key={i}
          className={i === currentPage ? "activePagination" : ""}
        >
          <button
            onClick={() => onPageChange(i)} // Ensure onClick correctly triggers onPageChange
            className="px-4 py-2 rounded bg-purple-200 hover:bg-purple-600 hover:text-white "
          >
            {i}
          </button>
        </li>
      );
    }
    return pageLinks;
  };

  return (
    <ul className="pagination my-8 px-5 flex flex-wrap gap-4">
      <li className="mt-10">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded  bg-purple-600  hover:bg-purple-700 transition-all duration-300 text-white "
        >
          Previous
        </button>
      </li>
      {renderPaginationLinks()}
      <li>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded  bg-purple-600  hover:bg-purple-700 transition-all duration-300 text-white "
        >
          Next
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
