import { useEffect, useState } from "react";
import BlogCards from "./BlogCards";
import Pagination from "./Pagination";
import CategorySelection from "./CategorySelection";
import Sidebar from "./Sidebar";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12; // blogs per page
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activateCategory, setActivateCategory] = useState(null);

  // Fetch blogs from the API
  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await fetch("https://slender-backend.vercel.app/api/blogs");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    }
    fetchBlogs();
  }, []); // Empty dependency array ensures this effect runs only once

  // Handle page change
  const handlePageChange = (pageNumber) => {
    if (pageNumber !== currentPage) {
      setCurrentPage(pageNumber);
    }
  };

  // Handle Category Change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page
    setActivateCategory(category);
  };

  // Filter posts based on the selected category
  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.category === selectedCategory)
    : posts;

  // Calculate the paginated posts
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + pageSize);

  return (
    <div>
      {/* Category section */}
      <div>
        <CategorySelection
          onSelectedCategory={handleCategoryChange}
          activateCategory={activateCategory}
        />
      </div>

      {/* BlogCards section */}
      <div className="flex flex-col lg:flex-row gap-12">
        <BlogCards blogs={paginatedPosts}/>
      {/* Side bar */}
         <div>
          <Sidebar/>
         </div>
      </div>
      {/* Pagination section */}
      <div>
        <Pagination
          onPageChange={handlePageChange}
          currentPage={currentPage}
          totalPosts={filteredPosts.length}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
};

export default BlogPage;
