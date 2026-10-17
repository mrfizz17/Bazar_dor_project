"use client"

import ProductCard from "@/app/Components/ProductCard";
import { IProducts } from "@/Types/types";
import React, { useState } from "react";

const ClientComponent = ({data}:{data:IProducts[]}) => {
  const [sortType, setSortType] = useState("default");

  
  if(sortType==="ascending"){
    data=data.sort((a,b)=> a.today-b.today);
    
  }else{
    data=data.sort((a,b)=> b.today-a.today);
    
  }
  return (
    <div>
      <div className="bg-white rounded-2xl p-6 flex gap-4 items-center mb-10">
        <div className="text-[40px]">{data[0].image}</div>

        <div>
          <p className="text-3xl font-bold">{data[0].categoryNameBn}</p>
          <p className="text-gray-500">
            {data.length.toLocaleString("bn-BD")}টি পণ্যের আজকের দাম ও পরিবর্তন
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-500 text-[18px]">
            মোট {data.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে
          </p>
        </div>

        <fieldset className="fieldset flex gap-5 items-center">
          <p className="text-2xl font-normal text-gray-700">সাজান</p>
          <select
            className="select  border-green-500 outline-0"
            onChange={(e) => {
              setSortType(e.target.value);
            }}
          >
            <option value="default">ডিফল্ট</option>
            <option value="ascending">দাম: কম থেকে বেশি</option>
            <option value="descending">দাম: বেশি থেকে কম</option>
          </select>
        </fieldset>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5">
        {data.map((item) => {
          return <ProductCard item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default ClientComponent;
