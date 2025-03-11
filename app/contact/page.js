const getProduct = async () => {
  const res = await fetch("http://localhost:3000/api/user");
  const data = await res?.json();
  return data;
};

const Page = async () => {
  const data = await getProduct();
  console.log("DATA", data);
  console.log("DATA", data);

  return (
    <div>
      <h1>Name: {data?.name}</h1>
      <h1>LastName: {data?.lastName}</h1>
    </div>
  );
};

export default Page;
