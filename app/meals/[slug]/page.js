import React from "react";

const page = ({ params }) => {
  return (
    <main>
      <div>slug page</div>
      <p>{params.slug}</p>
    </main>
  );
};

export default page;
