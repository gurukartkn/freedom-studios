import Head from "next/head";

import {
  Header,
  Hero,
  Benefits,
  Facilities,
  Leader,
  Cta,
  Footer,
} from "../components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Freedom Studios Academy</title>
        <meta
          name="description"
          content="World Class Training Program organized by Freedom Studios Academy"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Hero />
        <Benefits />
        <Facilities />
        <Leader />
        <Cta />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
