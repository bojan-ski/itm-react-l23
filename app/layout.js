import { Inter } from "next/font/google";
// style
import "./globals.css";
// context
import { GoogleAuthProvider } from "./context";
// components
import SearchBar from "@/components/SearchBar";
import Navbar from "@/components/appLayout/header/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ITM - React - L23",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAuthProvider>

          <header>
            <Navbar />
          </header>

          <main>
            <SearchBar />
            {children}
          </main>

        </GoogleAuthProvider>
      </body>
    </html>
  );
}
