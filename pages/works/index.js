import Head from "next/head";
import Link from "next/link";

import * as Icon from "react-feather";

import Layout from "../../components/layout";

export default function Projetos() {
  return (
    <Layout>
      <Head>
        <title>Works - Gustavo Scafeli</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="cards__projects">
        <div className="container">
          <div className="head__page">
            <h1>Works</h1>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="card--project">
                <div className="card__image">
                  <img src="https://images.unsplash.com/photo-1578903947422-4d39d207aad7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
                </div>
                <div className="card__content">
                  <h2>Anonimatta</h2>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card--project">
                <div className="card__image">
                  <img src="https://images.unsplash.com/photo-1578903947422-4d39d207aad7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
                </div>
                <div className="card__content">
                  <h2>Zappy</h2>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card--project">
                <div className="card__image">
                  <img src="https://images.unsplash.com/photo-1578903947422-4d39d207aad7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
                </div>
                <div className="card__content">
                  <h2>Quero Medicina</h2>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card--project">
                <div className="card__image">
                  <img src="https://images.unsplash.com/photo-1578903947422-4d39d207aad7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
                </div>
                <div className="card__content">
                  <h2>Estúdio Niterói</h2>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card--project">
                <div className="card__image">
                  <img src="https://images.unsplash.com/photo-1578903947422-4d39d207aad7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
                </div>
                <div className="card__content">
                  <h2>Adidas</h2>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card--project">
                <div className="card__image">
                  <img src="https://images.unsplash.com/photo-1578903947422-4d39d207aad7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
                </div>
                <div className="card__content">
                  <h2>Scafeli</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
