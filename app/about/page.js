import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div>
      <h1>about page</h1>
      <button>
        <Link href="/contact"> go to contact</Link>
      </button>
    </div>
  );
};

export default About;
