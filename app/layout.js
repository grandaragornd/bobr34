'use client'
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import Head from "next/head";
import "../styles/globals.css";

export default function Layout ({ children, title = 'BOBR34' }) {
    return (
      <>
        <Head>
        <meta name="STEUER" content="BOBR34" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <html>
        <body>
          <NavBar />
          <Header />
        </body>
        </html>
    </>
  )
}
