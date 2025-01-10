const CategorySelection = ({
    onSelectedCategory,
    activateCategory,
  }) => {
    const categories = ["Startups", "Security", "AI", "Apps", "Tech","Health","Fintech","Enterprise"];
    
    return (
      <div className="px-4 mb-8 lg:space-x-16 flex flex-wrap items-center border-b-1 bg-[white] shadow-md rounded-md py-5 font-serif">
        <button
          onClick={() => onSelectedCategory(null)}
          className={`mr-2 lg:ml-12 space-x-16  hover:text-purple-400 hover:text-lg transition-all duration-300 ${
            activateCategory === null ? "active:text-purple-400" : ""
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectedCategory(category)}
            className={`mr-2 space-x-16  hover:text-purple-400 hover:text-lg transition-all duration-300${
              activateCategory === category ? "active:text-purple-400" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    );
  };
  
  export default CategorySelection;
  