"use client";

import { useRouter } from "next/navigation";
import { use } from "react";
import { Button } from "react-bootstrap";

const Post = () => {
  const Router = useRouter();

  const navigation = (path) => {
    Router.push(path);
  };
  const data = [
    {
      id: 1,
      title: "ks",
    },
    {
      id: 2,
      title: "ys",
    },
    {
      id: 3,
      title: "ss",
    },
  ];

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <ul className="list-group w-50">
        {data.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center border-0"
          >
            <span className="fw-bold">{item.title}</span>
            <Button
              variant="primary"
              onClick={() => navigation(`/product/${item.title}`)}
            >
              View
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Post;
