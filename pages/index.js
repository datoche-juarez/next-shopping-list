import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { Button } from "@chakra-ui/react";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        {/* <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div style={{ marginBottom: "50px" }}>
          <h1 className={styles.title}>
            Welcome to your <a href="https://nextjs.org">Vinyl Shopping List</a>
          </h1>
        </div>
        <div className={styles.grid}>
          <Link href="/about" className={styles.card}>
            <h2>About &rarr;</h2>
            <p>Find out more about this application.</p>
          </Link>
          <Link href="/vinyl" className={styles.card}>
            <h2>Vinyl List &rarr;</h2>
            <p>Get started editing your playlist now!</p>
          </Link>
          <Link href="/examples" className={styles.card}>
            <h2>Examples &rarr;</h2>
            <p>See how others have used this tool.</p>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://danielatochejuarez.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <Image src="/DajLogo3.png" alt="DAJ logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
