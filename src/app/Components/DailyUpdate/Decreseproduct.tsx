import React from "react";
import ProductCard from "../ProductCard";
import { IProducts } from "@/Types/types";

const Decreseproduct = async ({data}:{data:IProducts[]}) => {
  

  const IncreseItem:IProducts[] = data.filter((item) => {
    return item.change.dir === "down";
  });

  const topSix:IProducts[] = IncreseItem.sort((a, b) => Math.abs(b.change.pct) - Math.abs(a.change.pct)).slice(
    0,
    6,
  );

  console.log(topSix);
  return (
    <div className="mt-10 mb-10">
      <p className="text-[35px] font-medium">
        <span className="text-green-600 text-[30px]">▼</span> আজ দাম কমেছে
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5">
        {topSix.map((item) => {
          return <ProductCard item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Decreseproduct;
