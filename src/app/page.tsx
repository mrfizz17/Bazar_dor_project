import Image from "next/image";
import Hero from "./Components/Hero/Hero";
import IncreaseProduct from "./Components/DailyUpdate/IncreaseProduct";
import Decreseproduct from "./Components/DailyUpdate/Decreseproduct";
import AllProduct from "./Components/AllProduct/AllProduct";


export default async function Home() {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/bazardor/products",
    );
  
    const data = await res.json();


  return (
    <div>
      <Hero />
      <IncreaseProduct data={data}/>
      <Decreseproduct data={data} />
      <AllProduct data={data} />
    </div>
  );
}
