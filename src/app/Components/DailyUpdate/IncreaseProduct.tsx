import React from "react";
import ProductCard from "../ProductCard";

const IncreaseProduct = async ({data}) => {


  const IncreseItem = data.filter((item) => {
    return item.change.dir === "up";
  });

  const topSix = IncreseItem.sort((a, b) => b.change.pct - a.change.pct).slice(
    0,
    6,
  );

  console.log(topSix);
  return (
    <div className="mt-10">
      <p className="text-[35px] font-medium">
        <span className="text-red-600 text-[30px]">▲</span> আজ দাম বেড়েছে
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5">
        {topSix.map((item) => {
          return <ProductCard item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default IncreaseProduct;
