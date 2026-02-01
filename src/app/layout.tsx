import { Metadata } from "next";
import React from "react";
import "./styles.css";
import ClientScripts from "./ClientScripts";
import "bootstrap/dist/css/bootstrap.min.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { Sofia_Sans_Extra_Condensed } from "next/font/google";

export const metadata: Metadata = {
  title: "Joseph Barkie: Software Developer",
  description: "Joseph Barkie, Software Developer at Progressive",
  authors: [{ name: "Joseph Barkie" }],
  themeColor: "#ffffff",
};

const sofia = Sofia_Sans_Extra_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sofia",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sofia.variable}`}>
      <body id="page-top">
        <div id="root"></div>
        <ClientScripts />
      </body>
    </html>
  );
}
