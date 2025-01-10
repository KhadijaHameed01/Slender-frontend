import BlogPage from "../components/BlogPage"


const Blogs = () => {
  return (
    <div>
      <div className="py-40 bg-purple-400 text-center px-4 border-collapse rounded-md m-3">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-4">Blog page</h1>
      </div>
       {/* all blogs container */}
    <div className="max-w-7xl mx-auto">
       <BlogPage/>
        </div>
    </div>
  )
}

export default Blogs