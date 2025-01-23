import React from "react";

const page = ({ params }) => {
  return (
    <main>
      <div>blog post</div>
      <p>{params.slug}</p>
    </main>
  );
};

export default page;
