import Head from "next/head";

import { Hero, Benefits, Facilities, Leader, Cta, Footer } from "../components";

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

      <main className="w-screen h-screen overflow-x-hidden overflow-scroll scroll-smooth snap snap-y snap-mandatory">
        <Hero />
        <Benefits />
        <Facilities />
        <Leader />
        <Cta />
        <Footer />
      </main>
    </div>
  );
}
