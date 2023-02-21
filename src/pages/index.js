import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  // console.log(data)
  return (
    <>
      <Head>
        <title>Events App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav>
          <img />
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/events">Events</a>
        </nav>
      </header>
      <main className={styles.main}>
        {data.map((event) => (
          <a key={event.id} href={`/events/${event.id}`}>
            <Image
              src={event.image}
              alt={event.title}
              width={200}
              height={100}
            />
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </a>
        ))}
      </main>

      <footer className={styles.footer}>
        <p>2023 NextJS Practice App.</p>
      </footer>
    </>
  );
}

export async function getServerSideProps() {
  const { events_categories } = await import("/data/data.json");
  console.log(events_categories);
  return {
    props: {
      data: events_categories,
    },
  };
}
