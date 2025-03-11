const Subs = async ({ params }) => {
  const data = await params?.subs;
  console.log("data", data);

  return (
    <div>
      <h2>Sub page</h2>
      {data?.map((item, i) => (
        <h1 key={i}>{item}</h1>
      ))}
    </div>
  );
};
export default Subs;
