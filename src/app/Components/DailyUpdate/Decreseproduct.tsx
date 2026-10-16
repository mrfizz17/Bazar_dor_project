import React from "react";
import ProductCard from "../ProductCard";

const Decreseproduct = async ({data}) => {
  

  const IncreseItem = data.filter((item) => {
    return item.change.dir === "down";
  });

  const topSix = IncreseItem.sort((a, b) => b.change.pct - a.change.pct).slice(
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
