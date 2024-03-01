import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next-Stacks",
  description: "Reference project for next ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <p>
          Topbar component
        </p>
        <br></br>
        {children}
        <br></br>
        <p>
          Footer component
        </p>
        </body>
    </html>
  );
}
