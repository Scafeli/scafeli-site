import Head from "next/head";
import Link from "next/link";

import * as Icon from "react-feather";

import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Gustavo Scafeli</title>

        <meta name="og:title" property="og:title" content="Gustavo Scafeli" />
        <meta
          name="description"
          content="Senior Software Engineer, JavaScript enthusiast and educator."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="hero">
        <div className="container">
          <h3>Hello there,</h3>
          <h1>
            I'm a Senior Software Engineer based in Rio. <br /> Currently
            working to make Anonimatta a global platform.
          </h1>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-8">
              <img src="https://images.unsplash.com/photo-1606127195437-d12564b184e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
            </div>
            <div className="col-md-4">
              <h2>Anonimatta</h2>
            </div>
          </div>

          <div className="row d-flex align-items-center">
            <div className="col-md-4">
              <h2>Zappy</h2>
            </div>
            <div className="col-md-8">
              <img src="https://images.unsplash.com/photo-1606127195437-d12564b184e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h1>Some of the clients I've worked with</h1>

          <div className="row">
            <div className="col-md-3">Microsoft</div>

            <div className="col-md-3">UFRJ</div>

            <div className="col-md-3">Adidas</div>

            <div className="col-md-3">Prefeitura do Rio</div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
