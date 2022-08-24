import React from "react";

const Header = () => {
  return (
    <nav className="flex justify-between items-center p-4">
      <div className="flex  items-center ">
        <img
          style={{ width: "50px" }}
          src="https://i.ibb.co/Z1LRDsZ/sharepal-logo-removebg-preview.png"
          alt="sharePal-logo"
        />
        <h1 className="text-3xl ">SharePal</h1>
      </div>
      <div>
        <button className="btn btn-outline btn-info  pr-4">LogIn</button>
      </div>
    </nav>
  );
};

export default Header;
