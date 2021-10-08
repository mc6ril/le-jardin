import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import { motion } from "framer-motion";

export default function Layout({ children, page }) {
  return (
    <>
      <Head>
        <title>{page}</title>
        <meta
          name="description"
          content="Gîte le Jardin à Malaucène, au pied du Mont-Ventoux en Provence."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css"
        ></link>
      </Head>

      <Header />
      <motion.main
        className="layout"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        {children}
      </motion.main>
      <Footer />
    </>
  );
}
