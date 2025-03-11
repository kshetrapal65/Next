export default function Page({ params }) {
  const { id } = params || {};
  console.log("id", id);

  return (
    <div>
      <h1>Post ID: {id}</h1>
    </div>
  );
}
