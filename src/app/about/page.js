import React from "react";

export default function page() {
  return (
    <div
      style={{
        height: "calc(100vh - 60px)",
        background: "linear-gradient(45deg, red, blue)",
      }}
      className="flex justify-center items-center flex-col gap-5 text-white text-3xl font-bold"
    >
      <h1>Hello World!</h1>
      <p className="text-black bg-green-300 px-10 py-2 rounded-full">
        About page
      </p>
    </div>
  );
}
