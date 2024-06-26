import { Dosis } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";

const dosis = Dosis({ subsets: ["latin"] });

export const metadata = {
  title: "Grandpa Youssef - Food Farm",
  description: "Explore Grandpa Youssef Fresh Food of the Best Farm Ever",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dosis.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
