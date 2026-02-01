import { Metadata } from "next";
import React from "react";
import "./styles.css";
import "./scripts.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import {
  Saira_Extra_Condensed,
  Sofia_Sans_Extra_Condensed,
  Mulish,
} from "next/font/google";

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
    <html
      lang="en"
      className={`${saira.variable} ${sofia.variable} ${mulish.variable}`}
    >
      <body id="page-top">
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root"></div>
      </body>
    </html>
  );
}
