import React from "react";
import Link from "next/link";

import * as Icon from "react-feather";
import UseAnimations from "react-useanimations";

import github from "react-useanimations/lib/github";
import instagram from "react-useanimations/lib/instagram";
import twitter from "react-useanimations/lib/twitter";
import linkedin from "react-useanimations/lib/linkedin";

import Image from "next/image";

export default function Header() {
  return (
    <>
      <header>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link href="/" className="me-auto">
              {/* <img className="logo-scafeli" src="../logo-scafeli.svg" /> */}
              <span className="logo-scafeli">Gustavo Scafeli</span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-2 mb-lg-0 d-flex align-items-center">
                <li className="nav-item">
                  <Link href="/about">
                    <a className="nav-link">About</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/works">
                    <a className="nav-link">Works</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/blog">
                    <a className="nav-link">Blog (pt-BR)</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    href="mailto:gustavoscafeli@gmail.com"
                    className="nav-link"
                  >
                    Get in touch
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
