import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { FiUser } from "react-icons/fi";
const Navbar = () => {
  const NavbarArr = [
    { id: 1, title: "Home", to: "/" },
    { id: 2, title: "About", to: "about" },
    { id: 3, title: "Contact Us", to: "contact" },
    { id: 4, title: "Blog", to: "blog" },
  ];
  const [active, SetActive] = useState(1);
  const clickShow = (id) => {
    SetActive(id);
  };
  return (
    <>
      <div className="max-w-[80vw]  m-auto">
        <div className="grid grid-cols-[150px_400px_340px_330px] items-center">
          <div className="">
            <h1 className="text-xl font-bold">cyber</h1>
          </div>
          <div className="bg-[#F5F5F5] w-[300px] h-[56px]"></div>
          <div className="flex items-center gap-7 b ">
            {NavbarArr.map(({ id, title, to }) => {
              return (
                <Link
                  onClick={() => clickShow(id)}
                  className={`${
                    active === id ? "text-black font-bold" : "text-[#b5aeae]"
                  }`}
                  key={id}
                  to={to}
                >
                  {title}
                </Link>
              );
            })}
          </div>
          <div className="flex items-center gap-6 text-2xl justify-end">
            <CiHeart />
            <MdOutlineLocalGroceryStore />
            <FiUser />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
