import React from "react";
import { IoCaretDownSharp, IoCaretUpSharp } from "react-icons/io5";
import Marquee from "react-fast-marquee";
import { IProducts } from "@/Types/types";

const Marque = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );

  const data:IProducts[] = await res.json();

  

  return (
    <Marquee className="bg-white mt-0.5 " speed={150} >
        <div className="flex gap-10 mt-2 h-[40px]">
            {data.map((item) => {

                const unit = item.unit ==="kg" ? "কেজি" : item.unit==="litre"? "লিটার"  : item.unit==="dozen" ? "ডজন" : "পিস" ;
        return(
            <div key={item.id} className="flex  items-center font-normal ml-4">
            {item.image} {item.nameBn} <span className="text-gray-600 ml-2 mr-3">{((item.today).toLocaleString("bn-BD"))}/{unit}</span>  {item.change.dir==="up"?  <span className="text-red-600">▲</span>: <span className="text-green-600">▼</span> } {Math.abs(item.change.pct).toLocaleString("bn-BD")}% 
        </div>
        );
        
      })}
        </div>
      
    </Marquee >
  );
};

export default Marque;
