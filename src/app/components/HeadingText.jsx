import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

export default function HeadingText({ subHeading, mainHeading, isHero }) {
  return (
    <>
      {isHero ? (
        <>
          <h1
            style={{ WebkitTextStroke: "2px #16a34a" }}
            className={`${dancingScript.className} text-green-600 text-3xl text-center`}
          >
            {subHeading}
          </h1>
          <h2 className="text-green-900 text-5xl font-bold italic py-5 text-center">
            {mainHeading}
          </h2>
        </>
      ) : (
        <>
          <h2
            style={{ WebkitTextStroke: "2px #16a34a" }}
            className={`${dancingScript.className} text-green-600 text-3xl text-center`}
          >
            {subHeading}
          </h2>
          <h3 className="text-green-900 text-3xl font-bold italic py-2 text-center">
            {mainHeading}
          </h3>
        </>
      )}
    </>
  );
}
