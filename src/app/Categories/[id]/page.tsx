

import { Iparams } from "@/Types/types";
import ClientComponent from "./ClientComponent";
import { notFound } from "next/navigation";



const page = async ({ params }:Iparams) => {


  const {id} = await params;

  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products?category=${id}`,
  );

  if(res.status===404){
    notFound();

  }

   if (!res.ok) {
    throw new Error("Failed to fetch product");
  }


  const data = await res.json();

  if(!data || data.length===0){
    notFound();
  }
 

  return (
    <ClientComponent data={data} />
  );
};

export default page;
