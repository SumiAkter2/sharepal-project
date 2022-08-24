import React from "react";

const Category = ({ category }) => {
  return (
    <div className="px-4">
      <div className="flex h-56  shadow-2xl">
        <div className="bg-white w-2/3">
          <h1 className="text-3xl font-bold p-4">{category.name}</h1>
          <button className="btn btn-outline rounded-full ">
            {category.product}{" "}
          </button>
        </div>
        <div className="bg-yellow-300 w-1/3">
          <img className=" ml-[-50px] py-12" src={category.img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Category;
