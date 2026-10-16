



import ClientComponent from "./ClientComponent";

const page = async ({ params }) => {


  const { id } = await params;

  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products?category=${id}`,
  );

  const data = await res.json();

 

  return (
    <ClientComponent data={data} />
  );
};

export default page;
