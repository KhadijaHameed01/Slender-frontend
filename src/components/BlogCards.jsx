import { FaUser } from "react-icons/fa";

const BlogCards = ({blogs}) => {

  if (!Array.isArray(blogs) || blogs.length === 0) {
    return <p className="text-center text-gray-600">No blogs available.</p>;
  }

  return (
    <div className="mx-4 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="p-5 shadow-lg rounded cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <div className="relative">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full rounded transition-all duration-300 hover:opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-600 to-transparent opacity-0 hover:opacity-80 transition-opacity duration-300 flex items-center justify-center text-white text-lg font-bold">
              Read More
            </div>
          </div>
          <h2 className="mt-4 mb-2 font-bold hover:text-purple-600 cursor-pointer">
            {blog.title}
          </h2>
          <p className="mb-2 text-gray-700">
            <FaUser className="inline-flex items-center mr-2" />
            {blog.author}
          </p>
          <p className="text-sm text-gray-600">Published: {blog.published_date}</p>
          <p className="text-purple-500">{blog.category}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogCards;
