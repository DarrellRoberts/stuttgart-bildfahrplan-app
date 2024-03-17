import type { Metadata } from "next";
import ThemeContextProvider from "./context/ThemeContext";
import "./globals.css";
import {useState} from "react";

export const metadata: Metadata = {
  title: "Stuttgart Timetables",
  description: "A train-timetable visualisation app for Stuttgart specifically.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
{
  return (
  <ThemeContextProvider>
    <html lang="en">
      <body>{children}</body>
    </html>
  </ThemeContextProvider>
  );
}
