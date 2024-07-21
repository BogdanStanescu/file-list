import type { NextPage } from "next";
import Head from "next/head";
import FileList from "./components/FileList";
import { files } from "./data/file";
import styles from "./page.module.css";
import Footer from "./components/Footer";

const Home: NextPage = () => {
  return (
    <div className={styles.content}>
      <Head>
        <title>Home Assignment</title>
        <meta name="description" content="Home Assignment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <FileList files={files} />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
