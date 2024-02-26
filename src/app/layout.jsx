"use client"
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import store from "./redux/store";
import Navbar from "./components/Navbar";
import "./globals.css";
import { useDarkMode } from "./hooks";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const {isDarkMode, toggleDarkMode} = useDarkMode();
  return (
    <html lang="en" className={isDarkMode ? "dark" : ""}>
      <body className={`${inter.className} bg-[#f5f5f5] dark:bg-[#27374D]`}>
        <Provider store={store}>
          <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
          {children}
        </Provider>
      </body>
    </html>
  );
}
