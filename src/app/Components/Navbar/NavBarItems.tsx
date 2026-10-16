import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const NavBarItems = async () => {
  const navdata = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories",
  );

  const navItems = await navdata.json();

  const navLinks = navItems.map((item) => (
        <li key={item.id}> 
          <div className="border-0 bg-white hover:bg-[#b6f3cd] py-1 px-3 rounded-[5px] cursor-pointer">
            <span className="text-[12px] mr-1">{item.icon}</span>
            <span>{item.nameBn}</span>
          </div>
        
        </li>
      ))

  return (
   

      <div className="max-md:collapse w-full rounded-md max-w-6xl mx-auto px-5 py-0 md:h-[54px]">
        <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
        <label
          htmlFor="navbar-1-toggle"
          className="fixed inset-0 hidden max-lg:peer-checked:block"
        ></label>
        <div className="collapse-title navbar p-0 m-0 -mt-2">
          <div className="">
            <label
              htmlFor="navbar-1-toggle"
              className="btn btn-ghost md:hidden"
            >
              <RxHamburgerMenu className="text-[20px]"/>
            </label>
          
          </div>
          <div className="hidden md:flex p-0">
            <ul className="menu menu-horizontal px-1 p-0 flex gap-3">
              {navLinks}
            </ul>
          </div>
          
        </div>

        <div className="collapse-content md:hidden z-1">
          <ul className="menu">
            {navLinks}
          </ul>
        </div>



      </div>

  );
};

export default NavBarItems;
