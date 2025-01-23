import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main>
      <div>All meals</div>
      <p>
        <Link href="/meals/share">Share</Link>
      </p>
      <p>
        <Link href="/meals/todays-meal">Todays meal</Link>
      </p>
      <p>
        <Link href="/meals/special-offer">Special offer</Link>
      </p>
    </main>
  );
};

export default page;
