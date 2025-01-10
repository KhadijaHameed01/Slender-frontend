import { useEffect, useState } from "react"
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const Sidebar = () => {
    const[popularBlogs,setPopularBlogs]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/blogs").then(
    res=>res.json()).then(data=>setPopularBlogs(data.slice(0,15)))
    }
    ,[])
      return (
    <div>
        <div>
            <h3 className="text-2xl font-semibold px-4 text-[#222121]">Latest Blogs</h3>
            <div>
                {
                    popularBlogs.slice(0,5).map((blog)=>(
                   <div key={blog.id} className="my-5 border-b-2 border-spacing-2 px-4">
                   <h4 className="text-lg font-semibold hover:font-bold transition-all">                           
  {blog.title}
                           </h4>
                           <Link
                             to={"/"}
                             className="text-base inline-flex items-center p-1 relative group text-purple-600 hover:text-purple-800"
                           >
                             <FaArrowRight className="mt-1 ml-2" />
                             Read more
                           <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                           </Link>
                           </div>
                    ))
                }
            </div>
        </div>
             {/* popular blogs */}
        <div>
            <h3 className="text-2xl font-semibold px-4 text-[#222121] mt-20">Popular Blogs</h3>
            <div>
                {
                    popularBlogs.slice(0,5).map((blog)=>(
                   <div key={blog.id} className="my-5 border-b-2 border-spacing-2 px-4">
                   <h4>
                    {blog.title}
                   </h4>
                   <Link
                   to={"/"}
                    className=" text-lg inline-flex items-center p-1 relative group  hover:text-purple-900 transition-colors duration-300"
                    >
                        <FaArrowRight className="mt-1 ml-2 hover:text-purple-800 transition-colors duration-300" />
                      Read more
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                   </div>
                    ))
                }
            </div>
        </div>
 
    </div>
  )
}

export default Sidebar