import Link from "next/link";

export default function NotFound() {
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
        Not found page
      </p>
      <Link href="/" className="underline">
        Back to Home
      </Link>
    </div>
  );
}
