import React from "react";

const Category = ({ category }) => {
  return (
    <div className="px-2 my-4 ">
      <div className="flex  lg:h-60 items-center shadow-2xl ">
        <div className="bg-white w-2/3 p-4 lg:h-60">
          <h1 className="lg:text-2xl text-lg font-bold lg:p-4 p-2">
            {category.name}
          </h1>
          <button className="btn-xs lg:btn lg:ml-4 ml-2 lg:btn-outline lg:rounded-full ">
            {category.product}
          </button>
        </div>
        <div className="bg-yellow-300 lg:h-60 w-1/3 ">
          <img
            className="h-56 w-96 shrink-0 lg:ml-[-40px] ml-[-30px] md:ml-[-40px] py-12"
            src={category.img}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
