import Head from "next/head";
import Header from "./Header";

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
      </Head>

      <Header />
      <main className="layout">{children}</main>
    </>
  );
}
