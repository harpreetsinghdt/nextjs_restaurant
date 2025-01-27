"use client";
import React from "react";

const Error = ({ error }) => {
  return (
    <main className="error">
      <h1>An error occured</h1>
      <p>failed to fetch data. Try again later,</p>
    </main>
  );
};

export default Error;
