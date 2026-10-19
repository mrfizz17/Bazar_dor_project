import { Iparams, IProducts } from "@/Types/types";
import React from "react";
import SummaryCard from "./SummaryCard";
import Link from "next/link";
import { notFound } from "next/navigation";



const DetailsPage = async ({params}:Iparams) => {

  const {id} = await params;

  const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products/${id}`);
  if(res.status===404){
    notFound();
  }

  const data:IProducts=await res.json();

  if(!data){
    notFound();
  }

  const unit =
    data.unit === "kg"
      ? "কেজি"
      : data.unit === "litre"
        ? "লিটার"
        : data.unit === "dozen"
          ? "ডজন"
          : "পিস";

  
  const maxPrice = Math.max(...data.markets.map((m)=>m.max));
  const minPrice = Math.min(...data.markets.map((m)=>m.min));
  const average =  data.markets.reduce((acc,elem)=>{
    return acc+((elem.min+elem.max)/2)
  },0)/ data.markets.length;

  



  return (
    <div>
      <section className="mb-[22px] flex flex-col md:flex-row min-h-[150px] md:items-center justify-between gap-6 rounded-2xl border border-[#dce5dd] bg-[#fafcfb] px-[18px] py-4">
        <div className="flex min-w-0 items-center gap-5">
          <div className="grid h-[80px] w-[80px] shrink-0 place-items-center rounded-[15px] bg-[#f0f5f0] text-[40px]">
            {data.image}
          </div>

          <div>
            <h1 className=" text-[20px] md:text-3xl font-bold sm:text-[31px]">{data.nameBn}</h1>

            <p className="text-sm md:text-md text-[#58665e]">
              প্রতি {unit} · {data.categoryNameBn} 
            </p>

            <p className="text-[14px] md:text-[15px] text-gray-500">
              গতকালের তুলনায় আজ দাম
               <span className="font-semibold">{data.change.dir==='up' ? " বেড়েছে" : " কমেছে"}{" "}</span>
              {Math.abs(data.change.pct)}%
            </p>
          </div>
        </div>

        <div className="flex shrink-0 flex-col md:items-center justify-center rounded-2xl bg-[#f0f5f0] px-4 md:px-8 py-2">
          <span className="text-md text-[#536259]">আজকের দাম</span>

          <strong className="text-[35px] ">
            {data.today}
          </strong>

          <span className="text-sm text-[#536259]">টাকা / {unit} </span>

          <span
            className={`mt-1 text-md ${
              data.change.dir==='up' ? "text-red-500" : "text-green-600"
            }`}
          >
            {data.change.dir==='up' ? "▲" : "▼"} {Math.abs(data.change.pct)}%
          </span>
        </div>
      </section>

      <section className="rounded-2xl border border-[#dce5dd] bg-[#fafcfb] p-4 sm:px-[18px] sm:py-4">
        <h2 className="mb-2.5 text-lg font-bold">
          দামের সারসংক্ষেপ
        </h2>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
          <SummaryCard
            label="সর্বনিম্ন দাম"
            price={minPrice}
            description="সবচেয়ে কম দামের বাজার"
            color="text-green-600"
          />

          <SummaryCard
            label="সর্বাধিক দাম"
            price={maxPrice}
            description="সবচেয়ে বেশি দামের বাজার"
            color="text-red-500"
          />

          <SummaryCard
            label="গড় দাম"
            price={average}
            description={`প্রতি ${unit}-এর হিসাবে`}
            color="text-green-600"
          />
        </div>

        {/* Market Table */}
        <div className="mt-[21px]">
          <h2 className="mb-2.5 text-lg font-bold">
            বাজারভিত্তিক আজকের দাম
          </h2>

          <div className="overflow-x-auto rounded-2xl border border-[#dce5dd]">
            <table className="w-full min-w-[700px] border-collapse text-left text-sm">
              <thead className="bg-[#fafcfb] text-[#66736b]">
                <tr>
                  <th className="px-[15px] py-3 font-medium">
                    বাজার
                  </th>
                  <th className="px-[15px] py-3 font-medium">
                    বিভাগ
                  </th>
                  <th className="px-[15px] py-3 text-right font-medium">
                    সর্বনিম্ন
                  </th>
                  <th className="px-[15px] py-3 text-right font-medium">
                    সর্বাধিক
                  </th>
                  <th className="px-[15px] py-3 text-right font-medium">
                    গড়
                  </th>
                </tr>
              </thead>

              <tbody>
                {data.markets.map((market, index) => (
                  <tr
                    key={`${market.market}-${market.division}`}
                    className={`border-t border-[#e2e9e3] transition-colors hover:bg-[#eaf2eb] ${
                      index % 2
                        ? "bg-[#f0f5f0]"
                        : "bg-[#fafcfb]"
                    }`}
                  >
                    <td className="px-[15px] py-3">
                      {market.market}
                    </td>

                    <td className="px-[15px] py-3">
                      {market.division}
                    </td>

                    <td className="px-[15px] py-3 text-right">
                      {market.min.toLocaleString("bn-BD")} টাকা
                    </td>

                    <td className="px-[15px] py-3 text-right">
                      {market.max.toLocaleString("bn-BD")} টাকা
                    </td>

                    <td className="px-[15px] py-3 text-right font-semibold">
                      {(Math.round((market.max + market.min) / 2)).toLocaleString("bn-BD")} টাকা
                    </td>
                  </tr>
                ))}

                {data.markets.length === 0 && (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-4 py-8 text-center text-gray-500"
                    >
                      কোনো বাজারের তথ্য পাওয়া যায়নি।
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Link href={`/Categories/${data.category}`}>
      
        <button className="btn text-[18px] bg-green-700 text-white mt-5 px-10">{`সব ${data.categoryNameBn}`}</button>
      
      </Link>

      
    </div>
  );
};

export default DetailsPage;
