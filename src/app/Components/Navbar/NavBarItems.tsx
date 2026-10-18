"use client"

import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";


interface Inavitems{
  id:string,
  slug:string,
  nameBn:string,
  icon:string
}


const NavBarItems =({navItems}:{navItems:Inavitems[]}) => {

  
  
  const [activeId,setActiveId]=useState("");
  
  const navLinks = navItems.map((item) => (
    <Link key={item.id} href={`/Categories/${item.id}`} onClick={

      ()=>{
        setActiveId(item.id);
      }
    }>

      <li > 
          <div className={`border-0 ${activeId===item.id? 'bg-green-600 text-white hover:bg-green-600' : 'bg-white'}  hover:bg-[#d9f1e2] py-1 px-3 rounded-[5px] cursor-pointer`}>
            <span className="text-[12px] mr-1">{item.icon}</span>
            <span className="text-[18px]">{item.nameBn}</span>
          </div>
        
        </li>
    </Link>
        
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
