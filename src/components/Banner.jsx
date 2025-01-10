import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="px-4 py-32 bg-purple-200 mx-auto">
      <div className="text-gray-800 text-center">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-4">
          Welcome To our Blogs
        </h1>
        <p className="text-gray-700 lg:w-3/5 mx-auto mb-5">
          Start your blog today and join our community of bloggers Lorem, ipsum
          dolor sit amet consectetur adipisicing elit. Reiciendis assumenda quasi delectus consequatur. Atque eius ipsam repellat excepturi? Vitae et ullam voluptatum veritatis eveniet quia nobis! Nihil quod rem et.
        </p>
        <Link
          to={"/"}
          className="font-medium text-lg inline-flex items-center p-1 relative group  hover:text-purple-900 transition-colors duration-300"
        >
          Learn more
          <FaArrowRight className="mt-1 ml-2 hover:text-purple-800 transition-colors duration-300" />
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
