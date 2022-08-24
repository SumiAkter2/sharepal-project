import React from "react";

const Category = ({ category }) => {
  const showDetail = () => {
    console.log("show me details of the products");
  };
  return (
    <div onClick={showDetail} className="px-2 my-2 category-container">
      <div className="flex  lg:h-48 items-center shadow-2xl ">
        <div className="bg-white w-2/3 p-4 lg:h-48">
          <h1 className="lg:text-2xl text-lg font-bold lg:p-4 px-2 mb-4">
            {category.name}
          </h1>
          <button className="btn-xs lg:btn btn-info lg:ml-4 ml-2 lg:btn-outline rounded-full  ">
            {category.product}
          </button>
        </div>
        <div className="bg-yellow-300 lg:h-48 w-1/3 ">
          <img
            className="h-54 w-64 shrink-0 lg:ml-[-40px] ml-[-30px] md:ml-[-40px] py-12"
            src={category.img}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
