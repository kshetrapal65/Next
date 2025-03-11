const getProduct = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res?.json();
  console.info("data>>>>>>>aa", data?.products);
  return data?.products;
};

const Page = async () => {
  const data = await getProduct();

  return (
    <div>
      <h1>contact page</h1>
      {data?.map((item, i) => (
        <h1 key={i}>
          {`Sno${i + 1}`}
          {item?.title}
        </h1>
      ))}
    </div>
  );
};

export default Page;
