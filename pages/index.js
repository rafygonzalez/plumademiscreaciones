import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
    </div>
  );
};

export default Home;
