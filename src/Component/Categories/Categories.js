import React, { useEffect, useState } from "react";
import Category from "./Category";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h1 className="text-4xl text-center font-bold my-10">
        Trekking Gear on rent
      </h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 px-12">
        {categories.map((category) => (
          <Category key={categories.userId} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
